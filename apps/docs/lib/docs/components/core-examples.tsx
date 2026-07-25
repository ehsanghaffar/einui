import type { ComponentExample } from "./types";

import {
  Mail,
  ArrowRight,
  Loader2,
  Plus,
  Download,
  Settings,
  User,
  Home,
  Star,
  Heart,
  Bell,
} from "lucide-react";
import { Label } from "@einui/ui";
import {
  GlassButton,
  GlassCard,
  GlassCardHeader,
  GlassCardTitle,
  GlassCardDescription,
  GlassCardContent,
  GlassCardFooter,
  GlassAvatar,
  GlassAvatarImage,
  GlassAvatarFallback,
  GlassBadge,
  GlassInput,
  GlassSwitch,
  GlassProgress,
  GlassSlider,
  GlassTabs,
  GlassTabsList,
  GlassTabsTrigger,
  GlassTabsContent,
  GlassSeparator,
  GlassBreadcrumb,
  GlassBreadcrumbList,
  GlassBreadcrumbItem,
  GlassBreadcrumbLink,
  GlassBreadcrumbPage,
  GlassBreadcrumbSeparator,
  GlassBreadcrumbEllipsis,
  GlassDialog,
  GlassDialogTrigger,
  GlassDialogContent,
  GlassDialogHeader,
  GlassDialogTitle,
  GlassDialogDescription,
  GlassDialogFooter,
  GlassTooltipProvider,
  GlassTooltip,
  GlassTooltipTrigger,
  GlassTooltipContent,
} from "@einui/registry";

// ========== BUTTON EXAMPLES ==========
export const buttonExamples: ComponentExample[] = [
  {
    title: "Variants",
    description: "Different button styles for various use cases.",
    preview: (
      <div className="flex flex-wrap gap-4 justify-center">
        <GlassButton variant="default">Default</GlassButton>
        <GlassButton variant="primary">Primary</GlassButton>
        <GlassButton variant="outline">Outline</GlassButton>
        <GlassButton variant="ghost">Ghost</GlassButton>
        <GlassButton variant="destructive">Destructive</GlassButton>
      </div>
    ),
    code: `<GlassButton variant="default">Default</GlassButton>
<GlassButton variant="primary">Primary</GlassButton>
<GlassButton variant="outline">Outline</GlassButton>
<GlassButton variant="ghost">Ghost</GlassButton>
<GlassButton variant="destructive">Destructive</GlassButton>`,
  },
  {
    title: "Sizes",
    description: "Buttons come in small, default, large, and icon sizes.",
    preview: (
      <div className="flex flex-wrap items-center gap-4">
        <GlassButton size="sm">Small</GlassButton>
        <GlassButton size="default">Default</GlassButton>
        <GlassButton size="lg">Large</GlassButton>
        <GlassButton size="icon">
          <Plus className="h-4 w-4" />
        </GlassButton>
      </div>
    ),
    code: `<GlassButton size="sm">Small</GlassButton>
<GlassButton size="default">Default</GlassButton>
<GlassButton size="lg">Large</GlassButton>
<GlassButton size="icon"><Plus /></GlassButton>`,
  },
  {
    title: "With Icons",
    description: "Buttons can include icons before or after the label.",
    preview: (
      <div className="flex flex-wrap gap-4">
        <GlassButton variant="primary">
          <Mail className="mr-2 h-4 w-4" /> Email
        </GlassButton>
        <GlassButton variant="outline">
          Continue <ArrowRight className="ml-2 h-4 w-4" />
        </GlassButton>
        <GlassButton variant="default">
          <Download className="mr-2 h-4 w-4" /> Download
        </GlassButton>
        <GlassButton variant="ghost">
          <Heart className="mr-2 h-4 w-4" /> Like
        </GlassButton>
      </div>
    ),
    code: `<GlassButton variant="primary">
  <Mail className="mr-2 h-4 w-4" /> Email
</GlassButton>
<GlassButton variant="outline">
  Continue <ArrowRight className="ml-2 h-4 w-4" />
</GlassButton>`,
  },
  {
    title: "Glow Effect",
    description: "Add a glow effect to make buttons more prominent.",
    preview: (
      <div className="flex flex-wrap gap-4">
        <GlassButton variant="primary" glowEffect>
          Glow Effect
        </GlassButton>
        <GlassButton variant="default" glowEffect>
          Default Glow
        </GlassButton>
      </div>
    ),
    code: `<GlassButton variant="primary" glow>
  Glow Effect
</GlassButton>`,
  },
  {
    title: "Loading & Disabled",
    description: "States for disabled and loading buttons.",
    preview: (
      <div className="flex flex-wrap gap-4">
        <GlassButton disabled>Disabled</GlassButton>
        <GlassButton variant="primary" disabled>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Loading
        </GlassButton>
      </div>
    ),
    code: `<GlassButton disabled>Disabled</GlassButton>
<GlassButton variant="primary" disabled>
  <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Loading
</GlassButton>`,
  },
];

// ========== CARD EXAMPLES ==========
export const cardExamples: ComponentExample[] = [
  {
    title: "Basic Card",
    description: "A simple card with header, content, and footer.",
    preview: (
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
    ),
    code: `<GlassCard className="w-full max-w-md">
  <GlassCardHeader>
    <GlassCardTitle>Card Title</GlassCardTitle>
    <GlassCardDescription>This is a card description.</GlassCardDescription>
  </GlassCardHeader>
  <GlassCardContent>
    <p>Card content goes here.</p>
  </GlassCardContent>
  <GlassCardFooter>
    <GlassButton variant="primary">Action</GlassButton>
  </GlassCardFooter>
</GlassCard>`,
  },
  {
    title: "Card with Image",
    description: "A card with an image.",
    preview: (
      <GlassCard className="w-full max-w-sm">
        <div className="rounded-t-2xl overflow-hidden">
          <div className="h-32 bg-linear-to-r from-purple-500 to-pink-500" />
        </div>
        <GlassCardContent className="pt-4">
          <h3 className="text-white font-semibold text-lg flex items-center gap-2">
            <Star className="w-4 h-4 text-yellow-300" /> Featured Product
          </h3>
          <p className="text-white/60 text-sm mt-2">
            A short description of the featured product or service that is concise and to the point.
          </p>
        </GlassCardContent>
        <GlassCardFooter>
          <GlassButton variant="primary">Explore</GlassButton>
        </GlassCardFooter>
      </GlassCard>
    ),
    code: `<GlassCard className="w-full max-w-sm">
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
</GlassCard>`,
  },
  {
    title: "Profile Card",
    description: "A card designed to display user profile information.",
    preview: (
      <GlassCard className="w-full max-w-sm">
        <GlassCardHeader className="items-center">
          <GlassAvatar className="h-16 w-16">
            <GlassAvatarImage src="/diverse-avatars.png" alt="User" />
            <GlassAvatarFallback>JD</GlassAvatarFallback>
          </GlassAvatar>
          <GlassCardTitle className="mt-4">John Doe</GlassCardTitle>
          <GlassCardDescription>Software Engineer</GlassCardDescription>
        </GlassCardHeader>
        <GlassCardContent className="text-center">
          <div className="flex justify-center gap-4">
            <GlassBadge>React</GlassBadge>
            <GlassBadge variant="outline">TypeScript</GlassBadge>
          </div>
        </GlassCardContent>
        <GlassCardFooter className="justify-center">
          <GlassButton variant="outline" size="sm">
            View Profile
          </GlassButton>
        </GlassCardFooter>
      </GlassCard>
    ),
    code: `<GlassCard className="w-full max-w-sm">
  <GlassCardHeader className="items-center">
    <GlassAvatar className="h-16 w-16">
      <GlassAvatarImage src="/avatar.png" alt="User" />
      <GlassAvatarFallback>JD</GlassAvatarFallback>
    </GlassAvatar>
    <GlassCardTitle className="mt-4">John Doe</GlassCardTitle>
    <GlassCardDescription>Software Engineer</GlassCardDescription>
  </GlassCardHeader>
  <GlassCardContent className="text-center">
    <div className="flex justify-center gap-4">
      <GlassBadge>React</GlassBadge>
      <GlassBadge variant="secondary">TypeScript</GlassBadge>
    </div>
  </GlassCardContent>
</GlassCard>`,
  },
];

// ========== INPUT EXAMPLES ==========
export const inputExamples: ComponentExample[] = [
  {
    title: "Basic Input",
    description: "Standard text input with placeholder.",
    preview: (
      <div className="w-full max-w-sm">
        <GlassInput placeholder="Enter your email" type="email" />
      </div>
    ),
    code: `<GlassInput placeholder="Enter your email" type="email" />`,
  },
  {
    title: "With Label",
    description: "Input with an associated label.",
    preview: (
      <div className="w-full max-w-sm space-y-2">
        <Label className="text-white/80">Username</Label>
        <GlassInput placeholder="johndoe" />
      </div>
    ),
    code: `<Label>Username</Label>
<GlassInput placeholder="johndoe" />`,
  },
  {
    title: "Different Types",
    description: "Various input types for different data.",
    preview: (
      <div className="w-full max-w-sm space-y-4">
        <GlassInput type="password" placeholder="Password" />
        <GlassInput type="number" placeholder="Age" />
        <GlassInput type="date" />
      </div>
    ),
    code: `<GlassInput type="password" placeholder="Password" />
<GlassInput type="number" placeholder="Age" />
<GlassInput type="date" />`,
  },
];

// ========== BREADCRUMB EXAMPLES ==========
export const breadcrumbExamples: ComponentExample[] = [
  {
    title: "Basic Breadcrumb",
    description: "Standard navigation breadcrumb.",
    preview: (
      <GlassBreadcrumb>
        <GlassBreadcrumbList>
          <GlassBreadcrumbItem>
            <GlassBreadcrumbLink href="/">
              <Home className="h-4 w-4" />
            </GlassBreadcrumbLink>
          </GlassBreadcrumbItem>
          <GlassBreadcrumbSeparator />
          <GlassBreadcrumbItem>
            <GlassBreadcrumbLink href="/docs">Documentation</GlassBreadcrumbLink>
          </GlassBreadcrumbItem>
          <GlassBreadcrumbSeparator />
          <GlassBreadcrumbItem>
            <GlassBreadcrumbPage>Components</GlassBreadcrumbPage>
          </GlassBreadcrumbItem>
        </GlassBreadcrumbList>
      </GlassBreadcrumb>
    ),
    code: `<GlassBreadcrumb>
  <GlassBreadcrumbList>
    <GlassBreadcrumbItem>
      <GlassBreadcrumbLink href="/">Home</GlassBreadcrumbLink>
    </GlassBreadcrumbItem>
    <GlassBreadcrumbSeparator />
    <GlassBreadcrumbItem>
      <GlassBreadcrumbPage>Components</GlassBreadcrumbPage>
    </GlassBreadcrumbItem>
  </GlassBreadcrumbList>
</GlassBreadcrumb>`,
  },
  {
    title: "With Ellipsis",
    description: "Collapsed breadcrumb for long paths.",
    preview: (
      <GlassBreadcrumb>
        <GlassBreadcrumbList>
          <GlassBreadcrumbItem>
            <GlassBreadcrumbLink href="/">Home</GlassBreadcrumbLink>
          </GlassBreadcrumbItem>
          <GlassBreadcrumbSeparator />
          <GlassBreadcrumbItem>
            <GlassBreadcrumbEllipsis />
          </GlassBreadcrumbItem>
          <GlassBreadcrumbSeparator />
          <GlassBreadcrumbItem>
            <GlassBreadcrumbLink href="/docs/components">Components</GlassBreadcrumbLink>
          </GlassBreadcrumbItem>
          <GlassBreadcrumbSeparator />
          <GlassBreadcrumbItem>
            <GlassBreadcrumbPage>Breadcrumb</GlassBreadcrumbPage>
          </GlassBreadcrumbItem>
        </GlassBreadcrumbList>
      </GlassBreadcrumb>
    ),
    code: `<GlassBreadcrumb>
  <GlassBreadcrumbList>
    <GlassBreadcrumbItem>
      <GlassBreadcrumbLink href="/">Home</GlassBreadcrumbLink>
    </GlassBreadcrumbItem>
    <GlassBreadcrumbSeparator />
    <GlassBreadcrumbItem>
      <GlassBreadcrumbEllipsis />
    </GlassBreadcrumbItem>
    <GlassBreadcrumbSeparator />
    <GlassBreadcrumbItem>
      <GlassBreadcrumbPage>Breadcrumb</GlassBreadcrumbPage>
    </GlassBreadcrumbItem>
  </GlassBreadcrumbList>
</GlassBreadcrumb>`,
  },
];

// ========== SEPARATOR EXAMPLES ==========
export const separatorExamples: ComponentExample[] = [
  {
    title: "Horizontal Separator",
    description: "Divide content sections horizontally.",
    preview: (
      <div className="w-full max-w-md space-y-4">
        <div>
          <h4 className="text-sm font-medium text-white">Section One</h4>
          <p className="text-sm text-white/60">Content for the first section.</p>
        </div>
        <GlassSeparator />
        <div>
          <h4 className="text-sm font-medium text-white">Section Two</h4>
          <p className="text-sm text-white/60">Content for the second section.</p>
        </div>
      </div>
    ),
    code: `<div>Section One</div>
<GlassSeparator />
<div>Section Two</div>`,
  },
  {
    title: "Vertical Separator",
    description: "Divide content sections vertically.",
    preview: (
      <div className="flex h-8 items-center gap-4">
        <span className="text-sm text-white">Blog</span>
        <GlassSeparator orientation="vertical" />
        <span className="text-sm text-white">Docs</span>
        <GlassSeparator orientation="vertical" />
        <span className="text-sm text-white">Source</span>
      </div>
    ),
    code: `<div className="flex h-8 items-center gap-4">
  <span>Blog</span>
  <GlassSeparator orientation="vertical" />
  <span>Docs</span>
  <GlassSeparator orientation="vertical" />
  <span>Source</span>
</div>`,
  },
];

// ========== DIALOGS EXAMPLES ==========
export const dialogsExamples: ComponentExample[] = [
  {
    title: "Basic Dialog",
    description: "Modal dialog for focused interactions.",
    preview: (
      <GlassDialog>
        <GlassDialogTrigger asChild>
          <GlassButton variant="primary">Open Dialog</GlassButton>
        </GlassDialogTrigger>
        <GlassDialogContent>
          <GlassDialogHeader className="text-left">
            <GlassDialogTitle>Edit Profile</GlassDialogTitle>
            <GlassDialogDescription>Make changes to your profile here.</GlassDialogDescription>
          </GlassDialogHeader>
          <div className="py-4 space-y-4">
            <div className="space-y-2">
              <Label className="text-white/80">Name</Label>
              <GlassInput placeholder="John Doe" />
            </div>
            <div className="space-y-2">
              <Label className="text-white/80">Email</Label>
              <GlassInput type="email" placeholder="john@example.com" />
            </div>
          </div>
          <GlassDialogFooter className="flex-row justify-end gap-2">
            <GlassButton variant="outline">Cancel</GlassButton>
            <GlassButton variant="primary">Save changes</GlassButton>
          </GlassDialogFooter>
        </GlassDialogContent>
      </GlassDialog>
    ),
    code: `<GlassDialog>
  <GlassDialogTrigger asChild>
    <GlassButton variant="primary">Open Dialog</GlassButton>
  </GlassDialogTrigger>
  <GlassDialogContent>
    <GlassDialogHeader>
      <GlassDialogTitle>Edit Profile</GlassDialogTitle>
      <GlassDialogDescription>Make changes to your profile here.</GlassDialogDescription>
    </GlassDialogHeader>
    <div className="py-4">...</div>
    <GlassDialogFooter>
      <GlassButton variant="primary">Save changes</GlassButton>
    </GlassDialogFooter>
  </GlassDialogContent>
</GlassDialog>`,
  },
  {
    title: "Settings Dialog",
    description: "Dialog with multiple form elements.",
    preview: (
      <GlassDialog>
        <GlassDialogTrigger asChild>
          <GlassButton variant="outline">
            <Settings className="mr-2 h-4 w-4" /> Settings
          </GlassButton>
        </GlassDialogTrigger>
        <GlassDialogContent>
          <GlassDialogHeader className="text-left">
            <GlassDialogTitle>Notification Settings</GlassDialogTitle>
            <GlassDialogDescription>
              Configure how you receive notifications.
            </GlassDialogDescription>
          </GlassDialogHeader>
          <div className="py-4 space-y-4">
            <div className="flex items-center justify-between">
              <Label className="text-white/80">Email notifications</Label>
              <GlassSwitch defaultChecked />
            </div>
            <div className="flex items-center justify-between">
              <Label className="text-white/80">Push notifications</Label>
              <GlassSwitch />
            </div>
          </div>
          <GlassDialogFooter className="flex-row justify-end gap-2">
            <GlassButton variant="primary">Save</GlassButton>
          </GlassDialogFooter>
        </GlassDialogContent>
      </GlassDialog>
    ),
    code: `<GlassDialog>
  <GlassDialogTrigger asChild>
    <GlassButton variant="outline">Settings</GlassButton>
  </GlassDialogTrigger>
  <GlassDialogContent>
    <GlassDialogHeader>
      <GlassDialogTitle>Notification Settings</GlassDialogTitle>
    </GlassDialogHeader>
    <div className="py-4 space-y-4">
      <div className="flex items-center justify-between">
        <Label>Email notifications</Label>
        <GlassSwitch defaultChecked />
      </div>
    </div>
    <GlassDialogFooter>
      <GlassButton variant="primary">Save</GlassButton>
    </GlassDialogFooter>
  </GlassDialogContent>
</GlassDialog>`,
  },
];

// ========== TABS EXAMPLES ==========
export const tabsExamples: ComponentExample[] = [
  {
    title: "Basic Tabs",
    description: "Organize content into tabbed sections.",
    preview: (
      <GlassTabs defaultValue="account" className="w-full max-w-lg">
        <GlassTabsList>
          <GlassTabsTrigger value="account">Account</GlassTabsTrigger>
          <GlassTabsTrigger value="password">Password</GlassTabsTrigger>
          <GlassTabsTrigger value="settings">Settings</GlassTabsTrigger>
        </GlassTabsList>
        <GlassTabsContent value="account">
          <div className="p-4 rounded-xl bg-white/5">
            <p className="text-white/80">Manage your account settings and preferences.</p>
          </div>
        </GlassTabsContent>
        <GlassTabsContent value="password">
          <div className="p-4 rounded-xl bg-white/5">
            <p className="text-white/80">Update your password and security settings.</p>
          </div>
        </GlassTabsContent>
        <GlassTabsContent value="settings">
          <div className="p-4 rounded-xl bg-white/5">
            <p className="text-white/80">Configure general application settings.</p>
          </div>
        </GlassTabsContent>
      </GlassTabs>
    ),
    code: `<GlassTabs defaultValue="account" className="w-full max-w-md">
  <GlassTabsList>
    <GlassTabsTrigger value="account">Account</GlassTabsTrigger>
    <GlassTabsTrigger value="password">Password</GlassTabsTrigger>
  </GlassTabsList>
  <GlassTabsContent value="account">
    <GlassCard>...</GlassCard>
  </GlassTabsContent>
  <GlassTabsContent value="password">
    <GlassCard>...</GlassCard>
  </GlassTabsContent>
</GlassTabs>`,
  },
  {
    title: "Icon Tabs",
    description: "Tabs with icons for visual clarity.",
    preview: (
      <GlassTabs defaultValue="profile" className="w-full max-w-lg">
        <GlassTabsList className="w-full">
          <GlassTabsTrigger value="profile" className="group flex-1">
            <User className="h-4 w-4" />
            <span className="ml-2 hidden group-data-[state=active]:inline sm:inline">Profile</span>
          </GlassTabsTrigger>
          <GlassTabsTrigger value="notifications" className="group flex-1">
            <Bell className="h-4 w-4" />
            <span className="ml-2 hidden group-data-[state=active]:inline sm:inline">Notifications</span>
          </GlassTabsTrigger>
          <GlassTabsTrigger value="settings" className="group flex-1">
            <Settings className="h-4 w-4" />
            <span className="ml-2 hidden group-data-[state=active]:inline sm:inline">Settings</span>
          </GlassTabsTrigger>
        </GlassTabsList>
        <GlassTabsContent value="profile">
          <div className="p-4 rounded-xl bg-white/5">
            <p className="text-white/80">Your profile information and public details.</p>
          </div>
        </GlassTabsContent>
        <GlassTabsContent value="notifications">
          <div className="p-4 rounded-xl bg-white/5">
            <p className="text-white/80">Manage your notification preferences.</p>
          </div>
        </GlassTabsContent>
        <GlassTabsContent value="settings">
          <div className="p-4 rounded-xl bg-white/5">
            <p className="text-white/80">Application settings and configuration.</p>
          </div>
        </GlassTabsContent>
      </GlassTabs>
    ),
    code: `<GlassTabs defaultValue="profile">
  <GlassTabsList>
    <GlassTabsTrigger value="profile" className="group">
      <User className="h-4 w-4" />
      <span className="ml-2 hidden group-data-[state=active]:inline sm:inline">Profile</span>
    </GlassTabsTrigger>
    <GlassTabsTrigger value="billing" className="group">
      <CreditCard className="h-4 w-4" />
      <span className="ml-2 hidden group-data-[state=active]:inline sm:inline">Billing</span>
    </GlassTabsTrigger>
  </GlassTabsList>
  <GlassTabsContent value="profile">...</GlassTabsContent>
</GlassTabs>`,
  },
  {
    title: "Settings Panel",
    description: "Settings panel with tabs for different sections.",
    preview: (
      <GlassTabs defaultValue="general" className="w-full">
        <GlassTabsList className="w-full">
          <GlassTabsTrigger value="general" className="flex-1 px-2 sm:px-4">
            General
          </GlassTabsTrigger>
          <GlassTabsTrigger value="notifications" className="flex-1 px-2 sm:px-4">
            Notifications
          </GlassTabsTrigger>
          <GlassTabsTrigger value="security" className="flex-1 px-2 sm:px-4">
            Security
          </GlassTabsTrigger>
        </GlassTabsList>
        <GlassTabsContent value="general">
          <div className="space-y-4">
            <div className="flex flex-col gap-2">
              <Label className="text-white/80 text-sm">Display Name</Label>
              <GlassInput placeholder="John Doe" />
            </div>
            <div className="flex flex-col gap-2">
              <Label className="text-white/80 text-sm">Email</Label>
              <GlassInput placeholder="john@example.com" />
            </div>
            <GlassButton variant="primary">Save Changes</GlassButton>
          </div>
        </GlassTabsContent>
        <GlassTabsContent value="notifications">
          <div className="space-y-4">
            <p className="text-white/60 text-sm">Configure how you receive notifications.</p>
            <div className="space-y-2">
              <div className="flex items-center justify-between p-3 rounded-lg bg-white/5">
                <span className="text-white/80 text-sm">Email notifications</span>
                <div className="w-10 h-6 bg-cyan-500/50 rounded-full" />
              </div>
              <div className="flex items-center justify-between p-3 rounded-lg bg-white/5">
                <span className="text-white/80 text-sm">Push notifications</span>
                <div className="w-10 h-6 bg-white/20 rounded-full" />
              </div>
            </div>
          </div>
        </GlassTabsContent>
        <GlassTabsContent value="security">
          <div className="space-y-4">
            <div className="flex flex-col gap-2">
              <Label className="text-white/80 text-sm">Current Password</Label>
              <GlassInput type="password" placeholder="Enter current password" />
            </div>
            <div className="flex flex-col gap-2">
              <Label className="text-white/80 text-sm">New Password</Label>
              <GlassInput type="password" placeholder="Enter new password" />
            </div>
            <GlassButton variant="primary">Update Password</GlassButton>
          </div>
        </GlassTabsContent>
      </GlassTabs>
    ),
    code: `<GlassTabs defaultValue="general" className="w-full">
  <GlassTabsList className="w-full">
    <GlassTabsTrigger value="general" className="flex-1 px-2 sm:px-4">
      General
    </GlassTabsTrigger>
    <GlassTabsTrigger value="notifications" className="flex-1 px-2 sm:px-4">
      Notifications
    </GlassTabsTrigger>
    <GlassTabsTrigger value="security" className="flex-1 px-2 sm:px-4">
      Security
    </GlassTabsTrigger>
  </GlassTabsList>
  <GlassTabsContent value="general">...</GlassTabsContent>
</GlassTabs>`,
  },
];

// ========== BADGE EXAMPLES ==========
export const badgeExamples: ComponentExample[] = [
  {
    title: "Badge Variants",
    description: "Different badge styles for various contexts.",
    preview: (
      <div className="flex flex-wrap gap-4 justify-center">
        <GlassBadge>Default</GlassBadge>
        <GlassBadge variant="primary">Secondary</GlassBadge>
        <GlassBadge variant="outline">Outline</GlassBadge>
        <GlassBadge variant="destructive">Destructive</GlassBadge>
      </div>
    ),
    code: `<GlassBadge>Default</GlassBadge>
<GlassBadge variant="secondary">Secondary</GlassBadge>
<GlassBadge variant="outline">Outline</GlassBadge>
<GlassBadge variant="destructive">Destructive</GlassBadge>`,
  },
  {
    title: "Tags",
    description: "Badges for displaying tags.",
    preview: (
      <div className="flex flex-wrap gap-2 justify-center">
        <GlassBadge variant="primary">React</GlassBadge>
        <GlassBadge variant="primary">TypeScript</GlassBadge>
        <GlassBadge variant="primary">Tailwind CSS</GlassBadge>
        <GlassBadge variant="primary">Next.js</GlassBadge>
      </div>
    ),
    code: `<GlassBadge variant="primary">React</GlassBadge>
<GlassBadge variant="primary">TypeScript</GlassBadge>
<GlassBadge variant="primary">Tailwind CSS</GlassBadge>
<GlassBadge variant="primary">Next.js</GlassBadge>`,
  },
  {
    title: "Status Indicators",
    description: "Badges with status indicators for visual clarity.",
    preview: (
      <div className="flex flex-wrap items-center gap-2 sm:gap-3">
        <GlassBadge variant="success" className="flex items-center">
          <span className="w-2 h-2 rounded-full bg-emerald-400 mr-2" />
          Online
        </GlassBadge>
        <GlassBadge variant="warning" className="flex items-center">
          <span className="w-2 h-2 rounded-full bg-amber-400 mr-2" />
          Away
        </GlassBadge>
        <GlassBadge variant="destructive" className="flex items-center">
          <span className="w-2 h-2 rounded-full bg-red-400 mr-2" />
          Offline
        </GlassBadge>
      </div>
    ),
    code: `<GlassBadge>
  <Star className="w-4 h-4 text-yellow-300" /> Featured
</GlassBadge>`,
  },
];

// ========== AVATAR EXAMPLES ==========
export const avatarExamples: ComponentExample[] = [
  {
    title: "Basic Avatar",
    description: "Display user avatars with fallback support.",
    preview: (
      <div className="flex gap-4">
        <GlassAvatar>
          <GlassAvatarImage src="/stylized-user-avatar.png" alt="User" />
          <GlassAvatarFallback>JD</GlassAvatarFallback>
        </GlassAvatar>
        <GlassAvatar>
          <GlassAvatarImage src="/avatar-woman.png" alt="User" />
          <GlassAvatarFallback>AB</GlassAvatarFallback>
        </GlassAvatar>
        <GlassAvatar>
          <GlassAvatarFallback>CN</GlassAvatarFallback>
        </GlassAvatar>
      </div>
    ),
    code: `<GlassAvatar>
  <GlassAvatarImage src="/avatar.png" alt="User" />
  <GlassAvatarFallback>JD</GlassAvatarFallback>
</GlassAvatar>`,
  },
  {
    title: "Avatar Sizes",
    description: "Different avatar sizes for various contexts.",
    preview: (
      <div className="flex items-center gap-4">
        <GlassAvatar className="h-8 w-8">
          <GlassAvatarFallback className="text-xs">SM</GlassAvatarFallback>
        </GlassAvatar>
        <GlassAvatar className="h-10 w-10">
          <GlassAvatarFallback className="text-sm">MD</GlassAvatarFallback>
        </GlassAvatar>
        <GlassAvatar className="h-14 w-14">
          <GlassAvatarFallback>LG</GlassAvatarFallback>
        </GlassAvatar>
        <GlassAvatar className="h-20 w-20">
          <GlassAvatarFallback className="text-lg">XL</GlassAvatarFallback>
        </GlassAvatar>
      </div>
    ),
    code: `<GlassAvatar className="h-8 w-8">
  <GlassAvatarFallback className="text-xs">SM</GlassAvatarFallback>
</GlassAvatar>
<GlassAvatar className="h-14 w-14">
  <GlassAvatarFallback>LG</GlassAvatarFallback>
</GlassAvatar>`,
  },
];

// ========== PROGRESS EXAMPLES ==========
export const progressExamples: ComponentExample[] = [
  {
    title: "Basic Progress",
    description: "Visual progress indicator.",
    preview: (
      <div className="w-full max-w-md space-y-4">
        <GlassProgress value={33} />
        <GlassProgress value={66} />
        <GlassProgress value={100} />
      </div>
    ),
    code: `<GlassProgress value={33} />
<GlassProgress value={66} />
<GlassProgress value={100} />`,
  },
  {
    title: "Progress with Label",
    description: "Progress bar with percentage label.",
    preview: (
      <div className="w-full max-w-md space-y-2">
        <div className="flex justify-between text-sm">
          <span className="text-white/80">Uploading...</span>
          <span className="text-white/60">75%</span>
        </div>
        <GlassProgress value={75} />
      </div>
    ),
    code: `<div className="flex justify-between text-sm">
  <span>Uploading...</span>
  <span>75%</span>
</div>
<GlassProgress value={75} />`,
  },
];

// ========== SWITCH EXAMPLES ==========
export const switchExamples: ComponentExample[] = [
  {
    title: "Basic Switch",
    description: "Toggle switch for boolean settings.",
    preview: (
      <div className="flex items-center space-x-2">
        <GlassSwitch id="airplane" />
        <Label htmlFor="airplane" className="text-white/80">
          Airplane Mode
        </Label>
      </div>
    ),
    code: `<GlassSwitch id="airplane" />
<Label htmlFor="airplane">Airplane Mode</Label>`,
  },
  {
    title: "Switch States",
    description: "Switches in different states.",
    preview: (
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <GlassSwitch id="notifications" defaultChecked />
          <Label htmlFor="notifications" className="text-white/80">
            Enable notifications
          </Label>
        </div>
        <div className="flex items-center gap-3">
          <GlassSwitch id="marketing" defaultChecked />
          <Label htmlFor="marketing" className="text-white/80">
            Marketing emails
          </Label>
        </div>
      </div>
    ),
    code: `<div className="flex flex-col gap-4">
  <div className="flex items-center gap-3">
    <GlassSwitch id="notifications" defaultChecked />
    <Label htmlFor="notifications" className="text-white/80">
      Enable notifications
    </Label>
  </div>
  <div className="flex items-center gap-3">
    <GlassSwitch id="marketing" defaultChecked />
    <Label htmlFor="marketing" className="text-white/80">
      Marketing emails
    </Label>
  </div>
</div>`,
  },
  {
    title: "Settings Panel",
    description: "Settings panel with switches for different sections.",
    preview: (
      <div className="w-full max-w-md space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-white font-medium">Dark Mode</p>
            <p className="text-white/50 text-sm">Use dark theme across the app</p>
          </div>
          <GlassSwitch defaultChecked />
        </div>
        <div className="h-px bg-white/10" />
        <div className="flex items-center justify-between">
          <div>
            <p className="text-white font-medium">Push Notifications</p>
            <p className="text-white/50 text-sm">Receive push notifications</p>
          </div>
          <GlassSwitch />
        </div>
        <div className="h-px bg-white/10" />
        <div className="flex items-center justify-between">
          <div>
            <p className="text-white font-medium">Auto Updates</p>
            <p className="text-white/50 text-sm">Keep app up to date automatically</p>
          </div>
          <GlassSwitch defaultChecked />
        </div>
      </div>
    ),
    code: `<div className="flex flex-col gap-4">
  <div className="flex items-center justify-between">
    <div>
      <p className="text-white font-medium">Dark Mode</p>
      <p className="text-white/50 text-sm">Use dark theme across the app</p>
    </div>
    <GlassSwitch defaultChecked />
  </div>
  <div className="h-px bg-white/10" />
  <div className="flex items-center justify-between">
    <div>
      <p className="text-white font-medium">Push Notifications</p>
      <p className="text-white/50 text-sm">Receive push notifications</p>
    </div>
    </div>`,
  },
];

// ========== SLIDER EXAMPLES ==========
export const sliderExamples: ComponentExample[] = [
  {
    title: "Basic Slider",
    description: "Range input for selecting values.",
    preview: (
      <div className="w-full max-w-md space-y-4">
        <GlassSlider defaultValue={[50]} max={100} step={1} />
      </div>
    ),
    code: `<GlassSlider defaultValue={[50]} max={100} step={1} />`,
  },
  {
    title: "Slider with Labels",
    description: "Slider with value display.",
    preview: (
      <div className="w-full max-w-md space-y-2">
        <div className="flex justify-between text-sm">
          <Label className="text-white/80">Volume</Label>
          <span className="text-white/60">75%</span>
        </div>
        <GlassSlider defaultValue={[75]} max={100} step={1} />
      </div>
    ),
    code: `<div className="flex justify-between text-sm">
  <Label>Volume</Label>
  <span>75%</span>
</div>
<GlassSlider defaultValue={[75]} max={100} step={1} />`,
  },
];

// ========== TOOLTIP EXAMPLES ==========
export const tooltipExamples: ComponentExample[] = [
  {
    title: "Basic Tooltip",
    description: "Hover to reveal additional information.",
    preview: (
      <GlassTooltipProvider>
        <GlassTooltip>
          <GlassTooltipTrigger asChild>
            <GlassButton variant="outline">Hover me</GlassButton>
          </GlassTooltipTrigger>
          <GlassTooltipContent>
            <p>Add to library</p>
          </GlassTooltipContent>
        </GlassTooltip>
      </GlassTooltipProvider>
    ),
    code: `<GlassTooltipProvider>
  <GlassTooltip>
    <GlassTooltipTrigger asChild>
      <GlassButton variant="outline">Hover me</GlassButton>
    </GlassTooltipTrigger>
    <GlassTooltipContent>
      <p>Add to library</p>
    </GlassTooltipContent>
  </GlassTooltip>
</GlassTooltipProvider>`,
  },
  {
    title: "Tooltip Positions",
    description: "Tooltips can appear in different positions.",
    preview: (
      <GlassTooltipProvider>
        <div className="flex gap-4">
          <GlassTooltip>
            <GlassTooltipTrigger asChild>
              <GlassButton variant="outline" size="sm">
                Top
              </GlassButton>
            </GlassTooltipTrigger>
            <GlassTooltipContent side="top">
              <p>Top tooltip</p>
            </GlassTooltipContent>
          </GlassTooltip>
          <GlassTooltip>
            <GlassTooltipTrigger asChild>
              <GlassButton variant="outline" size="sm">
                Bottom
              </GlassButton>
            </GlassTooltipTrigger>
            <GlassTooltipContent side="bottom">
              <p>Bottom tooltip</p>
            </GlassTooltipContent>
          </GlassTooltip>
          <GlassTooltip>
            <GlassTooltipTrigger asChild>
              <GlassButton variant="outline" size="sm">
                Left
              </GlassButton>
            </GlassTooltipTrigger>
            <GlassTooltipContent side="left">
              <p>Left tooltip</p>
            </GlassTooltipContent>
          </GlassTooltip>
        </div>
      </GlassTooltipProvider>
    ),
    code: `<GlassTooltip>
  <GlassTooltipTrigger asChild>
    <GlassButton>Top</GlassButton>
  </GlassTooltipTrigger>
  <GlassTooltipContent side="top">
    <p>Top tooltip</p>
  </GlassTooltipContent>
</GlassTooltip>`,
  },
];
