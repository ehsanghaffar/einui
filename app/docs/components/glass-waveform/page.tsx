import type { Metadata } from "next"
import { PageHeader } from "@/components/docs/page-header"
import { ComponentPreview } from "@/components/docs/component-preview"
import { CLIInstall } from "@/components/docs/cli-install"
import { GlassWaveform } from "@/registry/innovative/glass-waveform"
import { buildComponentMetadata, getComponentHeading, getComponentIntro } from "@/lib/seo"

const componentTitle = "Waveform"
const componentDescription =
  "A glass-inspired audio visualizer that renders flowing frequency bars, glowing gradients, and a frozen state for paused audio content."

export const metadata: Metadata = buildComponentMetadata({
  title: componentTitle,
  description: componentDescription,
  slug: "glass-waveform",
})

const basicCode = `import { GlassWaveform } from "@/registry/innovative/glass-waveform"

<GlassWaveform />`

const pausedCode = `// Live waveform
<GlassWaveform amplitude={0.85} color="gradient" />

// Frozen glass visualizer
<GlassWaveform paused />`

export default function WaveformPage() {
  return (
    <div className="container mx-auto px-4 py-8 lg:py-12 max-w-4xl">
      <PageHeader
        title={getComponentHeading(componentTitle)}
        description={getComponentIntro(componentTitle, componentDescription)}
      />

      <CLIInstall componentName="glass-waveform" />

      <ComponentPreview
        title="Live Audio Visualizer"
        description="A liquid glass waveform with animated frequency bars and gradient glow."        
        preview={
          <div className="rounded-4xl border border-white/5 bg-black/20 p-6">
            <GlassWaveform />
          </div>
        }
        code={basicCode}
      />

      <ComponentPreview
        title="Frozen Glass Mode"
        description="Toggle a paused visual state for silent or paused audio contexts."
        preview={
          <div className="rounded-4xl border border-white/5 bg-black/20 p-6">
            <GlassWaveform paused showLabels />
          </div>
        }
        code={pausedCode}
      />
    </div>
  )
}
