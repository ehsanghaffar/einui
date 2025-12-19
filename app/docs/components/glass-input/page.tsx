"use client"

import { PageHeader } from "@/components/docs/page-header"
import { ComponentPreview } from "@/components/docs/component-preview"
import { CLIInstall } from "@/components/docs/cli-install"
import { GlassInput } from "@/registry/liquid-glass/glass-input"
import { Label } from "@/components/ui/label"
import { Mail, Lock, Search, Eye, EyeOff, User } from "lucide-react"
import { useState } from "react"

const basicInputCode = `<GlassInput placeholder="Enter text..." />`

const withIconCode = `<div className="relative">
  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
  <GlassInput className="pl-10" placeholder="Email address" />
</div>`

const formCode = `<div className="flex flex-col gap-4">
  <div className="flex flex-col gap-2">
    <Label>Name</Label>
    <GlassInput placeholder="John Doe" />
  </div>
  <div className="flex flex-col gap-2">
    <Label>Email</Label>
    <GlassInput type="email" placeholder="john@example.com" />
  </div>
</div>`

export default function InputsPage() {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <div className="container mx-auto px-4 py-8 lg:py-12 max-w-4xl">
      <PageHeader
        title="Inputs"
        description="Form input components with focus glow animations and glass morphism styling."
      />

      <CLIInstall componentName="glass-input" />

      <ComponentPreview
        title="Basic Input"
        description="A simple text input with glass styling."
        preview={
          <div className="w-full max-w-sm">
            <GlassInput placeholder="Enter text..." />
          </div>
        }
        code={basicInputCode}
      />

      <ComponentPreview
        title="With Icons"
        description="Inputs with leading or trailing icons."
        preview={
          <div className="w-full max-w-sm flex flex-col gap-4">
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
              <GlassInput className="pl-10" placeholder="Email address" />
            </div>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
              <GlassInput className="pl-10" placeholder="Search..." />
            </div>
            <div className="relative">
              <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
              <GlassInput className="pl-10" placeholder="Username" />
            </div>
          </div>
        }
        code={withIconCode}
      />

      <ComponentPreview
        title="Password Input"
        description="Password input with visibility toggle."
        preview={
          <div className="w-full max-w-sm">
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
              <GlassInput
                className="pl-10 pr-10"
                type={showPassword ? "text" : "password"}
                placeholder="Enter password"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-white/40 hover:text-white/60 transition-colors"
              >
                {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
          </div>
        }
        code={`<div className="relative">
  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
  <GlassInput
    className="pl-10 pr-10"
    type={showPassword ? "text" : "password"}
    placeholder="Enter password"
  />
  <button onClick={() => setShowPassword(!showPassword)}>
    {showPassword ? <EyeOff /> : <Eye />}
  </button>
</div>`}
      />

      <ComponentPreview
        title="Form Layout"
        description="Multiple inputs in a form layout with labels."
        preview={
          <div className="w-full max-w-sm flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <Label className="text-white/80 text-sm">Name</Label>
              <GlassInput placeholder="John Doe" />
            </div>
            <div className="flex flex-col gap-2">
              <Label className="text-white/80 text-sm">Email</Label>
              <GlassInput type="email" placeholder="john@example.com" />
            </div>
            <div className="flex flex-col gap-2">
              <Label className="text-white/80 text-sm">Message</Label>
              <GlassInput placeholder="Enter your message..." />
            </div>
          </div>
        }
        code={formCode}
      />

      <ComponentPreview
        title="Disabled Input"
        description="Disabled state for inputs."
        preview={
          <div className="w-full max-w-sm">
            <GlassInput placeholder="Disabled input" disabled />
          </div>
        }
        code={`<GlassInput placeholder="Disabled input" disabled />`}
      />
    </div>
  )
}
