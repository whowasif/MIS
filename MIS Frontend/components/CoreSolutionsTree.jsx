import React, { useEffect, useRef, useState } from 'react'

/*
 * CoreSolutionsCircuit
 * A "rich" printed-circuit-board that powers up when scrolled into view.
 * A central CPU chip feeds 4 glowing gold traces (Manhattan / 45-90 routing)
 * that fork out to 4 connector nodes. From each node a glass service card
 * hangs on a connector and swings to a gentle rest. Idle state keeps a soft
 * pulse travelling along the traces + drifting data dots.
 *
 * Pure SVG + CSS. No libs. Respects prefers-reduced-motion.
 * Brand: navy #0a101b board, gold #f7e500 traces.
 */

const BRANCHES = [
  {
    key: 'digital',
    title: 'Digital Services',
    href: '/digital-services',
    icon: 'M4 5h16v10H4z M2 19h20', // monitor-ish
    // Manhattan-routed trace from chip (500,470) out to a widely-spaced node.
    trace: 'M500,470 L500,440 L150,440 L150,300',
    node: { x: 150, y: 300 },
    align: 'edge-left',
    leaves: ['Web Development', 'Custom Software', 'Mobile Apps', 'AI Solutions', 'Cyber Security', 'E-Commerce'],
  },
  {
    key: 'corporate',
    title: 'Business & Corporate',
    href: '/enterprise-solutions',
    icon: 'M4 20V8l8-5 8 5v12 M9 20v-6h6v6',
    trace: 'M500,470 L500,420 L385,420 L385,220',
    node: { x: 385, y: 220 },
    align: 'center',
    leaves: ['IT Equipments', 'Security System', 'Office Equipments', 'Networking', 'Server Setup', 'Power Solution'],
  },
  {
    key: 'maintenance',
    title: 'Maintenance & Support',
    href: '/maintenance-support',
    icon: 'M14 6l4 4-8 8-4-1-1-4z',
    trace: 'M500,470 L500,420 L620,420 L620,220',
    node: { x: 620, y: 220 },
    align: 'center',
    leaves: ['AMC Contracts', 'On-call Repair', 'Installation', 'Troubleshooting', 'Remote Solution'],
  },
  {
    key: 'procurement',
    title: 'Procurement Service',
    href: '/product-catalog',
    icon: 'M6 6h15l-1.5 9h-12z M6 6 5 3H2 M9 20a1 1 0 100-2 1 1 0 000 2 M18 20a1 1 0 100-2 1 1 0 000 2',
    trace: 'M500,470 L500,440 L850,440 L850,300',
    node: { x: 850, y: 300 },
    align: 'edge-right',
    leaves: ['Hardware Sourcing', 'Bulk Supply', 'Corporate Deals', 'Vendor Management', 'Licensing', 'Fast Delivery'],
  },
]

// decorative extra traces + pads to make the board look "rich"
const DECO_TRACES = [
  'M500,470 L500,560 L340,560 L340,610',
  'M500,470 L500,560 L660,560 L660,610',
  'M250,250 L180,250 L180,300',
  'M750,250 L820,250 L820,300',
  'M430,230 L430,180 L360,180',
  'M570,230 L570,180 L640,180',
  'M340,610 L340,650 L420,650',
  'M660,610 L660,650 L580,650',
]
const DECO_PADS = [
  { x: 340, y: 610 }, { x: 660, y: 610 }, { x: 180, y: 300 }, { x: 820, y: 300 },
  { x: 360, y: 180 }, { x: 640, y: 180 }, { x: 340, y: 560 }, { x: 660, y: 560 },
  { x: 420, y: 650 }, { x: 580, y: 650 }, { x: 500, y: 560 },
]

const CoreSolutionsCircuit = () => {
  const wrapRef = useRef(null)
  const [on, setOn] = useState(false)

  useEffect(() => {
    const el = wrapRef.current
    if (!el) return
    const reduce = typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce) { setOn(true); return }
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) { setOn(true); obs.disconnect() } })
    }, { threshold: 0.25 })
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  // fire the travelling "current" pulses along each trace once powered on
  useEffect(() => {
    if (!on || !wrapRef.current) return
    const motions = wrapRef.current.querySelectorAll('.csc-motion')
    motions.forEach((m, i) => {
      const begin = 0.15 + i * 0.15
      if (typeof m.beginElementAt === 'function') {
        try { m.beginElementAt(begin) } catch (_) { try { m.beginElement() } catch (e) {} }
      } else if (typeof m.beginElement === 'function') {
        setTimeout(() => { try { m.beginElement() } catch (e) {} }, begin * 1000)
      }
    })
  }, [on])

  return (
    <div className={`csc-wrap ${on ? 'on' : ''}`} ref={wrapRef}>
      {/* ---------- DESKTOP / TABLET: SVG CIRCUIT BOARD ---------- */}
      <div className="csc-board">
        <svg viewBox="0 0 1000 720" preserveAspectRatio="xMidYMid meet" className="csc-svg" aria-hidden="true">
          <defs>
            <linearGradient id="traceGrad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#f7e500" />
              <stop offset="100%" stopColor="#c99a0a" />
            </linearGradient>
            <radialGradient id="boardGlow" cx="50%" cy="42%" r="55%">
              <stop offset="0%" stopColor="rgba(247,229,0,0.14)" />
              <stop offset="100%" stopColor="rgba(247,229,0,0)" />
            </radialGradient>
            <filter id="cGlow" x="-60%" y="-60%" width="220%" height="220%">
              <feGaussianBlur stdDeviation="3.4" result="b" />
              <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
            </filter>
            <pattern id="grid" width="26" height="26" patternUnits="userSpaceOnUse">
              <path d="M26 0H0V26" fill="none" stroke="rgba(247,229,0,0.05)" strokeWidth="1" />
            </pattern>
          </defs>

          {/* faint pcb grid + ambient glow */}
          <rect x="0" y="0" width="1000" height="720" fill="url(#grid)" />
          <circle className="csc-ambient" cx="500" cy="300" r="330" fill="url(#boardGlow)" />

          {/* decorative traces (dim, part of the "rich" board) */}
          {DECO_TRACES.map((d, i) => (
            <path key={`deco-${i}`} className="csc-deco" d={d} fill="none" stroke="rgba(247,229,0,0.16)" strokeWidth="2.5" strokeLinejoin="round" strokeLinecap="round" />
          ))}
          {DECO_PADS.map((p, i) => (
            <circle key={`dpad-${i}`} className="csc-deco-pad" cx={p.x} cy={p.y} r="4" fill="none" stroke="rgba(247,229,0,0.35)" strokeWidth="2" />
          ))}

          {/* MAIN traces: a dim base layer + a bright layer that "fills" on power-up */}
          {BRANCHES.map((b, bi) => (
            <g key={`trace-${b.key}`}>
              <path d={b.trace} fill="none" stroke="rgba(247,229,0,0.22)" strokeWidth="3.5" strokeLinejoin="round" strokeLinecap="round" />
              <path
                className={`csc-trace csc-trace-${bi}`}
                d={b.trace}
                fill="none"
                stroke="url(#traceGrad)"
                strokeWidth="3.5"
                strokeLinejoin="round"
                strokeLinecap="round"
                filter="url(#cGlow)"
              />
              {/* travelling pulse dot */}
              <circle className={`csc-pulse csc-pulse-${bi}`} r="4.5" fill="#fff6a8" filter="url(#cGlow)">
                <animateMotion className="csc-motion" dur="1.1s" begin="indefinite" fill="freeze" path={b.trace} />
              </circle>
            </g>
          ))}

          {/* CPU chip at the base */}
          <g className="csc-chip" filter="url(#cGlow)">
            <rect x="466" y="468" width="68" height="68" rx="10" fill="#0e1626" stroke="url(#traceGrad)" strokeWidth="2.5" />
            {/* pins */}
            {[...Array(4)].map((_, i) => (
              <React.Fragment key={i}>
                <line x1={478 + i * 14} y1="460" x2={478 + i * 14} y2="468" stroke="#c99a0a" strokeWidth="2.5" />
                <line x1={478 + i * 14} y1="536" x2={478 + i * 14} y2="544" stroke="#c99a0a" strokeWidth="2.5" />
                <line x1="458" y1={480 + i * 14} x2="466" y2={480 + i * 14} stroke="#c99a0a" strokeWidth="2.5" />
                <line x1="534" y1={480 + i * 14} x2="542" y2={480 + i * 14} stroke="#c99a0a" strokeWidth="2.5" />
              </React.Fragment>
            ))}
            <rect x="484" y="486" width="32" height="32" rx="5" fill="none" stroke="#f7e500" strokeWidth="2" />
            <text x="500" y="508" textAnchor="middle" fontSize="12" fontWeight="800" fill="#f7e500" fontFamily="monospace">MIS</text>
          </g>

          {/* connector nodes at each trace tip */}
          {BRANCHES.map((b, bi) => (
            <g key={`node-${b.key}`} className={`csc-node csc-node-${bi}`}>
              <circle cx={b.node.x} cy={b.node.y} r="10" fill="#0e1626" stroke="url(#traceGrad)" strokeWidth="2.5" filter="url(#cGlow)" />
              <circle className="csc-node-core" cx={b.node.x} cy={b.node.y} r="4" fill="#f7e500" />
              {/* short connector down to the hanging card */}
              <line className="csc-rope" x1={b.node.x} y1={b.node.y + 10} x2={b.node.x} y2={b.node.y + 34} stroke="rgba(247,229,0,0.5)" strokeWidth="2" />
            </g>
          ))}

          {/* drifting data dots along the two outer traces */}
          {on && BRANCHES.map((b, bi) => (
            <circle key={`data-${b.key}`} className="csc-data" r="2.4" fill="#f7e500" opacity="0">
              <animateMotion dur={`${3 + bi * 0.4}s`} begin={`${2.4 + bi * 0.5}s`} repeatCount="indefinite" path={b.trace} />
            </circle>
          ))}
        </svg>

        {/* HANGING GLASS CARDS (HTML for crisp text + interactivity) */}
        <div className="csc-cards">
          {BRANCHES.map((b, bi) => (
            <a
              key={b.key}
              href={b.href}
              className={`csc-card ${b.align || 'center'}`}
              style={{
                left: `${(b.node.x / 1000) * 100}%`,
                top: `${((b.node.y + 34) / 720) * 100}%`,
                '--drop-delay': `${1.2 + bi * 0.22}s`,
              }}
            >
              <span className="csc-card-swing">
                <span className="csc-card-top">
                  <svg className="csc-card-ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d={b.icon} /></svg>
                  <span className="csc-card-title">{b.title}</span>
                </span>
                <span className="csc-card-tags">
                  {b.leaves.map((l) => <span key={l} className="csc-tag">{l}</span>)}
                </span>
              </span>
            </a>
          ))}
        </div>
      </div>

      {/* ---------- MOBILE FALLBACK: vertical circuit spine ---------- */}
      <div className="csc-mobile">
        <div className="csc-spine" />
        {BRANCHES.map((b, bi) => (
          <a key={b.key} href={b.href} className="csc-m-card" style={{ transitionDelay: `${0.15 + bi * 0.13}s` }}>
            <span className="csc-m-connector" />
            <span className="csc-m-node" />
            <span className="csc-m-body">
              <span className="csc-m-title">{b.title}</span>
              <span className="csc-m-tags">{b.leaves.map((l) => <span key={l} className="csc-m-tag">{l}</span>)}</span>
            </span>
          </a>
        ))}
      </div>

      <style jsx>{`
        .csc-wrap { position: relative; width: 100%; }

        /* board */
        .csc-board { position: relative; width: 100%; max-width: 1040px; margin: 0 auto; aspect-ratio: 1000 / 720; }
        .csc-svg { width: 100%; height: 100%; display: block; overflow: visible; }

        .csc-ambient { opacity: 0; transition: opacity 1.2s ease; }
        .on .csc-ambient { opacity: 1; }

        /* deco traces fade in dim */
        .csc-deco, .csc-deco-pad { opacity: 0; transition: opacity 1s ease .1s; }
        .on .csc-deco, .on .csc-deco-pad { opacity: 1; }

        /* main bright traces "fill" via dash draw */
        .csc-trace { stroke-dasharray: 620; stroke-dashoffset: 620; }
        .on .csc-trace-0 { transition: stroke-dashoffset 1.1s ease .15s; stroke-dashoffset: 0; }
        .on .csc-trace-1 { transition: stroke-dashoffset 1.1s ease .30s; stroke-dashoffset: 0; }
        .on .csc-trace-2 { transition: stroke-dashoffset 1.1s ease .45s; stroke-dashoffset: 0; }
        .on .csc-trace-3 { transition: stroke-dashoffset 1.1s ease .60s; stroke-dashoffset: 0; }

        /* chip powers on */
        .csc-chip { opacity: 0.35; transition: opacity .5s ease; }
        .on .csc-chip { opacity: 1; animation: chipPulse 3s ease-in-out 1.4s infinite; }
        @keyframes chipPulse { 0%,100% { filter: drop-shadow(0 0 2px rgba(247,229,0,0.4)); } 50% { filter: drop-shadow(0 0 8px rgba(247,229,0,0.9)); } }

        /* nodes pop when the trace reaches them */
        .csc-node { opacity: 0; transform: scale(0); transform-box: fill-box; transform-origin: center; }
        .on .csc-node-0 { transition: opacity .4s ease 1.0s, transform .5s cubic-bezier(.34,1.56,.64,1) 1.0s; opacity: 1; transform: scale(1); }
        .on .csc-node-1 { transition: opacity .4s ease 1.15s, transform .5s cubic-bezier(.34,1.56,.64,1) 1.15s; opacity: 1; transform: scale(1); }
        .on .csc-node-2 { transition: opacity .4s ease 1.30s, transform .5s cubic-bezier(.34,1.56,.64,1) 1.30s; opacity: 1; transform: scale(1); }
        .on .csc-node-3 { transition: opacity .4s ease 1.45s, transform .5s cubic-bezier(.34,1.56,.64,1) 1.45s; opacity: 1; transform: scale(1); }
        .csc-node-core { animation: none; }
        .on .csc-node-core { animation: nodeGlow 2.4s ease-in-out infinite; }
        @keyframes nodeGlow { 0%,100% { opacity: .6; } 50% { opacity: 1; } }

        .csc-pulse { opacity: 0; }
        .on .csc-pulse { opacity: 1; }
        .csc-data { opacity: 0; }
        .on .csc-data { opacity: .9; }

        /* ---- hanging glass cards ---- */
        .csc-cards { position: absolute; inset: 0; pointer-events: none; }
        .csc-card {
          position: absolute;
          pointer-events: auto; text-decoration: none;
          width: 210px;
        }
        .csc-card.center { transform: translateX(-50%); }
        .csc-card.edge-left { transform: translateX(-22%); }
        .csc-card.edge-right { transform: translateX(-78%); }
        .csc-card-swing {
          display: block;
          background: linear-gradient(160deg, rgba(20,28,43,0.82), rgba(10,16,27,0.9));
          backdrop-filter: blur(10px);
          border: 1px solid rgba(247,229,0,0.38);
          border-radius: 14px;
          padding: 12px 14px;
          box-shadow: 0 14px 34px rgba(0,0,0,0.5), inset 0 0 22px rgba(247,229,0,0.06);
          transform-origin: top center;
          opacity: 0;
          transform: translateY(-18px) scale(.96);
        }
        .csc-card.edge-left .csc-card-swing { transform-origin: 22% top; }
        .csc-card.edge-right .csc-card-swing { transform-origin: 78% top; }
        .on .csc-card .csc-card-swing {
          opacity: 1;
          transform: translateY(0) scale(1);
          transition: opacity .5s ease var(--drop-delay), transform .7s cubic-bezier(.34,1.4,.5,1) var(--drop-delay);
          animation: swing 5s ease-in-out infinite;
          animation-delay: calc(var(--drop-delay) + .7s);
        }
        @keyframes swing {
          0%, 100% { transform: rotate(-1.4deg); }
          50% { transform: rotate(1.4deg); }
        }
        .csc-card:hover .csc-card-swing { border-color: #f7e500; box-shadow: 0 16px 40px rgba(247,229,0,0.22), inset 0 0 26px rgba(247,229,0,0.12); }

        .csc-card-top { display: flex; align-items: center; gap: 9px; }
        .csc-card-ic { width: 20px; height: 20px; color: #f7e500; flex-shrink: 0; }
        .csc-card-title { color: #fff; font-weight: 800; font-size: 14px; line-height: 1.15; }
        .csc-card-tags { display: flex; flex-wrap: wrap; gap: 5px; margin-top: 10px; }
        .csc-tag {
          font-size: 10px; font-weight: 600; color: #f7e500;
          background: rgba(247,229,0,0.10);
          border: 1px solid rgba(247,229,0,0.28);
          padding: 3px 8px; border-radius: 999px;
        }

        /* ---- mobile ---- */
        .csc-mobile { display: none; position: relative; padding: 10px 0 0 22px; }
        .csc-spine { position: absolute; left: 22px; top: 0; bottom: 30px; width: 2px; background: linear-gradient(#f7e500, rgba(247,229,0,0.2)); }
        .csc-m-card {
          position: relative; display: flex; align-items: flex-start; gap: 0;
          text-decoration: none; margin-bottom: 16px;
          opacity: 0; transform: translateX(18px);
          transition: opacity .5s ease, transform .5s cubic-bezier(.34,1.56,.64,1);
        }
        .on .csc-m-card { opacity: 1; transform: translateX(0); }
        .csc-m-connector { width: 26px; height: 2px; background: rgba(247,229,0,0.5); margin-top: 22px; margin-left: 0; }
        .csc-m-node { position: absolute; left: -6px; top: 18px; width: 10px; height: 10px; border-radius: 50%; background: #f7e500; box-shadow: 0 0 8px rgba(247,229,0,0.8); }
        .csc-m-body {
          flex: 1; background: linear-gradient(160deg, rgba(20,28,43,0.85), rgba(10,16,27,0.92));
          border: 1px solid rgba(247,229,0,0.35); border-radius: 14px; padding: 12px 14px;
        }
        .csc-m-title { display: block; color: #fff; font-weight: 800; font-size: 15px; margin-bottom: 8px; }
        .csc-m-tags { display: flex; flex-wrap: wrap; gap: 6px; }
        .csc-m-tag { font-size: 11px; font-weight: 700; color: #0a101b; background: linear-gradient(135deg, #f7e500, #d8ab12); padding: 4px 10px; border-radius: 999px; }

        @media (max-width: 900px) {
          .csc-board { display: none; }
          .csc-mobile { display: block; }
        }

        @media (prefers-reduced-motion: reduce) {
          .csc-trace, .csc-node, .csc-card-swing, .csc-m-card, .csc-deco, .csc-deco-pad, .csc-ambient { transition: none !important; }
          .csc-chip, .csc-node-core, .on .csc-card .csc-card-swing { animation: none !important; }
          .csc-trace { stroke-dashoffset: 0 !important; }
          .csc-card-swing { opacity: 1 !important; transform: none !important; }
        }
      `}</style>
    </div>
  )
}

export default CoreSolutionsCircuit
