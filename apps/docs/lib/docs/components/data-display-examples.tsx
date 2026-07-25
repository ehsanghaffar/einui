import {
  GlassSkeleton,
  GlassCard,
  GlassCardHeader,
  GlassCardContent,
  GlassCardFooter,
  GlassTable,
  GlassTableHeader,
  GlassTableRow,
  GlassTableHead,
  GlassTableBody,
  GlassTableCell,
  GlassTableCaption,
  GlassTableFooter,
  GlassBadge,
  GlassScrollArea,
  GlassScrollBar,
  GlassSeparator,
} from "@einui/registry";
import { artists, mockUsers } from "@einui/constants";
import type { ComponentExample } from "./types";

// ========== SKELETON EXAMPLES ==========
export const skeletonExamples: ComponentExample[] = [
  {
    title: "Basic Skeletons",
    description: "Different skeleton shapes for various content types.",
    preview: (
      <div className="space-y-4 w-full max-w-md">
        <GlassSkeleton className="h-4 w-3/4" />
        <GlassSkeleton className="h-4 w-1/2" />
        <GlassSkeleton className="h-32 w-full" />
      </div>
    ),
    code: `<GlassSkeleton className="h-4 w-3/4" />
<GlassSkeleton className="h-4 w-1/2" />
<GlassSkeleton className="h-32 w-full" />`,
  },
  {
    title: "Card Skeleton",
    description: "Skeleton layout for loading cards.",
    preview: (
      <div className="w-full max-w-md">
        <GlassCard className="w-full">
          <GlassCardHeader className="space-y-2">
            <GlassSkeleton className="h-5 w-1/2" />
            <GlassSkeleton className="h-4 w-3/4" />
          </GlassCardHeader>
          <GlassCardContent className="space-y-2">
            <GlassSkeleton className="h-4 w-full" />
            <GlassSkeleton className="h-4 w-full" />
            <GlassSkeleton className="h-4 w-2/3" />
          </GlassCardContent>
          <GlassCardFooter>
            <GlassSkeleton className="h-10 w-24" />
          </GlassCardFooter>
        </GlassCard>
      </div>
    ),
    code: `<GlassCard className="w-full max-w-md">
  <GlassCardHeader className="space-y-2">
    <GlassSkeleton className="h-5 w-1/2" />
    <GlassSkeleton className="h-4 w-3/4" />
  </GlassCardHeader>
  <GlassCardContent className="space-y-2">
    <GlassSkeleton className="h-4 w-full" />
    <GlassSkeleton className="h-4 w-full" />
  </GlassCardContent>
</GlassCard>`,
  },
  {
    title: "Variant",
    description: "Skeleton with 'pulse' animation variant.",
    preview: (
      <div className="w-full max-w-md flex flex-col gap-4">
        <div className="flex items-center gap-4">
          <span className="text-white/60 text-sm w-20">Default</span>
          <GlassSkeleton variant="default" className="h-12 flex-1" />
        </div>
        <div className="flex items-center gap-4">
          <span className="text-white/60 text-sm w-20">Circular</span>
          <GlassSkeleton variant="circular" className="h-12 w-12" />
        </div>
        <div className="flex items-center gap-4">
          <span className="text-white/60 text-sm w-20">Text</span>
          <GlassSkeleton variant="text" className="flex-1" />
        </div>
        <div className="flex items-center gap-4">
          <span className="text-white/60 text-sm w-20">Card</span>
          <GlassSkeleton variant="card" className="flex-1 h-32" />
        </div>
      </div>
    ),
    code: `<div className="flex flex-col gap-4">
  <GlassSkeleton variant="default" className="h-12 w-full" />
  <GlassSkeleton variant="circular" className="h-12 w-12" />
  <GlassSkeleton variant="text" />
  <GlassSkeleton variant="card" className="w-full" />
</div>`,
  },
];

// ========== TABLE EXAMPLES ==========
export const tableExamples: ComponentExample[] = [
  {
    title: "Basic Table",
    description: "Simple data table with headers and rows.",
    preview: (
      <GlassTable>
        <GlassTableHeader>
          <GlassTableRow>
            <GlassTableHead className="w-25">Invoice</GlassTableHead>
            <GlassTableHead>Status</GlassTableHead>
            <GlassTableHead>Method</GlassTableHead>
            <GlassTableHead className="text-right">Amount</GlassTableHead>
          </GlassTableRow>
        </GlassTableHeader>
        <GlassTableBody>
          <GlassTableRow>
            <GlassTableCell className="font-medium">INV001</GlassTableCell>
            <GlassTableCell>Paid</GlassTableCell>
            <GlassTableCell>Credit Card</GlassTableCell>
            <GlassTableCell className="text-right">$250.00</GlassTableCell>
          </GlassTableRow>
          <GlassTableRow>
            <GlassTableCell className="font-medium">INV002</GlassTableCell>
            <GlassTableCell>Pending</GlassTableCell>
            <GlassTableCell>PayPal</GlassTableCell>
            <GlassTableCell className="text-right">$150.00</GlassTableCell>
          </GlassTableRow>
        </GlassTableBody>
      </GlassTable>
    ),
    code: `<GlassTable>
  <GlassTableHeader>
    <GlassTableRow>
      <GlassTableHead>Invoice</GlassTableHead>
      <GlassTableHead>Status</GlassTableHead>
      <GlassTableHead className="text-right">Amount</GlassTableHead>
    </GlassTableRow>
  </GlassTableHeader>
  <GlassTableBody>
    <GlassTableRow>
      <GlassTableCell>INV001</GlassTableCell>
      <GlassTableCell>Paid</GlassTableCell>
      <GlassTableCell className="text-right">$250.00</GlassTableCell>
    </GlassTableRow>
  </GlassTableBody>
</GlassTable>`,
  },
  {
    title: "Table with Footer",
    description: "Table including a footer for totals or summaries.",
    preview: (
      <GlassTable>
        <GlassTableCaption>A list of your recent invoices.</GlassTableCaption>
        <GlassTableHeader>
          <GlassTableRow>
            <GlassTableHead>Invoice</GlassTableHead>
            <GlassTableHead>Status</GlassTableHead>
            <GlassTableHead className="text-right">Amount</GlassTableHead>
          </GlassTableRow>
        </GlassTableHeader>
        <GlassTableBody>
          <GlassTableRow>
            <GlassTableCell>INV001</GlassTableCell>
            <GlassTableCell>Paid</GlassTableCell>
            <GlassTableCell className="text-right">$250.00</GlassTableCell>
          </GlassTableRow>
          <GlassTableRow>
            <GlassTableCell>INV002</GlassTableCell>
            <GlassTableCell>Paid</GlassTableCell>
            <GlassTableCell className="text-right">$150.00</GlassTableCell>
          </GlassTableRow>
        </GlassTableBody>
        <GlassTableFooter>
          <GlassTableRow>
            <GlassTableCell colSpan={2}>Total</GlassTableCell>
            <GlassTableCell className="text-right">$400.00</GlassTableCell>
          </GlassTableRow>
        </GlassTableFooter>
      </GlassTable>
    ),
    code: `<GlassTable>
  <GlassTableCaption>A list of your recent invoices.</GlassTableCaption>
  <GlassTableHeader>...</GlassTableHeader>
  <GlassTableBody>...</GlassTableBody>
  <GlassTableFooter>
    <GlassTableRow>
      <GlassTableCell colSpan={2}>Total</GlassTableCell>
      <GlassTableCell className="text-right">$400.00</GlassTableCell>
    </GlassTableRow>
  </GlassTableFooter>
</GlassTable>`,
  },
  {
    title: "Table with Buttons",
    description: "Table with buttons for actions.",
    preview: (
      <GlassTable>
        <GlassTableHeader>
          <GlassTableRow>
            <GlassTableHead>Name</GlassTableHead>
            <GlassTableHead>Email</GlassTableHead>
            <GlassTableHead>Role</GlassTableHead>
            <GlassTableHead>Status</GlassTableHead>
          </GlassTableRow>
        </GlassTableHeader>
        <GlassTableBody>
          {mockUsers.map((user) => (
            <GlassTableRow key={user.email}>
              <GlassTableCell className="font-medium">{user.name}</GlassTableCell>
              <GlassTableCell>{user.email}</GlassTableCell>
              <GlassTableCell>
                <GlassBadge variant="outline">{user.role}</GlassBadge>
              </GlassTableCell>
              <GlassTableCell>
                <GlassBadge variant={user.status === "Active" ? "primary" : "default"}>
                  {user.status}
                </GlassBadge>
              </GlassTableCell>
            </GlassTableRow>
          ))}
        </GlassTableBody>
      </GlassTable>
    ),
    code: ``,
  },
];

// ========== SCROLL AREA EXAMPLES ==========
export const scrollAreaExamples: ComponentExample[] = [
  {
    title: "Vertical Scroll",
    description: "Scrollable area for long content lists.",
    preview: (
      <GlassScrollArea className="h-48 w-48 rounded-xl border border-white/10">
        <div className="p-4">
          <h4 className="mb-4 text-sm font-medium text-white leading-none">Tags</h4>
          {Array.from({ length: 15 }).map((_, i) => (
            <div
              key={i}
              className="text-sm text-white/70 py-2 border-b border-white/5 last:border-0"
            >
              Tag {i + 1}
            </div>
          ))}
        </div>
      </GlassScrollArea>
    ),
    code: `<GlassScrollArea className="h-48 w-48 rounded-xl border border-white/10">
  <div className="p-4">
    <h4 className="mb-4 text-sm font-medium leading-none">Tags</h4>
    {tags.map((tag) => (
      <div key={tag} className="text-sm py-2">{tag}</div>
    ))}
  </div>
</GlassScrollArea>`,
  },
  {
    title: "Horizontal Scroll",
    description: "Horizontally scrollable content.",
    preview: (
      <GlassScrollArea className="w-96 whitespace-nowrap rounded-xl border border-white/10">
        <div className="flex gap-4 p-4">
          {Array.from({ length: 10 }).map((_, i) => (
            <div
              key={i}
              className="shrink-0 w-32 h-32 rounded-lg bg-white/5 flex items-center justify-center text-white/70"
            >
              Item {i + 1}
            </div>
          ))}
        </div>
        <GlassScrollBar orientation="horizontal" />
      </GlassScrollArea>
    ),
    code: `<GlassScrollArea className="w-96 whitespace-nowrap rounded-xl">
  <div className="flex gap-4 p-4">
    {items.map((item) => (
      <div key={item} className="shrink-0 w-32 h-32">
        {item}
      </div>
    ))}
  </div>
  <GlassScrollBar orientation="horizontal" />
</GlassScrollArea>`,
  },
  {
    title: "Content List",
    description: "Scrollable area with a list of artists.",
    preview: (
      <GlassScrollArea className="h-64 w-full max-w-sm rounded-xl border border-white/10 bg-white/5">
        <div className="p-4">
          {artists.map((artist, index) => (
            <div key={artist.handle}>
              <div className="flex items-center gap-3 py-3">
                <div className="h-10 w-10 rounded-full bg-linear-to-br from-cyan-500/40 to-blue-500/40 shrink-0" />
                <div>
                  <p className="text-sm font-medium text-white">{artist.name}</p>
                  <p className="text-xs text-white/60">{artist.handle}</p>
                </div>
              </div>
              {index < artists.length - 1 && <GlassSeparator />}
            </div>
          ))}
        </div>
      </GlassScrollArea>
    ),
    code: `<GlassScrollArea className="h-64 w-full max-w-sm rounded-xl border border-white/10 bg-white/5">
  <div className="p-4">
    {artists.map((artist, index) => (
      <div key={artist.handle}>
        <div className="flex items-center gap-3 py-3">
          <div className="h-10 w-10 rounded-full bg-linear-to-br from-cyan-500/40 to-blue-500/40 shrink-0" />
          <div>
            <p className="text-sm font-medium text-white">{artist.name}</p>
            <p className="text-xs text-white/60">{artist.handle}</p>
          </div>
        </div>
        {index < artists.length - 1 && <GlassSeparator />}
      </div>
    ))}
  </div>
</GlassScrollArea>`,
  },
];
