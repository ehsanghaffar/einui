"use client";

import { PageHeader } from "@/components/docs/page-header";
import { ComponentPreview } from "@/components/docs/component-preview";
import { CLIInstall } from "@/components/docs/cli-install";
import {
  GlassCard,
  GlassCardHeader,
  GlassCardTitle,
  GlassCardDescription,
  GlassCardContent,
  GlassCardFooter,
} from "@/registry/liquid-glass/glass-card";
import { GlassButton } from "@/registry/liquid-glass/glass-button";
import { GlassInput } from "@/registry/liquid-glass/glass-input";
import { GlassAvatar, GlassAvatarFallback } from "@/registry/liquid-glass/glass-avatar";
import { GlassBadge } from "@/registry/liquid-glass/glass-badge";
import { Label } from "@/components/ui/label";
import { Mail, Lock, Users, DollarSign, TrendingUp, Star } from "lucide-react";

const basicCardCode = `<GlassCard>
  <GlassCardHeader>
    <GlassCardTitle>Card Title</GlassCardTitle>
    <GlassCardDescription>
      Card description goes here
    </GlassCardDescription>
  </GlassCardHeader>
  <GlassCardContent>
    <p>Card content</p>
  </GlassCardContent>
  <GlassCardFooter>
    <GlassButton>Action</GlassButton>
  </GlassCardFooter>
</GlassCard>`;

const loginCardCode = `<GlassCard className="w-full max-w-sm">
  <GlassCardHeader>
    <GlassCardTitle>Welcome Back</GlassCardTitle>
    <GlassCardDescription>Sign in to your account</GlassCardDescription>
  </GlassCardHeader>
  <GlassCardContent className="flex flex-col gap-4">
    <div className="flex flex-col gap-2">
      <Label>Email</Label>
      <GlassInput placeholder="you@example.com" />
    </div>
    <div className="flex flex-col gap-2">
      <Label>Password</Label>
      <GlassInput type="password" />
    </div>
  </GlassCardContent>
  <GlassCardFooter>
    <GlassButton variant="primary" className="w-full">
      Sign In
    </GlassButton>
  </GlassCardFooter>
</GlassCard>`;

const featureCardCode = `<GlassCard className="w-full max-w-sm">
    <div className="rounded-t-2xl overflow-hidden">
      <div className="h-32 bg-linear-to-r from-purple-500 to-pink-500" />
    </div>
  <GlassCardContent className="pt-4">
    <h3 className="text-white font-semibold text-lg">Featured Product</h3>
    <p className="text-white/60 text-sm mt-2">A short description of the featured product or service.</p>
  </GlassCardContent>
  <GlassCardFooter>
    <GlassButton variant="primary">Explore</GlassButton>
  </GlassCardFooter>
</GlassCard>`;

const profileCardCode = `<GlassCard className="w-full max-w-sm">
  <GlassCardContent className="pt-6">
    <div className="flex flex-col items-center text-center">
      <GlassAvatar className="h-20 w-20 mb-4">
        <GlassAvatarFallback>JD</GlassAvatarFallback>
      </GlassAvatar>
      <h3 className="text-white font-semibold">John Doe</h3>
      <p className="text-white/60 text-sm">Software Engineer</p>
      <div className="flex gap-2 mt-4">
        <GlassBadge variant="primary">React</GlassBadge>
        <GlassBadge variant="default">TypeScript</GlassBadge>
      </div>
    </div>
  </GlassCardContent>
</GlassCard>`;

export default function CardsPage() {
  return (
    <div className="container mx-auto px-4 py-8 lg:py-12 max-w-4xl">
      <PageHeader
        title="Cards"
        description="Flexible container components with frosted glass morphism effect, perfect for displaying grouped content."
      />

      <ComponentPreview
        title="Feature Card"
        description="Highlight a featured item with visual media and a call-to-action."
        preview={
          <GlassCard className="w-full max-w-sm">
            <div className="rounded-t-2xl overflow-hidden">
              <div className="h-32 bg-linear-to-r from-purple-500 to-pink-500" />
            </div>
            <GlassCardContent className="pt-4">
              <h3 className="text-white font-semibold text-lg flex items-center gap-2">
                <Star className="w-4 h-4 text-yellow-300" /> Featured Product
              </h3>
              <p className="text-white/60 text-sm mt-2">
                A short description of the featured product or service that is concise and to the
                point.
              </p>
            </GlassCardContent>
            <GlassCardFooter>
              <GlassButton variant="primary">Explore</GlassButton>
            </GlassCardFooter>
          </GlassCard>
        }
        code={featureCardCode}
      />

      <CLIInstall componentName="glass-card" />

      <ComponentPreview
        title="Basic Card"
        description="A simple card with header, content, and footer sections."
        preview={
          <GlassCard className="w-full max-w-sm">
            <GlassCardHeader>
              <GlassCardTitle>Card Title</GlassCardTitle>
              <GlassCardDescription>
                Card description goes here with additional context.
              </GlassCardDescription>
            </GlassCardHeader>
            <GlassCardContent>
              <p className="text-white/80">
                This is the card content area where you can add any content.
              </p>
            </GlassCardContent>
            <GlassCardFooter>
              <GlassButton>Action</GlassButton>
            </GlassCardFooter>
          </GlassCard>
        }
        code={basicCardCode}
      />

      <ComponentPreview
        title="Login Card"
        description="A card configured as a login form with email and password inputs."
        preview={
          <GlassCard className="w-full max-w-sm">
            <GlassCardHeader>
              <GlassCardTitle>Welcome Back</GlassCardTitle>
              <GlassCardDescription>Sign in to your account</GlassCardDescription>
            </GlassCardHeader>
            <GlassCardContent className="flex flex-col gap-4">
              <div className="flex flex-col gap-2">
                <Label className="text-white/80 text-sm">Email</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
                  <GlassInput className="pl-10" placeholder="you@example.com" />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <Label className="text-white/80 text-sm">Password</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
                  <GlassInput className="pl-10" type="password" placeholder="Enter password" />
                </div>
              </div>
            </GlassCardContent>
            <GlassCardFooter>
              <GlassButton variant="primary" className="w-full">
                Sign In
              </GlassButton>
            </GlassCardFooter>
          </GlassCard>
        }
        code={loginCardCode}
      />

      <ComponentPreview
        title="Profile Card"
        description="A card displaying user profile information with avatar and badges."
        preview={
          <GlassCard className="w-full max-w-sm">
            <GlassCardContent className="pt-6">
              <div className="flex flex-col items-center text-center">
                <GlassAvatar className="h-20 w-20 mb-4">
                  <GlassAvatarFallback className="text-xl">JD</GlassAvatarFallback>
                </GlassAvatar>
                <h3 className="text-white font-semibold text-lg">John Doe</h3>
                <p className="text-white/60 text-sm">Software Engineer</p>
                <div className="flex gap-2 mt-4">
                  <GlassBadge variant="primary">React</GlassBadge>
                  <GlassBadge variant="default">TypeScript</GlassBadge>
                </div>
              </div>
            </GlassCardContent>
            <GlassCardFooter className="justify-center gap-2">
              <GlassButton variant="outline" size="sm">
                Message
              </GlassButton>
              <GlassButton variant="primary" size="sm">
                Follow
              </GlassButton>
            </GlassCardFooter>
          </GlassCard>
        }
        code={profileCardCode}
      />
    </div>
  );
}
