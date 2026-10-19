import React, { useEffect, useRef, useState } from 'react'
import { animate, stagger, useAnimate, useInView, useReducedMotion } from 'motion/react'

const SCENES = [
  {
    kind: 'software',
    long: 'Build me an inventory app for my shop',
    short: 'Build an inventory app',
    steps: ['Design database', 'Build web + mobile app', 'Test and deploy'],
  },
  {
    kind: 'pc',
    long: 'Set up a 5-PC office with a server',
    short: 'Set up a 5-PC office',
    steps: ['Pick hardware', 'Install 5 PCs + server', 'Network and test'],
  },
]

const FILES = [
  { name: 'src', tone: '#f2c200' },
  { name: 'app.js', tone: '#2563eb' },
  { name: 'db.js', tone: '#059669' },
  { name: 'office.net', tone: '#7c3aed' },
  { name: 'server.cfg', tone: '#d97706' },
]

const IDLE_WIDTHS = ['58%', '74%', '46%', '66%', '38%', '52%']

const CODE = [
  [['k', 'import'], [' db '], ['k', 'from'], [' '], ['s', "'./db'"]],
  [['k', 'const'], [' stock = '], ['f', 'db'], ['('], ['s', "'items'"], [')']],
  [['f', 'app'], ['.'], ['f', 'get'], ['('], ['s', "'/items'"], [', list)']],
  [['f', 'app'], ['.'], ['f', 'post'], ['('], ['s', "'/items'"], [', add)']],
  [['f', 'notify'], ['('], ['f', 'lowStock'], ['(stock))']],
  [['f', 'app'], ['.'], ['f', 'listen'], ['('], ['n', '3000'], [')']],
]

const APP_ROWS = [
  { w: '62%', n: 24 },
  { w: '48%', n: 8 },
  { w: '70%', n: 3 },
]

const PC_LOG = ['$ mis setup office', '5 PCs imaged', 'Server online', 'Network 1 Gbps']

const WALL_NOTES = [
  { x: 26, y: 18, fill: '#f7e500', angle: -5 },
  { x: 54, y: 22, fill: '#fbcfe8', angle: 4 },
  { x: 82, y: 17, fill: '#bfdbfe', angle: -2 },
]

const GRID_MONITORS = [
  { x: 24, y: 54, w: 56, h: 34, stand: 8, tone: 'y' },
  { x: 91, y: 54, w: 56, h: 34, stand: 8, tone: 'b' },
  { x: 158, y: 54, w: 56, h: 34, stand: 8, tone: 'y' },
  { x: 40, y: 108, w: 70, h: 36, stand: 8, tone: 'b' },
  { x: 128, y: 108, w: 70, h: 36, stand: 8, tone: 'y' },
]

function Monitor({ x, y, w, h, stand, tone }) {
  const [screen, accent] = tone === 'y' ? ['#fff7b3', '#d4b800'] : ['#dbeafe', '#3b82f6']
  const lineW = w - 12
  return (
    <g className="pc-mon">
      <rect x={x + w / 2 - 3} y={y + h} width="6" height={stand} fill="#9ca3af" />
      <rect x={x + w / 2 - 10} y={y + h + stand - 3} width="20" height="3" rx="1.5" fill="#6b7280" />
      <rect x={x} y={y} width={w} height={h} rx="3" fill="#1f2937" />
      <rect x={x + 2.5} y={y + 2.5} width={w - 5} height={h - 5} rx="1.5" fill="#e5e7eb" />
      <g className="pc-glow">
        <rect x={x + 2.5} y={y + 2.5} width={w - 5} height={h - 5} rx="1.5" fill={screen} />
        <rect x={x + 6} y={y + 7} width={lineW * 0.7} height="2.5" rx="1.25" fill={accent} />
        <rect x={x + 6} y={y + 13} width={lineW * 0.5} height="2.5" rx="1.25" fill="#9ca3af" />
        <rect x={x + 6} y={y + 19} width={lineW * 0.8} height="2.5" rx="1.25" fill="#9ca3af" />
      </g>
    </g>
  )
}

function Server({ x, y, w, h, bays, gap }) {
  return (
    <g className="pc-server">
      <rect x={x} y={y} width={w} height={h} rx="4" fill="#334155" />
      {Array.from({ length: bays }, (_, i) => (
        <g key={i}>
          <rect x={x + 6} y={y + 8 + i * gap} width={w - 12} height={gap - 6} rx="2" fill="#475569" />
          <circle className="pc-led" cx={x + 12} cy={y + 8 + i * gap + (gap - 6) / 2} r="2" fill={i % 2 ? '#f7e500' : '#22c55e'} />
          <rect x={x + 20} y={y + 7 + i * gap + (gap - 6) / 2} width={w - 32} height="2" rx="1" fill="#64748b" />
        </g>
      ))}
    </g>
  )
}

function PcOffice() {
  const cables = [
    ...GRID_MONITORS.slice(0, 3).map((m, i) => `M ${m.x + m.w / 2} 101 V ${104 + i * 2} H 236`),
    ...GRID_MONITORS.slice(3).map((m, i) => `M ${m.x + m.w / 2} 159 V ${170 + i * 3} H 236`),
  ]
  return (
    <svg className="pc-svg" viewBox="0 8 300 192" preserveAspectRatio="xMidYMax meet">
      <line x1="6" y1="194" x2="294" y2="194" stroke="#e5e7eb" strokeWidth="2" />
      {WALL_NOTES.map((note) => (
        <g key={note.x} className="pc-note">
          <rect x={note.x} y={note.y} width="22" height="22" rx="1.5" fill={note.fill} transform={`rotate(${note.angle} ${note.x + 11} ${note.y + 11})`} />
        </g>
      ))}
      <g className="pc-note">
        <circle cx="206" cy="30" r="13" fill="#ffffff" stroke="#d1d5db" strokeWidth="2" />
        <path d="M 206 22 V 30 H 212" fill="none" stroke="#111827" strokeWidth="1.8" strokeLinecap="round" />
      </g>
      <g className="pc-desk">
        <rect x="14" y="96" width="210" height="5" rx="2" fill="#d4b483" />
        <rect x="14" y="152" width="210" height="7" rx="2" fill="#e9d5b0" />
        <rect x="14" y="159" width="210" height="3" fill="#d4b483" />
        <rect x="24" y="162" width="6" height="32" fill="#9ca3af" />
        <rect x="208" y="162" width="6" height="32" fill="#9ca3af" />
      </g>
      {cables.map((d) => (
        <path key={d} className="pc-cable" d={d} fill="none" stroke="#f2c200" strokeWidth="1.6" />
      ))}
      {GRID_MONITORS.map((m) => (
        <Monitor key={`${m.x}-${m.y}`} {...m} />
      ))}
      <g className="pc-desk">
        <rect x="96" y="147" width="46" height="5" rx="1.5" fill="#d1d5db" />
      </g>
      <Server x={236} y={100} w={50} h={94} bays={4} gap={20} />
    </svg>
  )
}

function Conversation({ scene }) {
  return (
    <div className="ide-convo" data-kind={scene.kind}>
      <div className="ide-bubble ide-user">
        <span className="ide-ghost ide-long">{scene.long}</span>
        <span className="ide-ghost ide-short">{scene.short}</span>
        <span className="ide-typed ide-long" data-text={scene.long} />
        <span className="ide-typed ide-short" data-text={scene.short} />
      </div>
      <div className="ide-bubble ide-agent">
        <div className="ide-agent-name">MIS Agent</div>
        <ul className="ide-steps">
          {scene.steps.map((step) => (
            <li key={step} className="ide-step">
              <span className="ide-tick">✓</span>
              {step}
            </li>
          ))}
        </ul>
        <span className="ide-dots">
          <i />
          <i />
          <i />
        </span>
      </div>
    </div>
  )
}

function paintFinal(root, animateIn) {
  const convo = `.ide-convo[data-kind="${SCENES[0].kind}"]`
  root.querySelectorAll(`${convo} .ide-typed`).forEach((node) => {
    node.textContent = node.dataset.text
  })
  root.querySelectorAll('.ide-build-label').forEach((node) => {
    node.textContent = 'Build ✓'
  })
  const now = { duration: 0 }
  animateIn('.ide-idle, .ide-enter', { opacity: 0 }, now)
  animateIn(`${convo}, .ide-out[data-kind="software"]`, { opacity: 1 }, now)
  animateIn(`${convo} .ide-dots`, { opacity: 0 }, now)
}

const HeroWorkstation = () => {
  const [scope, animateIn] = useAnimate()
  const inView = useInView(scope, { amount: 0.2 })
  const reduce = useReducedMotion()
  const [tabVisible, setTabVisible] = useState(true)
  const sceneIndex = useRef(0)

  useEffect(() => {
    const onChange = () => setTabVisible(document.visibilityState === 'visible')
    onChange()
    document.addEventListener('visibilitychange', onChange)
    return () => document.removeEventListener('visibilitychange', onChange)
  }, [])

  useEffect(() => {
    const root = scope.current
    if (!root || reduce === null || reduce === undefined) return undefined
    if (reduce) {
      paintFinal(root, animateIn)
      return undefined
    }
    if (!inView || !tabVisible) return undefined

    let cancelled = false
    let wake
    const halt = new Promise((resolve) => {
      wake = resolve
    })
    const live = new Set()
    const track = (controls) => {
      live.add(controls)
      return Promise.race([controls, halt]).then(() => {
        live.delete(controls)
      })
    }
    const run = (target, keyframes, options) => (cancelled ? halt : track(animateIn(target, keyframes, options)))
    const set = (target, values) => run(target, values, { duration: 0 })
    const wait = (ms) => (cancelled ? halt : Promise.race([new Promise((resolve) => setTimeout(resolve, ms)), halt]))
    const setText = (selector, text) =>
      root.querySelectorAll(selector).forEach((node) => {
        node.textContent = text
      })

    const type = (scene, seconds) => {
      if (cancelled) return halt
      const nodes = root.querySelectorAll(`.ide-convo[data-kind="${scene.kind}"] .ide-typed`)
      return track(
        animate(0, 1, {
          duration: seconds,
          ease: 'linear',
          onUpdate: (progress) =>
            nodes.forEach((node) => {
              const text = node.dataset.text
              node.textContent = text.slice(0, Math.round(progress * text.length))
            }),
        })
      )
    }

    const reset = () => {
      setText('.ide-typed', '')
      setText('.ide-build-label', 'Building…')
      root.querySelectorAll('.ide-user').forEach((node) => node.classList.remove('is-typing'))
      return Promise.all([
        set('.ide-convo, .ide-out, .ide-enter', { opacity: 0 }),
        set('.ide-idle', { opacity: 1 }),
        set('.ide-agent', { opacity: 0, y: 8 }),
        set('.ide-dots', { opacity: 1 }),
        set('.ide-step', { opacity: 0, x: -6 }),
        set('.ide-tick', { scale: 0 }),
        set('.ide-code-line', { opacity: 0, x: -8 }),
        set('.ide-build', { opacity: 0 }),
        set('.ide-build-fill', { scaleX: 0 }),
        set('.ide-app', { opacity: 0, x: 24 }),
        set('.pc-desk', { scaleX: 0, originX: 0 }),
        set('.pc-mon', { opacity: 0, scale: 0.6, originY: 1 }),
        set('.pc-note', { opacity: 0, scale: 0.4 }),
        set('.pc-log-line', { opacity: 0, x: -8 }),
        set('.pc-server', { opacity: 0, y: -24 }),
        set('.pc-cable', { pathLength: 0 }),
        set('.pc-glow', { opacity: 0 }),
        set('.ide-key', { scale: 0.6, y: 0 }),
        set('.ide-ripple', { opacity: 0, scale: 0.3 }),
        set('.ide-cursor', { opacity: 0, x: 90, y: 70 }),
      ])
    }

    const playSoftware = async (out) => {
      await run(`${out} .ide-code-line`, { opacity: 1, x: 0 }, { duration: 0.25, delay: stagger(0.16) })
      await run(`${out} .ide-build`, { opacity: 1 }, { duration: 0.2 })
      await run(`${out} .ide-build-fill`, { scaleX: 1 }, { duration: 0.9, ease: 'easeInOut' })
      if (cancelled) return
      setText(`${out} .ide-build-label`, 'Build ✓')
      await run(`${out} .ide-app`, { opacity: 1, x: 0 }, { type: 'spring', bounce: 0.3, visualDuration: 0.45 })
    }

    const playPc = async (out) => {
      run(`${out} .pc-log-line`, { opacity: 1, x: 0 }, { duration: 0.25, delay: stagger(0.55) })
      await run(`${out} .pc-desk`, { scaleX: 1 }, { duration: 0.45, ease: 'easeOut' })
      run(`${out} .pc-note`, { opacity: 1, scale: 1 }, { type: 'spring', bounce: 0.5, visualDuration: 0.3, delay: stagger(0.1) })
      await run(`${out} .pc-mon`, { opacity: 1, scale: 1 }, { type: 'spring', bounce: 0.35, visualDuration: 0.35, delay: stagger(0.14) })
      await run(`${out} .pc-server`, { opacity: 1, y: 0 }, { type: 'spring', bounce: 0.3, visualDuration: 0.4 })
      await run(`${out} .pc-cable`, { pathLength: 1 }, { duration: 0.6, delay: stagger(0.06) })
      await run(`${out} .pc-glow`, { opacity: 1 }, { duration: 0.3, delay: stagger(0.1) })
    }

    const playScene = async (scene) => {
      const convo = `.ide-convo[data-kind="${scene.kind}"]`
      const out = `.ide-out[data-kind="${scene.kind}"]`
      const user = root.querySelector(`${convo} .ide-user`)

      await reset()
      await run(convo, { opacity: 1 }, { duration: 0.3 })
      if (cancelled) return
      user.classList.add('is-typing')
      await type(scene, 1.7)
      await wait(250)
      user.classList.remove('is-typing')

      await run(`${convo} .ide-agent`, { opacity: 1, y: 0 }, { duration: 0.35, ease: 'easeOut' })
      await wait(700)
      run(`${convo} .ide-dots`, { opacity: 0 }, { duration: 0.15 })
      run(`${convo} .ide-tick`, { scale: 1 }, { type: 'spring', bounce: 0.5, visualDuration: 0.3, delay: stagger(0.22, { startDelay: 0.1 }) })
      await run(`${convo} .ide-step`, { opacity: 1, x: 0 }, { duration: 0.25, delay: stagger(0.22) })
      await wait(300)

      run('.ide-enter', { opacity: 1 }, { duration: 0.2 })
      await run('.ide-key', { scale: 1 }, { type: 'spring', bounce: 0.45, visualDuration: 0.4 })
      await run('.ide-cursor', { opacity: 1, x: 0, y: 0 }, { duration: 0.6, ease: 'easeOut' })
      run('.ide-ripple', { opacity: [0.6, 0], scale: [0.3, 2.6] }, { duration: 0.6, ease: 'easeOut' })
      await run('.ide-key', { y: [0, 5, 0], scale: [1, 0.95, 1] }, { duration: 0.24 })
      await wait(250)

      run('.ide-enter', { opacity: 0 }, { duration: 0.25 })
      run('.ide-idle', { opacity: 0 }, { duration: 0.25 })
      await run(out, { opacity: 1 }, { duration: 0.3 })
      if (scene.kind === 'software') await playSoftware(out)
      else await playPc(out)

      await wait(2000)
      run('.ide-idle', { opacity: 1 }, { duration: 0.4 })
      await Promise.all([run(convo, { opacity: 0 }, { duration: 0.4 }), run(out, { opacity: 0 }, { duration: 0.4 })])
    }

    const loop = async () => {
      while (!cancelled) {
        await playScene(SCENES[sceneIndex.current % SCENES.length])
        if (cancelled) break
        sceneIndex.current += 1
      }
    }
    loop()

    return () => {
      cancelled = true
      wake()
      live.forEach((controls) => controls.stop())
      live.clear()
    }
  }, [reduce, inView, tabVisible, animateIn, scope])

  return (
    <div className="hero-workstation" aria-hidden="true" ref={scope}>
      <div className="ide-window">
        <div className="ide-titlebar">
          <span className="ide-light" />
          <span className="ide-light" />
          <span className="ide-light" />
          <span className="ide-title">MIS Studio</span>
          <span className="ide-badge">Agent</span>
        </div>

        <div className="ide-body">
          <div className="ide-files">
            <div className="ide-files-head">Explorer</div>
            {FILES.map((file) => (
              <div key={file.name} className="ide-file">
                <span className="ide-file-icon" style={{ background: file.tone }} />
                {file.name}
              </div>
            ))}
          </div>

          <div className="ide-stage">
            <div className="ide-idle">
              {IDLE_WIDTHS.map((width, i) => (
                <span key={i} className="ide-skel" style={{ width }} />
              ))}
              <span className="ide-idle-note">Waiting for a prompt…</span>
            </div>

            <div className="ide-out" data-kind="software">
              <div className="ide-code">
                {CODE.map((tokens, i) => (
                  <div key={i} className="ide-code-line">
                    <span className="ide-ln">{i + 1}</span>
                    {tokens.map(([a, b], j) =>
                      b === undefined ? (
                        <span key={j}>{a}</span>
                      ) : (
                        <span key={j} className={`tk-${a}`}>
                          {b}
                        </span>
                      )
                    )}
                  </div>
                ))}
              </div>
              <div className="ide-build">
                <span className="ide-build-label">Build ✓</span>
                <span className="ide-build-track">
                  <span className="ide-build-fill" />
                </span>
              </div>
              <div className="ide-app">
                <div className="ide-app-bar">Stock</div>
                {APP_ROWS.map((row) => (
                  <div key={row.n} className="ide-app-row">
                    <span className="ide-app-name" style={{ width: row.w }} />
                    <b>{row.n}</b>
                  </div>
                ))}
                <div className="ide-app-alert">2 low</div>
              </div>
            </div>

            <div className="ide-out" data-kind="pc">
              <div className="pc-log">
                {PC_LOG.map((line, i) => (
                  <div key={line} className="pc-log-line">
                    {i === 0 ? line : <><span className="pc-log-tick">✓</span>{line}</>}
                  </div>
                ))}
              </div>
              <PcOffice />
            </div>
          </div>

          <div className="ide-chat">
            <div className="ide-chat-head">Chat</div>
            <div className="ide-convos">
              {SCENES.map((scene) => (
                <Conversation key={scene.kind} scene={scene} />
              ))}
            </div>
            <div className="ide-input">
              <span>Ask MIS Agent…</span>
              <span className="ide-input-key">⏎</span>
            </div>
          </div>
        </div>

        <div className="ide-enter">
          <div className="ide-key-wrap">
            <span className="ide-ripple" />
            <span className="ide-key">
              Enter <span className="ide-key-glyph">⏎</span>
            </span>
            <svg className="ide-cursor" viewBox="0 0 24 24">
              <path d="M5 3 L5 19 L9.5 14.8 L12.6 21 L15.4 19.7 L12.4 13.6 L18.5 13.4 Z" fill="#111827" stroke="#ffffff" strokeWidth="1.5" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroWorkstation
