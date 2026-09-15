import React, { useEffect, useRef, useState } from 'react'

/*
 * CoreSolutionsSignposts
 * Adapted from a Framer design: four hanging wooden signboard installations
 * scattered around a centered title. Each install = a wooden post + crossbeam,
 * a header board hanging by ropes, and a vertical chain of plank sub-services.
 * On scroll in: boards drop in, then gently swing like pendulums (per-plank
 * stagger). Pure CSS + IntersectionObserver (no framer-motion dependency).
 * Respects prefers-reduced-motion.
 */

const GROUPS = [
  {
    key: 'digital',
    title: 'Digital Services',
    href: '/digital-services',
    x: '0%', y: '2%', scale: 0.92, rotate: -3, dir: -1,
    leaves: ['Web Development', 'Custom Software', 'Mobile Apps', 'AI Solutions', 'Cyber Security', 'E-Commerce'],
  },
  {
    key: 'corporate',
    title: 'Business & Corporate',
    href: '/enterprise-solutions',
    x: '17%', y: '34%', scale: 0.8, rotate: 2, dir: 1,
    leaves: ['IT Equipments', 'Security System', 'Office Equipments', 'Networking', 'Server Setup', 'Power Solution'],
  },
  {
    key: 'maintenance',
    title: 'Maintenance & Support',
    href: '/maintenance-support',
    x: '65%', y: '34%', scale: 0.8, rotate: 2, dir: 1,
    leaves: ['AMC Contracts', 'On-call Repair', 'Installation', 'Troubleshooting', 'Remote Solution'],
  },
  {
    key: 'procurement',
    title: 'Procurement Service',
    href: '/product-catalog',
    x: '82%', y: '2%', scale: 0.92, rotate: -2, dir: -1,
    leaves: ['Hardware Sourcing', 'Bulk Supply', 'Corporate Deals', 'Vendor Management', 'Licensing', 'Fast Delivery'],
  },
]

const SignAssembly = ({ group, index, mobile }) => {
  const dirClass = group.dir === 1 ? 'pos' : 'neg'
  return (
    <div className="sa" style={{ '--gi': index }}>
      {/* post + crossbeam */}
      <span className="sa-post" aria-hidden="true" />
      <span className="sa-beam" aria-hidden="true" />

      {/* header board drops from the beam */}
      <a href={group.href} className="sa-drop sa-headwrap" style={{ '--delay': `${index * 0.12}s` }}>
        <span className={`sa-swing sa-swing-head ${dirClass}`}>
          <span className="sa-rope sa-rope-l" />
          <span className="sa-rope sa-rope-r" />
          <span className="sa-board sa-header">{group.title}</span>
        </span>
      </a>

      {/* hanging planks */}
      <div className="sa-planks">
        {group.leaves.map((leaf, li) => (
          <a
            key={leaf}
            href={group.href}
            className="sa-drop sa-plankwrap"
            style={{ '--delay': `${index * 0.12 + (li + 1) * 0.13}s` }}
          >
            <span className={`sa-swing sa-swing-plank ${li % 2 === 0 ? 'pos' : 'neg'}`} style={{ '--sd': `${li * 0.09}s`, '--dur': `${4.6 + li * 0.25}s` }}>
              <span className="sa-rope sa-rope-l small" />
              <span className="sa-rope sa-rope-r small" />
              <span className="sa-board sa-plank">{leaf}</span>
            </span>
          </a>
        ))}
      </div>
    </div>
  )
}

const CoreSolutionsSignposts = () => {
  const ref = useRef(null)
  const [on, setOn] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const reduce = typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce) { setOn(true); return }
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) { setOn(true); obs.disconnect() } })
    }, { threshold: 0.15 })
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <div className={`csx ${on ? 'on' : ''}`} ref={ref}>
      {/* desktop scattered scene */}
      <div className="csx-scene">
        {GROUPS.map((g, i) => (
          <div
            key={g.key}
            data-group={g.key}
            className="csx-group"
            style={{ left: g.x, top: g.y, transform: `scale(${g.scale}) rotate(${g.rotate}deg)` }}
          >
            <SignAssembly group={g} index={i} />
          </div>
        ))}

        {/* centered title, overlaid in the middle of the scene */}
        <div className="csx-center">
          <span className="csx-eyebrow">What We Offer</span>
          <h2 className="csx-title">Core IT Solutions</h2>
          <p className="csx-sub">Four divisions, every capability on the board — explore what we offer.</p>
        </div>
      </div>

      {/* mobile stacked scene */}
      <div className="csx-mobile">
        <div className="csx-center csx-center-m">
          <span className="csx-eyebrow">What We Offer</span>
          <h2 className="csx-title">Core IT Solutions</h2>
          <p className="csx-sub">Four divisions, every capability on the board — explore what we offer.</p>
        </div>
        {GROUPS.map((g, i) => (
          <div key={`m-${g.key}`} className="csx-mgroup"><SignAssembly group={g} index={i} mobile /></div>
        ))}
      </div>

      <style jsx>{`
        .csx { position: relative; width: 100%; }

        /* ----- desktop scattered scene ----- */
        .csx-scene { position: relative; width: 100%; max-width: 1200px; margin: 0 auto; height: 780px; }
        .csx-group { position: absolute; transform-origin: top center; }

        /* centered title overlay */
        .csx-center {
          position: absolute; left: 50%; top: 50%; transform: translate(-50%, -50%);
          width: min(560px, 42%); text-align: center; z-index: 3; pointer-events: none;
        }
        .csx-eyebrow { display: inline-block; color: #f7e500; font-weight: 800; font-size: 13px; letter-spacing: 3px; text-transform: uppercase; margin-bottom: 10px; }
        .csx-title { margin: 0; color: #fff; font-size: clamp(30px, 4vw, 46px); font-weight: 900; line-height: 1.05; text-shadow: 0 0 26px rgba(247,229,0,0.25); }
        .csx-sub { margin: 14px auto 0; max-width: 42ch; color: #b9c1cf; font-size: 15px; line-height: 1.5; }
        .csx-center-m { position: static; transform: none; width: 100%; margin-bottom: 8px; }

        /* one sign installation */
        .sa { position: relative; width: 200px; }

        .sa-post {
          position: absolute; left: 50%; transform: translateX(-50%); top: 0; width: 16px; height: 240px;
          border-radius: 8px;
          background:
            linear-gradient(90deg, rgba(0,0,0,0.4), rgba(255,255,255,0.10) 40%, rgba(0,0,0,0.35)),
            repeating-linear-gradient(180deg, rgba(0,0,0,0.10) 0 3px, transparent 3px 11px),
            linear-gradient(180deg, #7a5330, #513718);
          box-shadow: inset 0 0 8px rgba(0,0,0,0.4), 2px 0 6px rgba(0,0,0,0.35);
          z-index: 0;
        }
        .sa-beam {
          position: absolute; left: 50%; transform: translateX(-50%); top: 40px; width: 178px; height: 15px;
          border-radius: 8px;
          background:
            linear-gradient(180deg, rgba(255,255,255,0.16), rgba(0,0,0,0.3)),
            repeating-linear-gradient(90deg, rgba(0,0,0,0.08) 0 6px, transparent 6px 16px),
            linear-gradient(90deg, #86633c, #6b4a29);
          box-shadow: 0 5px 10px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.18);
          z-index: 1;
        }

        /* drop-in wrapper (settles from above) */
        .sa-drop {
          position: relative; z-index: 2; display: block; text-decoration: none;
          opacity: 0; transform: translateY(-16px);
        }
        .sa-headwrap { margin-top: 54px; }
        .sa-plankwrap { margin-top: 22px; }
        .on .sa-drop {
          opacity: 1; transform: translateY(0);
          transition: opacity .45s ease var(--delay), transform .8s cubic-bezier(.22,1,.36,1) var(--delay);
        }

        /* swing wrapper (pendulum around the top center) */
        .sa-swing {
          position: relative; display: block; width: 150px; margin: 0 auto;
          transform-origin: 50% -10px; /* pivot at the beam / rope top */
        }
        .sa-swing-plank { width: 132px; }
        .on .sa-swing {
          animation: swingPos var(--dur, 5s) ease-in-out infinite;
          animation-delay: calc(var(--delay) + .8s + var(--sd, 0s));
        }
        .on .sa-swing.neg { animation-name: swingNeg; }
        .on .sa-swing-head { animation-duration: 5.4s; }

        @keyframes swingPos {
          0%, 100% { transform: rotate(1.4deg); }
          50% { transform: rotate(-1.4deg); }
        }
        @keyframes swingNeg {
          0%, 100% { transform: rotate(-1.4deg); }
          50% { transform: rotate(1.4deg); }
        }

        /* ropes */
        .sa-rope {
          position: absolute; top: -20px; width: 4px; height: 22px; border-radius: 99px;
          background: linear-gradient(180deg, #e4d29a, #9b7c45);
          box-shadow: 0 1px 2px rgba(0,0,0,0.35);
          z-index: 3;
        }
        .sa-rope.small { height: 16px; top: -14px; width: 3px; }
        .sa-rope-l { left: 26px; }
        .sa-rope-r { right: 26px; }
        .sa-swing-plank .sa-rope-l { left: 22px; }
        .sa-swing-plank .sa-rope-r { right: 22px; }

        /* boards */
        .sa-board {
          position: relative; display: flex; align-items: center; justify-content: center; text-align: center;
          border-radius: 9px;
          background:
            linear-gradient(180deg, rgba(255,255,255,0.14), rgba(0,0,0,0.22)),
            repeating-linear-gradient(11deg, rgba(255,255,255,0.06) 0 2px, rgba(0,0,0,0.05) 2px 4px),
            linear-gradient(120deg, #8a5a2b, #6e4521 50%, #553515);
          box-shadow: 0 9px 18px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.14), inset 0 -3px 6px rgba(0,0,0,0.3);
        }
        /* iron rivets */
        .sa-board::before, .sa-board::after {
          content: ''; position: absolute; top: 7px; width: 5px; height: 5px; border-radius: 50%;
          background: radial-gradient(circle at 35% 30%, #cfd6de, #5b636c); box-shadow: 0 0 0 1px rgba(0,0,0,0.4);
        }
        .sa-board::before { left: 8px; } .sa-board::after { right: 8px; }

        .sa-header {
          height: 62px; padding: 6px 10px;
          color: #fff; font-weight: 800; font-size: 14px; line-height: 1.15;
          text-shadow: 0 1px 2px rgba(0,0,0,0.6);
          border: 2px solid rgba(247,229,0,0.85);
          box-shadow: 0 10px 22px rgba(0,0,0,0.5), 0 0 18px rgba(247,229,0,0.18), inset 0 1px 0 rgba(255,255,255,0.15);
        }
        .sa-plank {
          height: 40px; padding: 4px 8px;
          color: #f6ead0; font-weight: 700; font-size: 11.5px; letter-spacing: 0.02em;
          text-shadow: 0 1px 2px rgba(0,0,0,0.55);
          border: 1px solid rgba(247,229,0,0.4);
        }
        .sa-drop:hover .sa-board { filter: brightness(1.08); box-shadow: 0 12px 26px rgba(0,0,0,0.5), 0 0 20px rgba(247,229,0,0.3); }

        /* ----- mobile ----- */
        .csx-mobile { display: none; flex-direction: column; align-items: center; gap: 30px; }
        .csx-mgroup { transform: scale(0.9); }

        @media (max-width: 1199px) {
          .csx-scene { height: 760px; }
          .csx-group[data-group='digital'] { left: 0% !important; top: 8% !important; transform: scale(.86) rotate(-2deg) !important; }
          .csx-group[data-group='corporate'] { left: 4% !important; top: 54% !important; transform: scale(.8) rotate(1deg) !important; }
          .csx-group[data-group='maintenance'] { left: 70% !important; top: 8% !important; transform: scale(.86) rotate(2deg) !important; }
          .csx-group[data-group='procurement'] { left: 72% !important; top: 56% !important; transform: scale(.8) rotate(-1deg) !important; }
        }
        @media (max-width: 900px) {
          .csx-scene { display: none; }
          .csx-mobile { display: flex; }
        }

        @media (prefers-reduced-motion: reduce) {
          .sa-drop { opacity: 1 !important; transform: none !important; transition: none !important; }
          .on .sa-swing { animation: none !important; }
        }
      `}</style>
    </div>
  )
}

export default CoreSolutionsSignposts
