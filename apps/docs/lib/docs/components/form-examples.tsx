import type { ComponentExample } from "./types";
import {
  GlassSelect,
  GlassSelectTrigger,
  GlassSelectValue,
  GlassSelectContent,
  GlassSelectItem,
  GlassSelectGroup,
  GlassSelectLabel,
  GlassSelectSeparator,
  GlassTextarea,
  GlassCheckbox,
  GlassRadioGroup,
  GlassRadioGroupItem,
} from "@einui/registry";
import { Label } from "@einui/ui";

// ========== SELECT EXAMPLES ==========
export const selectExamples: ComponentExample[] = [
  {
    title: "Basic Select",
    description: "A simple dropdown select with options.",
    preview: (
      <GlassSelect>
        <GlassSelectTrigger className="w-50">
          <GlassSelectValue placeholder="Select a fruit" />
        </GlassSelectTrigger>
        <GlassSelectContent>
          <GlassSelectItem value="apple">Apple</GlassSelectItem>
          <GlassSelectItem value="banana">Banana</GlassSelectItem>
          <GlassSelectItem value="orange">Orange</GlassSelectItem>
          <GlassSelectItem value="grape">Grape</GlassSelectItem>
        </GlassSelectContent>
      </GlassSelect>
    ),
    code: `<GlassSelect>
  <GlassSelectTrigger className="w-50">
    <GlassSelectValue placeholder="Select a fruit" />
  </GlassSelectTrigger>
  <GlassSelectContent>
    <GlassSelectItem value="apple">Apple</GlassSelectItem>
    <GlassSelectItem value="banana">Banana</GlassSelectItem>
    <GlassSelectItem value="orange">Orange</GlassSelectItem>
  </GlassSelectContent>
</GlassSelect>`,
  },
  {
    title: "Grouped Options",
    description: "Select with grouped options and labels.",
    preview: (
      <GlassSelect>
        <GlassSelectTrigger className="w-60">
          <GlassSelectValue placeholder="Select a timezone" />
        </GlassSelectTrigger>
        <GlassSelectContent>
          <GlassSelectGroup>
            <GlassSelectLabel>North America</GlassSelectLabel>
            <GlassSelectItem value="est">Eastern Standard Time</GlassSelectItem>
            <GlassSelectItem value="cst">Central Standard Time</GlassSelectItem>
            <GlassSelectItem value="pst">Pacific Standard Time</GlassSelectItem>
          </GlassSelectGroup>
          <GlassSelectSeparator />
          <GlassSelectGroup>
            <GlassSelectLabel>Europe</GlassSelectLabel>
            <GlassSelectItem value="gmt">Greenwich Mean Time</GlassSelectItem>
            <GlassSelectItem value="cet">Central European Time</GlassSelectItem>
          </GlassSelectGroup>
        </GlassSelectContent>
      </GlassSelect>
    ),
    code: `<GlassSelect>
  <GlassSelectTrigger className="w-60">
    <GlassSelectValue placeholder="Select a timezone" />
  </GlassSelectTrigger>
  <GlassSelectContent>
    <GlassSelectGroup>
      <GlassSelectLabel>North America</GlassSelectLabel>
      <GlassSelectItem value="est">Eastern Standard Time</GlassSelectItem>
    </GlassSelectGroup>
  </GlassSelectContent>
</GlassSelect>`,
  },
];

// ========== TEXTAREA EXAMPLES ==========
export const textareaExamples: ComponentExample[] = [
  {
    title: "Basic Textarea",
    description: "Multi-line text input for longer content.",
    preview: (
      <div className="w-full max-w-md">
        <GlassTextarea placeholder="Type your message here..." />
      </div>
    ),
    code: `<GlassTextarea placeholder="Type your message here..." />`,
  },
  {
    title: "With Label and Character Count",
    description: "Textarea with associated label for forms.",
    preview: (
      <div className="w-full max-w-md space-y-2">
        <Label className="text-white/80">Bio</Label>
        <GlassTextarea placeholder="Tell us about yourself..." rows={4} />
        <p className="text-xs text-white/40 text-right">0/500 characters</p>
      </div>
    ),
    code: `<Label>Bio</Label>
<GlassTextarea placeholder="Tell us about yourself..." rows={4} />`,
  },
];

// ========== CHECKBOX EXAMPLES ==========
export const checkboxExamples: ComponentExample[] = [
  {
    title: "Basic Checkbox",
    description: "Standard checkbox with label.",
    preview: (
      <label className="flex items-center space-x-2">
        <GlassCheckbox />
        <span className="text-white/80">Accept terms and conditions</span>
      </label>
    ),
    code: `<label className="flex items-center space-x-2">
  <GlassCheckbox />
  <span>Accept terms and conditions</span>
</label>`,
  },
  {
    title: "Checkbox Group",
    description: "Multiple checkboxes for multi-select scenarios.",
    preview: (
      <div className="space-y-3">
        <label className="flex items-center space-x-2">
          <GlassCheckbox defaultChecked />
          <span className="text-white/80">Email notifications</span>
        </label>
        <label className="flex items-center space-x-2">
          <GlassCheckbox />
          <span className="text-white/80">SMS notifications</span>
        </label>
        <label className="flex items-center space-x-2">
          <GlassCheckbox defaultChecked />
          <span className="text-white/80">Push notifications</span>
        </label>
      </div>
    ),
    code: `<div className="space-y-3">
  <label className="flex items-center space-x-2">
    <GlassCheckbox defaultChecked />
    <span>Email notifications</span>
  </label>
  <label className="flex items-center space-x-2">
    <GlassCheckbox />
    <span>SMS notifications</span>
  </label>
</div>`,
  },
];

// ========== RADIO EXAMPLES ==========
export const radioExamples: ComponentExample[] = [
  {
    title: "Basic Radio Group",
    description: "Radio buttons for single selection.",
    preview: (
      <GlassRadioGroup defaultValue="option-1">
        <div className="flex items-center space-x-2">
          <GlassRadioGroupItem value="option-1" id="option-1" />
          <Label htmlFor="option-1" className="text-white/80">
            Option 1
          </Label>
        </div>
        <div className="flex items-center space-x-2">
          <GlassRadioGroupItem value="option-2" id="option-2" />
          <Label htmlFor="option-2" className="text-white/80">
            Option 2
          </Label>
        </div>
        <div className="flex items-center space-x-2">
          <GlassRadioGroupItem value="option-3" id="option-3" />
          <Label htmlFor="option-3" className="text-white/80">
            Option 3
          </Label>
        </div>
      </GlassRadioGroup>
    ),
    code: `<GlassRadioGroup defaultValue="option-1">
  <div className="flex items-center space-x-2">
    <GlassRadioGroupItem value="option-1" id="option-1" />
    <Label htmlFor="option-1">Option 1</Label>
  </div>
  <div className="flex items-center space-x-2">
    <GlassRadioGroupItem value="option-2" id="option-2" />
    <Label htmlFor="option-2">Option 2</Label>
  </div>
</GlassRadioGroup>`,
  },
  {
    title: "Horizontal Layout",
    description: "Radio group displayed horizontally.",
    preview: (
      <GlassRadioGroup defaultValue="sm" className="flex gap-4">
        <div className="flex items-center space-x-2">
          <GlassRadioGroupItem value="sm" id="sm" />
          <Label htmlFor="sm" className="text-white/80">
            Small
          </Label>
        </div>
        <div className="flex items-center space-x-2">
          <GlassRadioGroupItem value="md" id="md" />
          <Label htmlFor="md" className="text-white/80">
            Medium
          </Label>
        </div>
        <div className="flex items-center space-x-2">
          <GlassRadioGroupItem value="lg" id="lg" />
          <Label htmlFor="lg" className="text-white/80">
            Large
          </Label>
        </div>
      </GlassRadioGroup>
    ),
    code: `<GlassRadioGroup defaultValue="sm" className="flex gap-4">
  <div className="flex items-center space-x-2">
    <GlassRadioGroupItem value="sm" id="sm" />
    <Label htmlFor="sm">Small</Label>
  </div>
  ...
</GlassRadioGroup>`,
  },
];
