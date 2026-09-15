import React, { useEffect, useRef, useState } from 'react'

/*
 * CoreSolutionsTree
 * A realistic, growing "solutions tree" that animates into view when the
 * section scrolls onto screen. The trunk grows, splits into 4 branches
 * (3 service pillars + a Hardware/Products branch), and leaves (sub-categories)
 * sprout at the branch tips with a staggered, organic animation.
 *
 * Pure SVG + CSS. No external animation libs. Respects prefers-reduced-motion.
 */

const BRANCHES = [
  {
    key: 'digital',
    title: 'Digital Services',
    href: '/digital-services',
    // path is drawn from trunk-top toward the tip; tip is where leaves cluster
    path: 'M500,470 C420,400 360,360 300,300 C255,255 225,220 205,180',
    twigs: ['M300,300 C285,285 275,270 288,250', 'M360,360 C350,340 345,325 335,312'],
    tip: { x: 205, y: 175 },
    labelSide: 'left',
    leaves: ['Web Development', 'Custom Software', 'Mobile Apps', 'AI Solutions', 'Cyber Security', 'E-Commerce'],
  },
  {
    key: 'corporate',
    title: 'Business & Corporate',
    href: '/enterprise-solutions',
    path: 'M500,470 C455,395 435,345 420,285 C407,235 402,195 400,150',
    twigs: ['M420,285 C405,272 395,258 408,242', 'M435,345 C422,332 415,318 425,305'],
    tip: { x: 400, y: 145 },
    labelSide: 'left',
    leaves: ['IT Equipments', 'Security System', 'Office Equipments', 'Networking', 'Server Setup', 'Power Solution'],
  },
  {
    key: 'maintenance',
    title: 'Maintenance & Support',
    href: '/maintenance-support',
    path: 'M500,470 C545,395 565,345 580,285 C593,235 598,195 600,150',
    twigs: ['M580,285 C595,272 605,258 592,242', 'M565,345 C578,332 585,318 575,305'],
    tip: { x: 600, y: 145 },
    labelSide: 'right',
    leaves: ['AMC Contracts', 'On-call Repair', 'Installation', 'Troubleshooting', 'Remote Solution'],
  },
  {
    key: 'hardware',
    title: 'Hardware & Products',
    href: '/categories/desktop',
    path: 'M500,470 C580,400 640,360 700,300 C745,255 775,220 795,180',
    twigs: ['M700,300 C715,285 725,270 712,250', 'M640,360 C650,340 655,325 665,312'],
    tip: { x: 795, y: 175 },
    labelSide: 'right',
    leaves: ['Desktops', 'Laptops', 'Components', 'Monitors', 'Networking', 'Accessories'],
  },
]

// deterministic offsets producing a FULL, organic canopy at each branch tip.
// We render more leaves than sub-categories (some are decorative filler) so the
// tips look like real foliage. Each leaf carries a scale + rotation.
const buildCanopy = (count) => {
  const leaves = []
  // compact cluster: leaves fan out and up around the tip, not scattered wide
  const total = Math.max(count + 4, 10)
  for (let i = 0; i < total; i++) {
    const t = i / (total - 1)
    const angle = (-150 + t * 300) * (Math.PI / 180) // fan left→right, biased upward
    const ring = i % 3
    const r = 14 + ring * 11 + ((i % 2) * 5) // tight radius
    const dx = Math.cos(angle) * r
    const dy = Math.sin(angle) * r * 0.7 - 8 // lift the cluster slightly above tip
    // leaves point outward from cluster center for a natural spray
    const rot = (angle * 180) / Math.PI + 90 + ((i % 2) ? 10 : -10)
    const scale = ring === 0 ? 0.72 : ring === 1 ? 0.92 : 1.1
    leaves.push({ dx, dy, rot, scale })
  }
  return leaves
}

const CoreSolutionsTree = () => {
  const wrapRef = useRef(null)
  const [grown, setGrown] = useState(false)

  useEffect(() => {
    const el = wrapRef.current
    if (!el) return
    const reduce = typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce) { setGrown(true); return }
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) { setGrown(true); obs.disconnect() } })
    }, { threshold: 0.25 })
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <div className={`cst-wrap ${grown ? 'grown' : ''}`} ref={wrapRef}>
      {/* ---------- DESKTOP / TABLET: SVG TREE ---------- */}
      <div className="cst-tree" aria-hidden="true">
        <svg viewBox="0 0 1000 720" preserveAspectRatio="xMidYMax meet" className="cst-svg">
          <defs>
            <linearGradient id="bark" x1="0" y1="1" x2="0" y2="0">
              <stop offset="0%" stopColor="#3a2a17" />
              <stop offset="45%" stopColor="#5a3d21" />
              <stop offset="100%" stopColor="#7a5330" />
            </linearGradient>
            <linearGradient id="barkThin" x1="0" y1="1" x2="0" y2="0">
              <stop offset="0%" stopColor="#5a3d21" />
              <stop offset="100%" stopColor="#8a5f36" />
            </linearGradient>
            <radialGradient id="leafGrad" cx="35%" cy="30%" r="80%">
              <stop offset="0%" stopColor="#fff59a" />
              <stop offset="45%" stopColor="#f7e500" />
              <stop offset="100%" stopColor="#d8ab12" />
            </radialGradient>
            <radialGradient id="glow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="rgba(247,229,0,0.35)" />
              <stop offset="100%" stopColor="rgba(247,229,0,0)" />
            </radialGradient>
            <filter id="soft" x="-30%" y="-30%" width="160%" height="160%">
              <feGaussianBlur stdDeviation="2" />
            </filter>
          </defs>

          {/* ground shadow */}
          <ellipse className="cst-ground" cx="500" cy="690" rx="260" ry="26" fill="rgba(0,0,0,0.45)" filter="url(#soft)" />

          {/* soft ambient glow behind canopy */}
          <circle className="cst-ambient" cx="500" cy="220" r="300" fill="url(#glow)" />

          {/* drifting light particles */}
          {[...Array(9)].map((_, i) => (
            <circle key={i} className={`cst-spore s${i}`} r={1.6 + (i % 3) * 0.7} cx={300 + i * 55} cy={640} fill="#f7e500" opacity="0" />
          ))}

          {/* trunk (thick, grows first) */}
          <path
            className="cst-trunk"
            d="M500,700 C492,620 488,560 496,500 C500,486 500,480 500,470"
            fill="none"
            stroke="url(#bark)"
            strokeWidth="34"
            strokeLinecap="round"
          />
          {/* trunk base flare */}
          <path className="cst-flare" d="M470,700 Q500,660 530,700 Z" fill="url(#bark)" />

          {/* branches */}
          {BRANCHES.map((b, bi) => (
            <path
              key={b.key}
              className={`cst-branch cst-branch-${bi}`}
              d={b.path}
              fill="none"
              stroke="url(#barkThin)"
              strokeWidth="16"
              strokeLinecap="round"
            />
          ))}

          {/* secondary twigs for organic realism */}
          {BRANCHES.map((b, bi) => (
            b.twigs?.map((tw, ti) => (
              <path
                key={`${b.key}-tw-${ti}`}
                className={`cst-branch cst-branch-${bi}`}
                d={tw}
                fill="none"
                stroke="url(#barkThin)"
                strokeWidth="6"
                strokeLinecap="round"
              />
            ))
          ))}

          {/* full canopy of leaves at each branch tip */}
          {BRANCHES.map((b, bi) => {
            const canopy = buildCanopy(b.leaves.length)
            return (
              <g key={`leaves-${b.key}`}>
                {canopy.map((o, li) => {
                  const cx = b.tip.x + o.dx
                  const cy = b.tip.y + o.dy
                  const delay = 0.95 + bi * 0.16 + li * 0.05
                  const s = o.scale
                  // Leaf drawn from base point (cx,cy) upward; width w, height h scaled.
                  const w = 15 * s
                  const h = 38 * s
                  const rib = 34 * s
                  return (
                    <g
                      key={li}
                      className="cst-leaf"
                      style={{ transformOrigin: `${cx}px ${cy}px`, transitionDelay: `${delay}s`, animationDelay: `${delay + 1.2}s` }}
                      transform={`rotate(${o.rot} ${cx} ${cy})`}
                    >
                      <path
                        d={`M${cx},${cy} C${cx - w},${cy - h * 0.24} ${cx - w},${cy - h * 0.74} ${cx},${cy - h} C${cx + w},${cy - h * 0.74} ${cx + w},${cy - h * 0.24} ${cx},${cy} Z`}
                        fill="url(#leafGrad)"
                        stroke="#c99a0a"
                        strokeWidth="0.7"
                      />
                      <line x1={cx} y1={cy - 2} x2={cx} y2={cy - rib} stroke="#b8890a" strokeWidth="0.7" opacity="0.65" />
                    </g>
                  )
                })}
              </g>
            )
          })}
        </svg>

        {/* HTML labels layered over the SVG tips (crisp text + clickable) */}
        <div className="cst-labels">
          {BRANCHES.map((b, bi) => (
            <a
              key={b.key}
              href={b.href}
              className={`cst-label ${b.labelSide}`}
              style={{
                left: `${(b.tip.x / 1000) * 100}%`,
                top: `${(b.tip.y / 720) * 100}%`,
                transitionDelay: `${1.5 + bi * 0.18}s`,
              }}
            >
              <span className="cst-label-title">{b.title}</span>
              <span className="cst-label-tags">{b.leaves.join(' · ')}</span>
            </a>
          ))}
        </div>
      </div>

      {/* ---------- MOBILE FALLBACK: vertical growing list ---------- */}
      <div className="cst-mobile">
        {BRANCHES.map((b, bi) => (
          <a key={b.key} href={b.href} className="cst-m-branch" style={{ transitionDelay: `${0.2 + bi * 0.14}s` }}>
            <div className="cst-m-stem" />
            <div className="cst-m-card">
              <h3>{b.title}</h3>
              <div className="cst-m-leaves">
                {b.leaves.map((l, li) => (
                  <span key={l} className="cst-m-leaf" style={{ transitionDelay: `${0.5 + bi * 0.14 + li * 0.05}s` }}>{l}</span>
                ))}
              </div>
            </div>
          </a>
        ))}
      </div>

      <style jsx>{`
        .cst-wrap { position: relative; width: 100%; }

        /* ---- SVG tree container ---- */
        .cst-tree { position: relative; width: 100%; max-width: 1000px; margin: 0 auto; aspect-ratio: 1000 / 720; }
        .cst-svg { width: 100%; height: 100%; display: block; overflow: visible; }

        /* trunk & branches: draw with stroke-dash */
        .cst-trunk { stroke-dasharray: 300; stroke-dashoffset: 300; transition: stroke-dashoffset 1s cubic-bezier(.4,0,.2,1); }
        .cst-flare { opacity: 0; transition: opacity .5s ease .3s; }
        .cst-branch { stroke-dasharray: 500; stroke-dashoffset: 500; }
        .cst-branch-0 { transition: stroke-dashoffset .9s cubic-bezier(.4,0,.2,1) .75s; }
        .cst-branch-1 { transition: stroke-dashoffset .9s cubic-bezier(.4,0,.2,1) .9s; }
        .cst-branch-2 { transition: stroke-dashoffset .9s cubic-bezier(.4,0,.2,1) 1.0s; }
        .cst-branch-3 { transition: stroke-dashoffset .9s cubic-bezier(.4,0,.2,1) 1.15s; }

        .cst-ground { opacity: 0; transform: scaleX(.4); transform-origin: 500px 690px; transition: opacity .6s ease, transform .8s ease; }
        .cst-ambient { opacity: 0; transition: opacity 1.4s ease .8s; }

        .cst-leaf { opacity: 0; transform: scale(0); transition: opacity .5s ease, transform .55s cubic-bezier(.34,1.56,.64,1); }

        /* spores idle drift (only after grown) */
        .cst-spore { animation: none; }

        /* labels */
        .cst-labels { position: absolute; inset: 0; pointer-events: none; }
        .cst-label {
          position: absolute; transform: translate(-50%, -140%);
          pointer-events: auto; text-decoration: none;
          background: rgba(10,16,27,0.72); backdrop-filter: blur(6px);
          border: 1px solid rgba(247,229,0,0.35); border-radius: 12px;
          padding: 8px 12px; min-width: 150px; max-width: 210px;
          opacity: 0; transition: opacity .6s ease, transform .6s cubic-bezier(.34,1.56,.64,1);
          box-shadow: 0 8px 24px rgba(0,0,0,0.35);
        }
        .cst-label.left { transform: translate(-92%, -120%); }
        .cst-label.right { transform: translate(-8%, -120%); }
        .cst-label:hover { border-color: #f7e500; box-shadow: 0 10px 30px rgba(247,229,0,0.25); }
        .cst-label-title { display: block; color: #fff; font-weight: 800; font-size: 14px; line-height: 1.2; }
        .cst-label-tags { display: block; color: #b9c1cf; font-size: 10.5px; margin-top: 4px; line-height: 1.35; }

        /* ---- GROWN state ---- */
        .grown .cst-trunk { stroke-dashoffset: 0; }
        .grown .cst-flare { opacity: 1; }
        .grown .cst-branch { stroke-dashoffset: 0; }
        .grown .cst-ground { opacity: 1; transform: scaleX(1); }
        .grown .cst-ambient { opacity: 1; }
        .grown .cst-leaf { opacity: 1; transform: scale(1); animation: sway 4.5s ease-in-out infinite; }
        .grown .cst-label { opacity: 1; }
        .grown .cst-label.left { transform: translate(-92%, -100%); }
        .grown .cst-label.right { transform: translate(-8%, -100%); }
        .grown .cst-spore { animation: rise 6s linear infinite; }
        .grown .cst-spore.s1 { animation-delay: .8s } .grown .cst-spore.s2 { animation-delay: 1.6s }
        .grown .cst-spore.s3 { animation-delay: 2.4s } .grown .cst-spore.s4 { animation-delay: 3.2s }
        .grown .cst-spore.s5 { animation-delay: 4s } .grown .cst-spore.s6 { animation-delay: 1.2s }
        .grown .cst-spore.s7 { animation-delay: 2.8s } .grown .cst-spore.s8 { animation-delay: 3.6s }

        @keyframes sway {
          0%, 100% { transform: rotate(0deg); }
          50% { transform: rotate(2.5deg); }
        }
        @keyframes rise {
          0% { opacity: 0; transform: translateY(0) translateX(0); }
          15% { opacity: .9; }
          100% { opacity: 0; transform: translateY(-520px) translateX(30px); }
        }

        /* ---- Mobile fallback (hidden on desktop) ---- */
        .cst-mobile { display: none; }
        .cst-m-branch {
          display: flex; gap: 14px; text-decoration: none;
          opacity: 0; transform: translateY(24px);
          transition: opacity .6s ease, transform .6s cubic-bezier(.34,1.56,.64,1);
        }
        .grown .cst-m-branch { opacity: 1; transform: translateY(0); }
        .cst-m-stem { width: 4px; border-radius: 4px; background: linear-gradient(#7a5330, #f7e500); flex-shrink: 0; }
        .cst-m-card { flex: 1; background: rgba(255,255,255,0.03); border: 1px solid rgba(247,229,0,0.25); border-radius: 14px; padding: 14px 16px; margin-bottom: 14px; }
        .cst-m-card h3 { margin: 0 0 10px; color: #fff; font-size: 16px; font-weight: 800; }
        .cst-m-leaves { display: flex; flex-wrap: wrap; gap: 8px; }
        .cst-m-leaf {
          background: linear-gradient(135deg, #f7e500, #d8ab12); color: #0a101b;
          font-size: 12px; font-weight: 700; padding: 5px 11px; border-radius: 999px;
          opacity: 0; transform: scale(.6);
          transition: opacity .4s ease, transform .45s cubic-bezier(.34,1.56,.64,1);
        }
        .grown .cst-m-leaf { opacity: 1; transform: scale(1); }

        @media (max-width: 820px) {
          .cst-tree { display: none; }
          .cst-mobile { display: block; }
        }

        @media (prefers-reduced-motion: reduce) {
          .cst-trunk, .cst-branch, .cst-leaf, .cst-label, .cst-m-branch, .cst-m-leaf, .cst-ground, .cst-ambient { transition: none !important; animation: none !important; }
        }
      `}</style>
    </div>
  )
}

export default CoreSolutionsTree
