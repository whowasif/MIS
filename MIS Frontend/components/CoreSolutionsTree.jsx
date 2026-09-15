import React, { useEffect, useRef, useState } from 'react'

/*
 * CoreSolutionsSignposts
 * Four rustic wooden sign-posts standing in a row. Each post has a header
 * board (the division) mounted at top, and beneath it the sub-services hang
 * as wooden planks — each tied to the one above by two ropes, forming a
 * vertical hanging chain (per the client's drawing).
 *
 * On scroll into view: header boards settle, then each plank drops and swings
 * down its chain (staggered). Idle: gentle rope sway.
 *
 * Pure CSS/SVG wood + rope. No images. Respects prefers-reduced-motion.
 */

const COLUMNS = [
  {
    key: 'digital',
    title: 'Digital Services',
    href: '/digital-services',
    leaves: ['Web Development', 'Custom Software', 'Mobile Apps', 'AI Solutions', 'Cyber Security', 'E-Commerce'],
  },
  {
    key: 'corporate',
    title: 'Business & Corporate',
    href: '/enterprise-solutions',
    leaves: ['IT Equipments', 'Security System', 'Office Equipments', 'Networking', 'Server Setup', 'Power Solution'],
  },
  {
    key: 'maintenance',
    title: 'Maintenance & Support',
    href: '/maintenance-support',
    leaves: ['AMC Contracts', 'On-call Repair', 'Installation', 'Troubleshooting', 'Remote Solution'],
  },
  {
    key: 'procurement',
    title: 'Procurement Service',
    href: '/product-catalog',
    leaves: ['Hardware Sourcing', 'Bulk Supply', 'Corporate Deals', 'Vendor Management', 'Licensing', 'Fast Delivery'],
  },
]

// small SVG for a pair of ropes connecting two boards
const RopePair = () => (
  <span className="cs-rope" aria-hidden="true">
    <svg viewBox="0 0 60 26" preserveAspectRatio="none">
      <defs>
        <linearGradient id="ropeG" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#d8b26a" />
          <stop offset="50%" stopColor="#b8894a" />
          <stop offset="100%" stopColor="#d8b26a" />
        </linearGradient>
      </defs>
      {/* left rope (slight sag) */}
      <path d="M10,1 C7,10 7,16 10,25" fill="none" stroke="url(#ropeG)" strokeWidth="3" strokeLinecap="round" />
      {/* right rope */}
      <path d="M50,1 C53,10 53,16 50,25" fill="none" stroke="url(#ropeG)" strokeWidth="3" strokeLinecap="round" />
    </svg>
  </span>
)

const CoreSolutionsSignposts = () => {
  const wrapRef = useRef(null)
  const [on, setOn] = useState(false)

  useEffect(() => {
    const el = wrapRef.current
    if (!el) return
    const reduce = typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce) { setOn(true); return }
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) { setOn(true); obs.disconnect() } })
    }, { threshold: 0.18 })
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <div className={`cs-wrap ${on ? 'on' : ''}`} ref={wrapRef}>
      <div className="cs-row">
        {COLUMNS.map((col, ci) => (
          <div className="cs-col" key={col.key}>
            {/* wooden post behind the column */}
            <span className="cs-post" aria-hidden="true" />
            {/* top cross-beam the header hangs from */}
            <span className="cs-beam" aria-hidden="true" />

            {/* header board */}
            <span className="cs-rope cs-rope-head" aria-hidden="true">
              <svg viewBox="0 0 120 22" preserveAspectRatio="none">
                <path d="M28,1 C25,9 25,14 28,21" fill="none" stroke="#c99a54" strokeWidth="3.2" strokeLinecap="round" />
                <path d="M92,1 C95,9 95,14 92,21" fill="none" stroke="#c99a54" strokeWidth="3.2" strokeLinecap="round" />
              </svg>
            </span>

            <a
              href={col.href}
              className="cs-board cs-header"
              style={{ '--i': 0, '--delay': `${ci * 0.12}s` }}
            >
              <span className="cs-board-face">
                <span className="cs-header-title">{col.title}</span>
              </span>
            </a>

            {/* hanging sub-service planks */}
            {col.leaves.map((leaf, li) => (
              <React.Fragment key={leaf}>
                <RopePair />
                <a
                  href={col.href}
                  className="cs-board cs-plank"
                  style={{ '--i': li + 1, '--delay': `${ci * 0.12 + (li + 1) * 0.14}s` }}
                >
                  <span className="cs-board-face">
                    <span className="cs-plank-text">{leaf}</span>
                  </span>
                </a>
              </React.Fragment>
            ))}
          </div>
        ))}
      </div>

      <style jsx>{`
        .cs-wrap { width: 100%; padding: 8px 0 10px; }
        .cs-row {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 22px;
          max-width: 1080px;
          margin: 0 auto;
          align-items: start;
        }
        .cs-col { position: relative; display: flex; flex-direction: column; align-items: center; padding-top: 14px; }

        /* wooden post standing behind each column */
        .cs-post {
          position: absolute; top: 0; bottom: 26px; left: 50%; transform: translateX(-50%);
          width: 16px; border-radius: 4px;
          background:
            linear-gradient(90deg, rgba(0,0,0,0.35), rgba(255,255,255,0.08) 35%, rgba(0,0,0,0.3)),
            linear-gradient(180deg, #6b4a29, #4d3418);
          box-shadow: 0 0 0 1px rgba(0,0,0,0.3), 2px 0 6px rgba(0,0,0,0.4);
          z-index: 0;
        }
        .cs-post::after { /* grain */
          content: ''; position: absolute; inset: 0; border-radius: 4px;
          background: repeating-linear-gradient(180deg, rgba(0,0,0,0.12) 0 2px, transparent 2px 9px);
          opacity: .5;
        }
        /* top cross-beam */
        .cs-beam {
          position: relative; z-index: 1;
          width: 82%; height: 16px; border-radius: 5px;
          background:
            linear-gradient(180deg, rgba(255,255,255,0.14), rgba(0,0,0,0.28)),
            linear-gradient(90deg, #7a5330, #6b4a29);
          box-shadow: 0 3px 8px rgba(0,0,0,0.45), inset 0 1px 0 rgba(255,255,255,0.15);
          margin-bottom: -2px;
        }

        /* rope connectors */
        .cs-rope { position: relative; z-index: 1; width: 100%; height: 22px; display: block; }
        .cs-rope svg { width: 100%; height: 100%; overflow: visible; }
        .cs-rope-head { height: 20px; }

        /* boards (wood cards) */
        .cs-board {
          position: relative; z-index: 2;
          width: 100%; text-decoration: none; display: block;
          transform-origin: top center;
          opacity: 0;
          transform: translateY(-22px) rotate(0deg);
        }
        .cs-board-face {
          position: relative;
          display: block;
          border-radius: 8px;
          padding: 10px 12px;
          text-align: center;
          background:
            linear-gradient(180deg, rgba(255,255,255,0.10), rgba(0,0,0,0.18)),
            repeating-linear-gradient(90deg, #7a5836 0 14px, #6f4f30 14px 28px);
          border: 1px solid #3f2c17;
          box-shadow: 0 6px 16px rgba(0,0,0,0.45), inset 0 1px 0 rgba(255,255,255,0.12), inset 0 -2px 4px rgba(0,0,0,0.3);
        }
        /* iron rivets on the corners */
        .cs-board-face::before, .cs-board-face::after {
          content: ''; position: absolute; top: 6px; width: 5px; height: 5px; border-radius: 50%;
          background: radial-gradient(circle at 35% 30%, #c7ced6, #5b636c);
          box-shadow: 0 0 0 1px rgba(0,0,0,0.4);
        }
        .cs-board-face::before { left: 8px; }
        .cs-board-face::after { right: 8px; }

        .cs-header .cs-board-face {
          background:
            linear-gradient(180deg, rgba(255,255,255,0.12), rgba(0,0,0,0.2)),
            repeating-linear-gradient(90deg, #86633c 0 16px, #78562f 16px 32px);
          border: 2px solid #f7e500;
          box-shadow: 0 8px 20px rgba(0,0,0,0.5), 0 0 18px rgba(247,229,0,0.18), inset 0 1px 0 rgba(255,255,255,0.15);
          padding: 13px 12px;
        }
        .cs-header-title { color: #fff; font-weight: 900; font-size: 15px; line-height: 1.2; text-shadow: 0 1px 2px rgba(0,0,0,0.6); letter-spacing: 0.2px; }
        .cs-plank-text { color: #f8ecd0; font-weight: 700; font-size: 12.5px; text-shadow: 0 1px 2px rgba(0,0,0,0.55); }

        .cs-board:hover .cs-board-face { filter: brightness(1.08); box-shadow: 0 10px 24px rgba(0,0,0,0.5), 0 0 20px rgba(247,229,0,0.28); }

        /* ---- ON: drop + settle each board (translate on the anchor) ---- */
        .on .cs-board {
          opacity: 1;
          transform: translateY(0);
          transition: opacity .45s ease var(--delay), transform .75s cubic-bezier(.34,1.5,.5,1) var(--delay);
        }
        /* idle sway lives on the inner face so it doesn't fight the drop transform */
        .on .cs-board-face {
          animation: cs-sway 5s ease-in-out infinite;
          animation-delay: calc(var(--delay) + .75s);
          transform-origin: top center;
        }
        .on .cs-board:nth-child(4n+1) .cs-board-face { animation-name: cs-sway-alt; }

        @keyframes cs-sway {
          0%, 100% { transform: rotate(-1deg); }
          50% { transform: rotate(1deg); }
        }
        @keyframes cs-sway-alt {
          0%, 100% { transform: rotate(1deg); }
          50% { transform: rotate(-1deg); }
        }

        /* ropes fade in with the board above them */
        .cs-rope { opacity: 0; }
        .on .cs-rope { opacity: 1; transition: opacity .4s ease; }

        /* ---- responsive ---- */
        @media (max-width: 900px) {
          .cs-row { grid-template-columns: repeat(2, 1fr); gap: 18px; }
        }
        @media (max-width: 520px) {
          .cs-row { grid-template-columns: 1fr; gap: 16px; max-width: 320px; }
        }

        @media (prefers-reduced-motion: reduce) {
          .cs-board { opacity: 1 !important; transform: none !important; transition: none !important; animation: none !important; }
          .cs-rope { opacity: 1 !important; }
        }
      `}</style>
    </div>
  )
}

export default CoreSolutionsSignposts
