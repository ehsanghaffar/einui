"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

interface GlassWaveformProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Base amplitude of the waveform (clamped to 0–1). */
  amplitude?: number
  /** Number of frequency bars (clamped to 4–96). */
  bars?: number
  /** Color scheme for the bars. */
  color?: "cyan" | "purple" | "emerald" | "gradient"
  /** Freezes the visualizer into a "frozen glass" state. */
  paused?: boolean
  /** Shows a readout of the current visualizer settings. */
  showLabels?: boolean
}

const DEFAULT_BARS = 32
const MIN_BARS = 4
const MAX_BARS = 96
const MAX_BAR_HEIGHT = 60

const colorVariants = {
  cyan: "from-cyan-400 to-blue-500",
  purple: "from-fuchsia-400 to-violet-500",
  emerald: "from-emerald-400 to-teal-500",
  gradient: "from-cyan-400 via-blue-400 to-purple-400",
}

/** Deterministic seed so server and client render identical initial bars. */
function seedHeight(index: number) {
  return 0.25 + 0.5 * Math.abs(Math.sin(index * 1.7 + 0.4))
}

const GlassWaveform = React.forwardRef<HTMLDivElement, GlassWaveformProps>(
  (
    {
      className,
      amplitude = 0.8,
      bars = DEFAULT_BARS,
      color = "gradient",
      paused = false,
      showLabels = false,
      ...props
    },
    ref,
  ) => {
    const gradientId = React.useId()
    const barRefs = React.useRef<Array<HTMLDivElement | null>>([])
    const frameRef = React.useRef<number | null>(null)
    const [reducedMotion, setReducedMotion] = React.useState(false)

    const barCount = Math.max(MIN_BARS, Math.min(MAX_BARS, Math.round(bars)))
    const amplitudeSafe = Math.max(0, Math.min(1, amplitude))

    // Respect the user's reduced-motion preference.
    React.useEffect(() => {
      if (typeof window.matchMedia !== "function") return

      const mql = window.matchMedia("(prefers-reduced-motion: reduce)")
      const onChange = () => setReducedMotion(mql.matches)
      onChange()
      mql.addEventListener("change", onChange)
      return () => mql.removeEventListener("change", onChange)
    }, [])

    // Bar refs are populated by the ref callbacks below on every commit; do NOT
    // clear them here (a post-mount clear would wipe the DOM nodes the animation
    // loop reads and leave the visualizer frozen on the initial mount).

    // Animate the bars by writing heights directly to the DOM (no re-renders).
    React.useEffect(() => {
      if (paused || reducedMotion) return

      // Resume smoothly from the current (possibly frozen) heights.
      const heights = barRefs.current.map((node, index) => {
        const current = node ? parseFloat(node.style.height) : Number.NaN
        return Number.isFinite(current) ? (current - 16) / MAX_BAR_HEIGHT : seedHeight(index)
      })

      const update = (time: number) => {
        for (let index = 0; index < barCount; index++) {
          const node = barRefs.current[index]
          if (!node) continue

          const drift = Math.sin(time / 450 + index * 0.35) * 0.14
          const target = 0.15 + Math.abs(Math.sin(time / 300 + index * 0.25)) * amplitudeSafe
          heights[index] = Math.max(
            0.05,
            Math.min(1, heights[index] + (target - heights[index]) * 0.16 + drift * 0.04),
          )

          node.style.height = `${16 + heights[index] * MAX_BAR_HEIGHT}px`
        }

        frameRef.current = window.requestAnimationFrame(update)
      }

      frameRef.current = window.requestAnimationFrame(update)
      return () => {
        if (frameRef.current) window.cancelAnimationFrame(frameRef.current)
      }
    }, [amplitudeSafe, barCount, paused, reducedMotion])

    const gradientClass = colorVariants[color]

    return (
      <div
        ref={ref}
        className={cn(
          "relative overflow-hidden rounded-4xl border border-white/10 bg-black/25 backdrop-blur-xl",
          className,
        )}
        {...props}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.18),transparent_25%),radial-gradient(circle_at_bottom_right,rgba(59,130,246,0.12),transparent_30%)]" />

        {/* Decorative drawing — hidden from assistive technology. */}
        <div className="relative h-52 px-4 py-5" aria-hidden="true">
          <div className="absolute inset-x-4 top-4 h-0.5 bg-white/10" />
          <div className="absolute inset-x-4 bottom-4 h-0.5 bg-white/10" />

          <div className="absolute inset-0 pointer-events-none">
            <svg viewBox="0 0 100 100" className="w-full h-full opacity-30">
              <defs>
                <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#22d3ee" />
                  <stop offset="50%" stopColor="#818cf8" />
                  <stop offset="100%" stopColor="#e879f9" />
                </linearGradient>
              </defs>
              <path
                d="M0,60 C20,40 40,65 50,45 C60,25 80,50 100,35"
                fill="none"
                stroke={`url(#${gradientId})`}
                strokeWidth="1.4"
                opacity="0.75"
              />
            </svg>
          </div>

          <div className="relative h-full flex items-center justify-between gap-2">
            {Array.from({ length: barCount }, (_, index) => (
              <div key={index} className="flex-1 h-full flex flex-col justify-end">
                <div
                  ref={(node) => {
                    barRefs.current[index] = node
                  }}
                  className={cn(
                    "mx-auto w-full rounded-full",
                    paused ? "bg-white/10" : `bg-linear-to-t ${gradientClass}`,
                  )}
                  style={{
                    height: 16 + seedHeight(index) * MAX_BAR_HEIGHT,
                    minHeight: 4,
                    transition: "background 300ms ease",
                  }}
                >
                  <div className="h-full rounded-full bg-white/10 mix-blend-screen" />
                </div>
              </div>
            ))}
          </div>

          <div className="pointer-events-none absolute inset-x-4 top-6 h-0.75 bg-white/10 blur-sm" />
        </div>

        <div className="border-t border-white/10 px-5 py-3 bg-black/40 backdrop-blur-xl">
          <div className="flex items-center justify-between gap-4 text-xs uppercase tracking-[0.3em] text-white/60">
            <span className="font-semibold">Audio Visualizer</span>
            <span className={cn(paused ? "text-rose-200" : "text-emerald-200")}>
              {paused ? "Frozen Glass" : "Live"}
            </span>
          </div>
          {showLabels ? (
            <div className="mt-3 grid grid-cols-3 gap-3 text-[11px] text-white/50">
              <span>Amplitude {Math.round(amplitudeSafe * 100)}%</span>
              <span>Bars {barCount}</span>
              <span>Mode {paused ? "Paused" : "Active"}</span>
            </div>
          ) : null}
        </div>
      </div>
    )
  },
)

GlassWaveform.displayName = "GlassWaveform"

export { GlassWaveform }
export type { GlassWaveformProps }
