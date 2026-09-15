import React, { useEffect, useRef, useState } from 'react'

/*
 * CoreSolutions — modern "What We Offer" section over a dark textured
 * background image. Three division cards, monochrome (B&W) icons, and one
 * capability-per-row list with its own relevant icon. Scroll-reveal +
 * hover micro-interactions, pure CSS. Responsive; respects reduced-motion.
 */

// --- monochrome (currentColor) icons ---------------------------------------
const Icon = {
  browser: (p) => (<svg {...p} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><rect x="2.5" y="4" width="19" height="15" rx="2.5" /><path d="M2.5 8h19" /><circle cx="5" cy="6" r=".6" fill="currentColor" /><circle cx="7" cy="6" r=".6" fill="currentColor" /><path d="M8 12.5h8M8 15.5h5" /></svg>),
  crown: (p) => (<svg {...p} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19h16" /><path d="M5 19V9l3 2 4-5 4 5 3-2v10" /><circle cx="12" cy="4" r="1.4" /><circle cx="4.6" cy="8.4" r="1.1" /><circle cx="19.4" cy="8.4" r="1.1" /></svg>),
  wrench: (p) => (<svg {...p} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L3 18v3h3l6.3-6.3a4 4 0 0 0 5.4-5.4l-2.5 2.5-2.1-.4-.4-2.1z" /></svg>),

  // digital chips
  code: (p) => (<svg {...p} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M8 7l-5 5 5 5M16 7l5 5-5 5" /></svg>),
  cube: (p) => (<svg {...p} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2.5 20 7v10l-8 4.5L4 17V7z" /><path d="M4 7l8 4.5L20 7M12 11.5V21" /></svg>),
  mobile: (p) => (<svg {...p} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="7" y="2.5" width="10" height="19" rx="2.5" /><path d="M11 18.5h2" /></svg>),
  ai: (p) => (<svg {...p} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="6" y="7" width="12" height="11" rx="2.5" /><path d="M12 7V4M9 2.5h6M9.5 12v0M14.5 12v0M2.5 11h1.5M20 11h1.5" /></svg>),
  shield: (p) => (<svg {...p} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2.5 20 6v6c0 5-3.4 8-8 9.5C7.4 20 4 17 4 12V6z" /><path d="m9 12 2 2 4-4" /></svg>),
  cart: (p) => (<svg {...p} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M3 4h2l2.2 11.2a1.5 1.5 0 0 0 1.5 1.2h8.4a1.5 1.5 0 0 0 1.5-1.2L21 7H6" /><circle cx="9.5" cy="20" r="1.3" /><circle cx="17.5" cy="20" r="1.3" /></svg>),

  // corporate chips
  monitor: (p) => (<svg {...p} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="12" rx="2" /><path d="M8 20h8M12 16v4" /></svg>),
  camera: (p) => (<svg {...p} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="2.5" y="7" width="19" height="12" rx="2.5" /><circle cx="12" cy="13" r="3.2" /><path d="M8 7l1.5-2.5h5L16 7" /></svg>),
  printer: (p) => (<svg {...p} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M7 8V3h10v5" /><rect x="4" y="8" width="16" height="8" rx="2" /><rect x="7" y="14" width="10" height="6" rx="1" /></svg>),
  network: (p) => (<svg {...p} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="4.5" r="2" /><circle cx="5" cy="19.5" r="2" /><circle cx="19" cy="19.5" r="2" /><path d="M12 6.5v5M12 11.5 5.8 17.8M12 11.5l6.2 6.3" /></svg>),
  server: (p) => (<svg {...p} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="7" rx="2" /><rect x="3" y="13" width="18" height="7" rx="2" /><path d="M7 7.5v0M7 16.5v0" /></svg>),
  power: (p) => (<svg {...p} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2 4 14h7l-1 8 9-12h-7z" /></svg>),

  // maintenance chips
  doc: (p) => (<svg {...p} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M6 2.5h8l4 4V21a.5.5 0 0 1-.5.5H6A.5.5 0 0 1 5.5 21V3A.5.5 0 0 1 6 2.5z" /><path d="M14 2.5V7h4M8 12h8M8 16h5" /></svg>),
  phone: (p) => (<svg {...p} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M6.5 3h3l1.5 5-2 1.5a12 12 0 0 0 5 5l1.5-2 5 1.5v3a2 2 0 0 1-2.2 2A17 17 0 0 1 4.5 5.2 2 2 0 0 1 6.5 3z" /></svg>),
  install: (p) => (<svg {...p} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3v11M8 10l4 4 4-4" /><path d="M4 18h16v2.5H4z" /></svg>),
  bug: (p) => (<svg {...p} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="8" y="7" width="8" height="11" rx="4" /><path d="M9 3l1.5 2.5M15 3l-1.5 2.5M8 10H4M20 10h-4M8 14H3.5M20.5 14H16M8.5 18l-2 2.5M15.5 18l2 2.5" /></svg>),
  remote: (p) => (<svg {...p} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="2" /><path d="M8 8a5.6 5.6 0 0 0 0 8M16 8a5.6 5.6 0 0 1 0 8M5 5a10 10 0 0 0 0 14M19 5a10 10 0 0 1 0 14" /></svg>),
}

const DIVISIONS = [
  {
    key: 'digital',
    title: 'Digital Services',
    tagline: 'Your complete digital presence',
    href: '/digital-services',
    HeadIcon: Icon.browser,
    chips: [
      { label: 'Web Development', I: Icon.code },
      { label: 'Custom Software', I: Icon.cube },
      { label: 'Mobile Apps', I: Icon.mobile },
      { label: 'AI Solutions', I: Icon.ai },
      { label: 'Cyber Security', I: Icon.shield },
      { label: 'E-Commerce', I: Icon.cart },
    ],
  },
  {
    key: 'corporate',
    title: 'Business & Corporate Solutions',
    tagline: 'Enterprise-grade B2B infrastructure',
    href: '/enterprise-solutions',
    HeadIcon: Icon.crown,
    chips: [
      { label: 'IT Equipments', I: Icon.monitor },
      { label: 'Security System', I: Icon.camera },
      { label: 'Office Equipments', I: Icon.printer },
      { label: 'Networking', I: Icon.network },
      { label: 'Server Setup', I: Icon.server },
      { label: 'Power Solution', I: Icon.power },
    ],
  },
  {
    key: 'maintenance',
    title: 'Maintenance & Support',
    tagline: 'Peak performance, always',
    href: '/maintenance-support',
    HeadIcon: Icon.wrench,
    chips: [
      { label: 'AMC Contracts', I: Icon.doc },
      { label: 'On-call Repair', I: Icon.phone },
      { label: 'Installation', I: Icon.install },
      { label: 'Troubleshooting', I: Icon.bug },
      { label: 'Remote Solution', I: Icon.remote },
    ],
  },
]

const CoreSolutions = () => {
  const ref = useRef(null)
  const [on, setOn] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const reduce = typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce) { setOn(true); return }
    const fallback = setTimeout(() => setOn(true), 700)
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) { setOn(true); clearTimeout(fallback); obs.disconnect() } })
    }, { threshold: 0.12 })
    obs.observe(el)
    return () => { clearTimeout(fallback); obs.disconnect() }
  }, [])

  return (
    <div className={`cs ${on ? 'on' : ''}`} ref={ref}>
      <div className="cs-inner">
        <header className="cs-head">
          <span className="cs-eyebrow">What We Offer</span>
          <h2 className="cs-title">Core IT <span>Solutions</span></h2>
          <p className="cs-sub">Three specialized divisions — each a full-spectrum capability center designed to scale with your enterprise.</p>
        </header>

        <div className="cs-cards">
          {DIVISIONS.map((d, i) => {
            const HeadIcon = d.HeadIcon
            return (
              <article key={d.key} className="cs-card" style={{ '--i': i }}>
                <span className="cs-card-bar" aria-hidden="true" />
                <div className="cs-card-top">
                  <span className="cs-icon"><HeadIcon width="28" height="28" aria-hidden="true" /></span>
                  <div className="cs-card-heads">
                    <h3 className="cs-card-title">{d.title}</h3>
                    <p className="cs-card-tag">{d.tagline}</p>
                  </div>
                </div>

                <ul className="cs-chips">
                  {d.chips.map((c, ci) => {
                    const ChipIcon = c.I
                    return (
                      <li key={c.label} style={{ '--ci': ci }}>
                        <a href={d.href} className="cs-chip">
                          <span className="cs-chip-ic"><ChipIcon width="17" height="17" aria-hidden="true" /></span>
                          <span className="cs-chip-txt">{c.label}</span>
                          <svg className="cs-chip-arrow" viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M9 6l6 6-6 6" /></svg>
                        </a>
                      </li>
                    )
                  })}
                </ul>

                <a href={d.href} className="cs-card-link">
                  Explore {d.title}
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
                </a>
              </article>
            )
          })}
        </div>
      </div>

      <style jsx global>{`
        .cs {
          position: relative;
          width: 100%;
          overflow: hidden;
          padding: clamp(56px, 7vw, 96px) 0;
          background-image: url('/core-it-black.jpg');
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          color: #111318;
        }

        .cs-inner {
          position: relative; z-index: 2;
          max-width: 1160px; margin: 0 auto;
          padding: 0 clamp(18px, 4vw, 40px);
        }

        /* header */
        .cs-head { text-align: center; max-width: 720px; margin: 0 auto clamp(34px, 4vw, 54px); }
        .cs-eyebrow {
          display: inline-block; font-weight: 800; font-size: 12.5px; letter-spacing: 3px; text-transform: uppercase;
          color: #7a5a00; background: rgba(247,229,0,0.85); border: 1px solid rgba(180,150,0,0.6);
          padding: 6px 14px; border-radius: 999px; margin-bottom: 16px;
          box-shadow: 0 2px 10px rgba(0,0,0,0.12);
          opacity: 0; transform: translateY(14px);
        }
        .cs-title {
          margin: 0; font-weight: 900; line-height: 1.05; letter-spacing: -0.02em;
          font-size: clamp(30px, 5vw, 52px); color: #0e1116;
          text-shadow: 0 1px 0 rgba(255,255,255,0.6), 0 2px 14px rgba(255,255,255,0.5);
          opacity: 0; transform: translateY(16px);
        }
        .cs-title span {
          background: linear-gradient(100deg, #c98a00, #e0a900 55%, #c98a00);
          -webkit-background-clip: text; background-clip: text; -webkit-text-fill-color: transparent; color: transparent;
        }
        .cs-sub {
          margin: 16px auto 0; max-width: 560px; color: #2a2f38; font-weight: 500;
          font-size: clamp(15px, 1.4vw, 17px); line-height: 1.6;
          text-shadow: 0 1px 6px rgba(255,255,255,0.55);
          opacity: 0; transform: translateY(16px);
        }
        .cs.on .cs-eyebrow { animation: csUp .6s cubic-bezier(.22,1,.36,1) forwards; }
        .cs.on .cs-title   { animation: csUp .7s cubic-bezier(.22,1,.36,1) .08s forwards; }
        .cs.on .cs-sub     { animation: csUp .7s cubic-bezier(.22,1,.36,1) .16s forwards; }
        @keyframes csUp { to { opacity: 1; transform: translateY(0); } }

        /* cards — equal height, transparent glass (no backdrop blur so the photo stays sharp) */
        .cs-cards { display: grid; grid-template-columns: repeat(3, 1fr); gap: clamp(18px, 2vw, 26px); align-items: stretch; }
        .cs-card {
          position: relative; display: flex; flex-direction: column; height: 100%;
          background: linear-gradient(180deg, rgba(255,255,255,0.72), rgba(255,255,255,0.60));
          -webkit-backdrop-filter: blur(10px) saturate(1.2); backdrop-filter: blur(10px) saturate(1.2);
          border: 1px solid rgba(255,255,255,0.85);
          border-radius: 22px; padding: 26px 24px 22px;
          box-shadow: 0 18px 44px rgba(20,30,60,0.18), inset 0 1px 0 rgba(255,255,255,0.9);
          overflow: hidden;
          opacity: 0; transform: translateY(34px);
          transition: transform .35s cubic-bezier(.22,1,.36,1), box-shadow .35s ease, border-color .35s ease, background .35s ease;
          will-change: transform;
        }
        .cs.on .cs-card { animation: csCardIn .7s cubic-bezier(.22,1,.36,1) calc(.22s + var(--i) * .13s) forwards; }
        @keyframes csCardIn { to { opacity: 1; transform: translateY(0); } }
        .cs-card:hover {
          transform: translateY(-8px);
          background: linear-gradient(180deg, rgba(255,255,255,0.82), rgba(255,255,255,0.72));
          box-shadow: 0 28px 60px rgba(20,30,60,0.26);
          border-color: rgba(230,180,0,0.8);
        }
        .cs-card-bar {
          position: absolute; left: 0; top: 22px; bottom: 22px; width: 5px; border-radius: 0 6px 6px 0;
          background: linear-gradient(180deg, #f7e500, #f6b800);
          transform: scaleY(0); transform-origin: top; transition: transform .5s cubic-bezier(.22,1,.36,1);
        }
        .cs.on .cs-card .cs-card-bar { transform: scaleY(1); transition-delay: calc(.5s + var(--i) * .13s); }

        .cs-card-top { display: flex; align-items: center; gap: 14px; margin-bottom: 18px; }
        .cs-icon {
          flex: 0 0 auto; width: 52px; height: 52px; border-radius: 14px; display: grid; place-items: center;
          color: #1a1d24; background: #111318;
          border: 1px solid rgba(0,0,0,0.1);
          transition: transform .4s cubic-bezier(.34,1.56,.64,1), color .3s ease, border-color .3s ease, background .3s ease;
        }
        .cs-icon svg { color: #ffffff; }
        .cs-card:hover .cs-icon { transform: rotate(-6deg) scale(1.08); background: #1a1d24; }
        .cs-card-title { margin: 0; font-size: clamp(16px, 1.5vw, 18px); font-weight: 800; color: #14181f; line-height: 1.2; }
        .cs-card-tag { margin: 4px 0 0; font-size: 13px; color: #55606f; font-weight: 500; }

        /* chips — one per row */
        .cs-chips { list-style: none; margin: 0 0 4px; padding: 0; display: flex; flex-direction: column; gap: 9px; align-content: flex-start; }
        .cs-chip {
          display: flex; align-items: center; gap: 11px; width: 100%;
          padding: 11px 13px; border-radius: 12px; text-decoration: none;
          font-size: 14px; font-weight: 600; color: #262b33;
          background: rgba(245,247,250,0.8); border: 1px solid rgba(0,0,0,0.08);
          transition: transform .2s ease, background .2s ease, color .2s ease, border-color .2s ease, box-shadow .2s ease;
        }
        .cs-chips li { opacity: 0; transform: translateX(-12px); }
        .cs.on .cs-card .cs-chips li {
          animation: csChipIn .45s cubic-bezier(.22,1,.36,1) calc(.6s + var(--i) * .13s + var(--ci) * .06s) forwards;
        }
        @keyframes csChipIn { to { opacity: 1; transform: translateX(0); } }
        .cs-chip-ic {
          flex: 0 0 auto; width: 30px; height: 30px; border-radius: 9px; display: grid; place-items: center;
          color: #8a6a00; background: rgba(247,229,0,0.35); border: 1px solid rgba(200,160,0,0.4);
          transition: transform .2s ease, background .2s ease, color .2s ease;
        }
        .cs-chip-txt { flex: 1 1 auto; }
        .cs-chip-arrow { flex: 0 0 auto; color: #9aa3b0; opacity: 0; transform: translateX(-4px); transition: opacity .2s ease, transform .2s ease, color .2s ease; }
        .cs-chip:hover {
          transform: translateX(4px);
          color: #0e1116; background: #fff8cc; border-color: rgba(230,180,0,0.7);
          box-shadow: 0 8px 20px rgba(20,30,60,0.14);
        }
        .cs-chip:hover .cs-chip-ic { transform: scale(1.1); background: rgba(247,229,0,0.7); color: #5c4600; }
        .cs-chip:hover .cs-chip-arrow { opacity: 1; transform: translateX(0); color: #b8860b; }

        /* card link */
        .cs-card-link {
          margin-top: auto; padding-top: 16px; border-top: 1px solid rgba(0,0,0,0.1);
          display: inline-flex; align-items: center; gap: 7px;
          font-size: 14px; font-weight: 800; text-decoration: none; color: #a67c00;
          transition: gap .25s ease, color .25s ease;
        }
        .cs-card:hover .cs-card-link { color: #7a5a00; }
        .cs-card-link svg { transition: transform .25s ease; }
        .cs-card:hover .cs-card-link { gap: 11px; }
        .cs-card:hover .cs-card-link svg { transform: translateX(3px); }

        /* responsive */
        @media (max-width: 980px) {
          .cs-cards { grid-template-columns: 1fr; max-width: 560px; margin: 0 auto; gap: 20px; }
        }
        @media (max-width: 480px) {
          .cs-chip { font-size: 13.5px; padding: 10px 12px; }
          .cs-icon { width: 48px; height: 48px; border-radius: 13px; }
        }

        @media (prefers-reduced-motion: reduce) {
          .cs .cs-eyebrow, .cs .cs-title, .cs .cs-sub,
          .cs .cs-card, .cs .cs-chips li { opacity: 1 !important; transform: none !important; animation: none !important; }
          .cs .cs-card-bar { transform: scaleY(1) !important; }
        }
      `}</style>
    </div>
  )
}

export default CoreSolutions
