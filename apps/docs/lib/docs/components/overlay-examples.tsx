import { Trash2, LogOut } from "lucide-react";
import { Label } from "@einui/ui";
import {
  GlassButton,
  GlassInput,
  GlassSheet,
  GlassSheetTrigger,
  GlassSheetContent,
  GlassSheetHeader,
  GlassSheetTitle,
  GlassSheetDescription,
  GlassSheetFooter,
  GlassSheetClose,
  GlassPopover,
  GlassPopoverTrigger,
  GlassPopoverContent,
  GlassAlertDialog,
  GlassAlertDialogTrigger,
  GlassAlertDialogContent,
  GlassAlertDialogHeader,
  GlassAlertDialogTitle,
  GlassAlertDialogDescription,
  GlassAlertDialogFooter,
  GlassAlertDialogCancel,
  GlassAlertDialogAction,
} from "@einui/registry";

import type { ComponentExample } from "./types";

// ========== SHEET EXAMPLES ==========
export const sheetExamples: ComponentExample[] = [
  {
    title: "Basic Sheet",
    description: "Slide-out panel from the right side.",
    preview: (
      <GlassSheet>
        <GlassSheetTrigger asChild>
          <GlassButton variant="outline">Open Sheet</GlassButton>
        </GlassSheetTrigger>
        <GlassSheetContent>
          <GlassSheetHeader>
            <GlassSheetTitle>Edit Profile</GlassSheetTitle>
            <GlassSheetDescription>Make changes to your profile here.</GlassSheetDescription>
          </GlassSheetHeader>
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
          <GlassSheetFooter>
            <GlassSheetClose asChild>
              <GlassButton variant="outline">Cancel</GlassButton>
            </GlassSheetClose>
            <GlassButton variant="primary">Save changes</GlassButton>
          </GlassSheetFooter>
        </GlassSheetContent>
      </GlassSheet>
    ),
    code: `<GlassSheet>
  <GlassSheetTrigger asChild>
    <GlassButton variant="outline">Open Sheet</GlassButton>
  </GlassSheetTrigger>
  <GlassSheetContent>
    <GlassSheetHeader>
      <GlassSheetTitle>Edit Profile</GlassSheetTitle>
      <GlassSheetDescription>Make changes to your profile here.</GlassSheetDescription>
    </GlassSheetHeader>
    <div className="py-4">...</div>
    <GlassSheetFooter>
      <GlassButton variant="primary">Save changes</GlassButton>
    </GlassSheetFooter>
  </GlassSheetContent>
</GlassSheet>`,
  },
  {
    title: "Sheet Sides",
    description: "Sheets can slide in from different directions.",
    preview: (
      <div className="flex flex-wrap gap-4">
        <GlassSheet>
          <GlassSheetTrigger asChild>
            <GlassButton variant="outline">Left</GlassButton>
          </GlassSheetTrigger>
          <GlassSheetContent side="left">
            <GlassSheetHeader>
              <GlassSheetTitle>Left Sheet</GlassSheetTitle>
            </GlassSheetHeader>
          </GlassSheetContent>
        </GlassSheet>
        <GlassSheet>
          <GlassSheetTrigger asChild>
            <GlassButton variant="outline">Top</GlassButton>
          </GlassSheetTrigger>
          <GlassSheetContent side="top">
            <GlassSheetHeader>
              <GlassSheetTitle>Top Sheet</GlassSheetTitle>
            </GlassSheetHeader>
          </GlassSheetContent>
        </GlassSheet>
        <GlassSheet>
          <GlassSheetTrigger asChild>
            <GlassButton variant="outline">Bottom</GlassButton>
          </GlassSheetTrigger>
          <GlassSheetContent side="bottom">
            <GlassSheetHeader>
              <GlassSheetTitle>Bottom Sheet</GlassSheetTitle>
            </GlassSheetHeader>
          </GlassSheetContent>
        </GlassSheet>
      </div>
    ),
    code: `<GlassSheet>
  <GlassSheetTrigger asChild>
    <GlassButton>Left</GlassButton>
  </GlassSheetTrigger>
  <GlassSheetContent side="left">...</GlassSheetContent>
</GlassSheet>`,
  },
];

// ========== POPOVER EXAMPLES ==========
export const popoverExamples: ComponentExample[] = [
  {
    title: "Basic Popover",
    description: "Floating panel for contextual content.",
    preview: (
      <GlassPopover>
        <GlassPopoverTrigger asChild>
          <GlassButton variant="outline">Open Popover</GlassButton>
        </GlassPopoverTrigger>
        <GlassPopoverContent className="w-80">
          <div className="space-y-2">
            <h4 className="font-medium text-white">Dimensions</h4>
            <p className="text-sm text-white/60">Set the dimensions for the layer.</p>
          </div>
          <div className="grid gap-2 pt-4">
            <div className="grid grid-cols-3 items-center gap-4">
              <Label className="text-white/80">Width</Label>
              <GlassInput className="col-span-2 h-8" defaultValue="100%" />
            </div>
            <div className="grid grid-cols-3 items-center gap-4">
              <Label className="text-white/80">Height</Label>
              <GlassInput className="col-span-2 h-8" defaultValue="25px" />
            </div>
          </div>
        </GlassPopoverContent>
      </GlassPopover>
    ),
    code: `<GlassPopover>
  <GlassPopoverTrigger asChild>
    <GlassButton variant="outline">Open Popover</GlassButton>
  </GlassPopoverTrigger>
  <GlassPopoverContent className="w-80">
    <div className="space-y-2">
      <h4 className="font-medium">Dimensions</h4>
      <p className="text-sm text-white/60">Set the dimensions for the layer.</p>
    </div>
    <div className="grid gap-2 pt-4">
      <GlassInput defaultValue="100%" />
    </div>
  </GlassPopoverContent>
</GlassPopover>`,
  },
  {
    title: "Popover Alignment",
    description: "Control popover positioning relative to trigger.",
    preview: (
      <div className="flex gap-4">
        <GlassPopover>
          <GlassPopoverTrigger asChild>
            <GlassButton variant="outline" size="sm">
              Start
            </GlassButton>
          </GlassPopoverTrigger>
          <GlassPopoverContent align="start" className="w-48">
            <p className="text-sm text-white/70">Aligned to start</p>
          </GlassPopoverContent>
        </GlassPopover>
        <GlassPopover>
          <GlassPopoverTrigger asChild>
            <GlassButton variant="outline" size="sm">
              Center
            </GlassButton>
          </GlassPopoverTrigger>
          <GlassPopoverContent align="center" className="w-48">
            <p className="text-sm text-white/70 text-center">Aligned to center</p>
          </GlassPopoverContent>
        </GlassPopover>
        <GlassPopover>
          <GlassPopoverTrigger asChild>
            <GlassButton variant="outline" size="sm">
              End
            </GlassButton>
          </GlassPopoverTrigger>
          <GlassPopoverContent align="end" className="w-48">
            <p className="text-sm text-white/70 text-right">Aligned to end</p>
          </GlassPopoverContent>
        </GlassPopover>
      </div>
    ),
    code: `<GlassPopover>
  <GlassPopoverTrigger asChild>
    <GlassButton>Start</GlassButton>
  </GlassPopoverTrigger>
  <GlassPopoverContent align="start">...</GlassPopoverContent>
</GlassPopover>`,
  },
];

// ========== ALERT DIALOG EXAMPLES ==========
export const alertDialogExamples: ComponentExample[] = [
  {
    title: "Delete Confirmation",
    description: "Confirm destructive actions before proceeding.",
    preview: (
      <GlassAlertDialog>
        <GlassAlertDialogTrigger asChild>
          <GlassButton variant="destructive">
            <Trash2 className="mr-2 h-4 w-4" /> Delete Account
          </GlassButton>
        </GlassAlertDialogTrigger>
        <GlassAlertDialogContent>
          <GlassAlertDialogHeader>
            <GlassAlertDialogTitle>Are you absolutely sure?</GlassAlertDialogTitle>
            <GlassAlertDialogDescription>
              This action cannot be undone. This will permanently delete your account and remove
              your data from our servers.
            </GlassAlertDialogDescription>
          </GlassAlertDialogHeader>
          <GlassAlertDialogFooter>
            <GlassAlertDialogCancel>Cancel</GlassAlertDialogCancel>
            <GlassAlertDialogAction>Yes, delete account</GlassAlertDialogAction>
          </GlassAlertDialogFooter>
        </GlassAlertDialogContent>
      </GlassAlertDialog>
    ),
    code: `<GlassAlertDialog>
  <GlassAlertDialogTrigger asChild>
    <GlassButton variant="destructive">Delete Account</GlassButton>
  </GlassAlertDialogTrigger>
  <GlassAlertDialogContent>
    <GlassAlertDialogHeader>
      <GlassAlertDialogTitle>Are you absolutely sure?</GlassAlertDialogTitle>
      <GlassAlertDialogDescription>
        This action cannot be undone.
      </GlassAlertDialogDescription>
    </GlassAlertDialogHeader>
    <GlassAlertDialogFooter>
      <GlassAlertDialogCancel>Cancel</GlassAlertDialogCancel>
      <GlassAlertDialogAction>Yes, delete account</GlassAlertDialogAction>
    </GlassAlertDialogFooter>
  </GlassAlertDialogContent>
</GlassAlertDialog>`,
  },
  {
    title: "Log Out Confirmation",
    description: "Confirm logout action.",
    preview: (
      <GlassAlertDialog>
        <GlassAlertDialogTrigger asChild>
          <GlassButton variant="outline">
            <LogOut className="mr-2 h-4 w-4" /> Log Out
          </GlassButton>
        </GlassAlertDialogTrigger>
        <GlassAlertDialogContent>
          <GlassAlertDialogHeader>
            <GlassAlertDialogTitle>Log out of your account?</GlassAlertDialogTitle>
            <GlassAlertDialogDescription>
              You will need to sign in again to access your account.
            </GlassAlertDialogDescription>
          </GlassAlertDialogHeader>
          <GlassAlertDialogFooter>
            <GlassAlertDialogCancel>Stay signed in</GlassAlertDialogCancel>
            <GlassAlertDialogAction>Log out</GlassAlertDialogAction>
          </GlassAlertDialogFooter>
        </GlassAlertDialogContent>
      </GlassAlertDialog>
    ),
    code: `<GlassAlertDialog>
  <GlassAlertDialogTrigger asChild>
    <GlassButton variant="outline">Log Out</GlassButton>
  </GlassAlertDialogTrigger>
  <GlassAlertDialogContent>
    <GlassAlertDialogHeader>
      <GlassAlertDialogTitle>Log out of your account?</GlassAlertDialogTitle>
    </GlassAlertDialogHeader>
    <GlassAlertDialogFooter>
      <GlassAlertDialogCancel>Stay signed in</GlassAlertDialogCancel>
      <GlassAlertDialogAction>Log out</GlassAlertDialogAction>
    </GlassAlertDialogFooter>
  </GlassAlertDialogContent>
</GlassAlertDialog>`,
  },
];
