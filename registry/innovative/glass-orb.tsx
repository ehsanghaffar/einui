"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

type GlassOrbStatus = "idle" | "active" | "loading"

interface GlassOrbProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Visual state that changes the ring, glow gradient, and pulse. */
  status?: GlassOrbStatus
  /** Size of the orb. */
  size?: "sm" | "md" | "lg"
  /** Accessible label. When set, the orb is announced as a status region. */
  label?: string
  /** Whether the orb follows the cursor with elastic motion. */
  followCursor?: boolean
  /** Whether to emit soft glass particles when moving quickly. */
  showTrails?: boolean
}

const sizes = {
  sm: 96,
  md: 140,
  lg: 190,
} as const

interface StatusConfig {
  ring: string
  glow: string
  pulse: boolean
}

const statusStyles: Record<GlassOrbStatus, StatusConfig> = {
  idle: {
    ring: "border-cyan-300/20",
    glow: [
      "radial-gradient(circle at top left, rgba(255,255,255,0.3), transparent 35%)",
      "radial-gradient(circle at bottom right, rgba(34,211,238,0.24), transparent 28%)",
      "radial-gradient(circle at center, rgba(139,92,246,0.2), rgba(56,189,248,0.08) 50%)",
      "linear-gradient(180deg, rgba(255,255,255,0.2), rgba(15,23,42,0.1))",
    ].join(", "),
    pulse: false,
  },
  active: {
    ring: "border-blue-200/30",
    glow: [
      "radial-gradient(circle at top left, rgba(255,255,255,0.34), transparent 35%)",
      "radial-gradient(circle at bottom right, rgba(96,165,250,0.3), transparent 28%)",
      "radial-gradient(circle at center, rgba(168,85,247,0.28), rgba(59,130,246,0.12) 50%)",
      "linear-gradient(180deg, rgba(255,255,255,0.24), rgba(15,23,42,0.1))",
    ].join(", "),
    pulse: false,
  },
  loading: {
    ring: "border-white/25",
    glow: [
      "radial-gradient(circle at top left, rgba(255,255,255,0.32), transparent 35%)",
      "radial-gradient(circle at bottom right, rgba(103,232,249,0.3), transparent 28%)",
      "radial-gradient(circle at center, rgba(255,255,255,0.24), rgba(34,211,238,0.12) 50%)",
      "linear-gradient(180deg, rgba(255,255,255,0.24), rgba(15,23,42,0.1))",
    ].join(", "),
    pulse: true,
  },
}

const MAX_TRAIL_PARTICLES = 16
const TRAIL_LIFE = 24
const TRAIL_FADE = 0.018

interface TrailParticle {
  el: HTMLSpanElement
  x: number
  y: number
  vx: number
  vy: number
  opacity: number
  life: number
}

const GlassOrb = React.forwardRef<HTMLDivElement, GlassOrbProps>(
  (
    {
      className,
      size = "md",
      status = "idle",
      label,
      followCursor = true,
      showTrails = true,
      ...props
    },
    ref,
  ) => {
    const rootRef = React.useRef<HTMLDivElement>(null)
    const orbRef = React.useRef<HTMLDivElement>(null)
    const particleLayerRef = React.useRef<HTMLDivElement>(null)
    const particlesRef = React.useRef<TrailParticle[]>([])

    const targetRef = React.useRef({ x: 0, y: 0 })
    const motionRef = React.useRef({ x: 0, y: 0, vx: 0, vy: 0 })
    const frameRef = React.useRef<number | null>(null)

    const [reducedMotion, setReducedMotion] = React.useState(false)

    const sizePx = sizes[size]
    const config = statusStyles[status]

    React.useImperativeHandle(ref, () => rootRef.current as HTMLDivElement)

    // Respect the user's reduced-motion preference.
    React.useEffect(() => {
      if (typeof window.matchMedia !== "function") return

      const mql = window.matchMedia("(prefers-reduced-motion: reduce)")
      const onChange = () => setReducedMotion(mql.matches)
      onChange()
      mql.addEventListener("change", onChange)
      return () => mql.removeEventListener("change", onChange)
    }, [])

    // Center the orb, re-centering when the container resizes.
    React.useLayoutEffect(() => {
      const el = rootRef.current
      if (!el) return

      const center = () => {
        const rect = el.getBoundingClientRect()
        const x = Math.max(0, rect.width / 2 - sizePx / 2)
        const y = Math.max(0, rect.height / 2 - sizePx / 2)
        targetRef.current = { x, y }
        motionRef.current = { x, y, vx: 0, vy: 0 }
        if (orbRef.current) {
          orbRef.current.style.transform = `translate3d(${x}px, ${y}px, 0)`
        }
      }

      center()

      if (typeof ResizeObserver !== "undefined") {
        const observer = new ResizeObserver(center)
        observer.observe(el)
        return () => observer.disconnect()
      }
    }, [sizePx])

    // Track the pointer for cursor-following.
    React.useEffect(() => {
      if (!followCursor || reducedMotion) return

      const handlePointerMove = (event: PointerEvent) => {
        const el = rootRef.current
        if (!el) return
        const rect = el.getBoundingClientRect()
        targetRef.current = {
          x: event.clientX - rect.left - sizePx / 2,
          y: event.clientY - rect.top - sizePx / 2,
        }
      }

      window.addEventListener("pointermove", handlePointerMove, { passive: true })
      return () => window.removeEventListener("pointermove", handlePointerMove)
    }, [followCursor, reducedMotion, sizePx])

    // Spring physics + particle trails, written directly to the DOM.
    React.useEffect(() => {
      if (!followCursor || reducedMotion) return

      const spring = 0.14
      const damping = 0.8

      const animate = () => {
        const target = targetRef.current
        const motion = motionRef.current

        const dx = target.x - motion.x
        const dy = target.y - motion.y

        motion.vx = motion.vx * damping + dx * spring
        motion.vy = motion.vy * damping + dy * spring
        motion.x += motion.vx
        motion.y += motion.vy

        const speed = Math.sqrt(motion.vx ** 2 + motion.vy ** 2)
        const scale = 1 + Math.min(speed / 120, 0.16)
        const rotation = speed * 0.16

        if (orbRef.current) {
          orbRef.current.style.transform = `translate3d(${motion.x}px, ${motion.y}px, 0) scale(${scale}) rotate(${rotation}deg)`
        }

        if (showTrails) {
          const particles = particlesRef.current

          if (
            speed > 12 &&
            particles.length < MAX_TRAIL_PARTICLES &&
            Math.random() < 0.15 &&
            particleLayerRef.current
          ) {
            const layer = particleLayerRef.current
            const trailSize = 4 + Math.min(speed / 8, 12)
            const el = document.createElement("span")
            el.className = "absolute rounded-full bg-white/70 blur-[2px] pointer-events-none"
            el.style.left = `${motion.x + sizePx / 2}px`
            el.style.top = `${motion.y + sizePx / 2}px`
            el.style.width = `${trailSize}px`
            el.style.height = `${trailSize}px`
            el.style.opacity = "0.5"
            el.style.transform = "translate(-50%, -50%)"
            layer.appendChild(el)

            particles.push({
              el,
              x: 0,
              y: 0,
              vx: motion.vx * 0.1 + (Math.random() - 0.5) * 0.8,
              vy: motion.vy * 0.1 + (Math.random() - 0.5) * 0.8,
              opacity: 0.5,
              life: TRAIL_LIFE,
            })
          }

          for (let index = particles.length - 1; index >= 0; index--) {
            const particle = particles[index]
            particle.life -= 1
            particle.opacity -= TRAIL_FADE
            particle.x += particle.vx
            particle.y += particle.vy
            particle.el.style.transform = `translate(-50%, -50%) translate(${particle.x}px, ${particle.y}px)`
            particle.el.style.opacity = particle.opacity.toFixed(3)
            if (particle.life <= 0 || particle.opacity <= 0) {
              particle.el.remove()
              particles.splice(index, 1)
            }
          }
        }

        frameRef.current = window.requestAnimationFrame(animate)
      }

      frameRef.current = window.requestAnimationFrame(animate)
      return () => {
        if (frameRef.current) window.cancelAnimationFrame(frameRef.current)
        for (const particle of particlesRef.current) particle.el.remove()
        particlesRef.current = []
      }
    }, [followCursor, reducedMotion, showTrails, sizePx])

    return (
      <div
        ref={rootRef}
        className={cn("relative overflow-hidden pointer-events-none", className)}
        {...props}
        role={label ? "status" : undefined}
        aria-label={label}
        aria-hidden={label ? undefined : true}
        style={{
          // Give the wrapper intrinsic dimensions so the absolutely positioned
          // orb stays visible (with overflow-hidden) even without sizing classes.
          minWidth: sizePx,
          minHeight: sizePx,
          ...props.style,
        }}
      >
        <div
          ref={orbRef}
          className={cn(
            "absolute rounded-full",
            "border border-white/10 shadow-[0_0_120px_rgba(56,189,248,0.15)]",
            config.ring,
            config.pulse && "animate-pulse",
          )}
          style={{
            width: sizePx,
            height: sizePx,
            transition: "border-color 200ms ease",
          }}
        >
          <div
            className="absolute inset-0 rounded-full border border-white/10"
            style={{ background: config.glow }}
          />

          <div
            className="absolute inset-4 rounded-full bg-white/10 blur-[2px]"
            style={{
              background: "radial-gradient(circle at 35% 35%, rgba(255,255,255,0.55), transparent 45%)",
            }}
          />

          <div className="absolute inset-0 rounded-full mix-blend-screen opacity-80" />

          <div
            className="absolute inset-0 rounded-full border border-white/10"
            style={{ background: "radial-gradient(circle at center, rgba(255,255,255,0.16), transparent 55%)" }}
          />

          <div
            className="absolute inset-0 rounded-full"
            style={{
              background:
                "radial-gradient(circle at 60% 30%, rgba(255,255,255,0.35), transparent 18%), " +
                "radial-gradient(circle at 30% 60%, rgba(56,189,248,0.22), transparent 23%), " +
                "linear-gradient(135deg, rgba(56,189,248,0.18), rgba(168,85,247,0.1))",
              mixBlendMode: "screen",
            }}
          />

          {label ? (
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 rounded-full bg-black/40 px-3 py-1 text-[11px] uppercase tracking-[0.2em] text-white/85 shadow-[0_0_25px_rgba(0,0,0,0.2)]">
              {label}
            </div>
          ) : null}
        </div>

        {/* Particle trail layer (populated imperatively by the animation loop). */}
        <div ref={particleLayerRef} className="absolute inset-0 overflow-hidden pointer-events-none" />
      </div>
    )
  },
)

GlassOrb.displayName = "GlassOrb"

export { GlassOrb }
export type { GlassOrbStatus, GlassOrbProps }
