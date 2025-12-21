import {
  BookOpen,
  Download,
  Palette,
  Moon,
  Terminal,
  User,
  Info,
  LayoutGrid,
  Square,
  MessageSquare,
  TextCursorInput,
  CheckCircle,
  Sliders,
  ToggleLeft,
  Layers,
  CircleDot,
  Command,
  Dock,
  Gauge,
  MousePointer,
  Bell,
  Droplets,
  Clock,
  Calendar,
  TrendingUp,
  Cloud,
  Package,
  PanelLeft,
  Sparkles,
} from "lucide-react";

interface NavItem {
  title: string;
  href: string;
  icon?: React.ReactNode;
  isNew?: boolean;
}

interface NavSection {
  title: string;
  items: NavItem[];
}

export const navigation: NavSection[] = [
  {
    title: "Get Started",
    items: [
      { title: "Introduction", href: "/docs", icon: <BookOpen className="size-4" /> },
      { title: "Installation", href: "/docs/installation", icon: <Download className="size-4" /> },
      { title: "Theming", href: "/docs/theming", icon: <Palette className="size-4" /> },
      { title: "Dark Mode", href: "/docs/dark-mode", icon: <Moon className="size-4" /> },
      { title: "CLI", href: "/docs/cli", icon: <Terminal className="size-4" /> },
    ],
  },
  {
    title: "Components",
    items: [
      { title: "Avatar", href: "/docs/components/glass-avatar", icon: <User className="size-4" /> },
      { title: "Badge", href: "/docs/components/glass-badge", icon: <Info className="size-4" /> },
      {
        title: "Buttons",
        href: "/docs/components/glass-button",
        icon: <LayoutGrid className="size-4" />,
      },
      { title: "Cards", href: "/docs/components/glass-card", icon: <Square className="size-4" /> },
      {
        title: "Dialogs",
        href: "/docs/components/glass-dialog",
        icon: <MessageSquare className="size-4" />,
      },
      {
        title: "Inputs",
        href: "/docs/components/glass-input",
        icon: <TextCursorInput className="size-4" />,
      },
      {
        title: "Progress",
        href: "/docs/components/glass-progress",
        icon: <CheckCircle className="size-4" />,
      },
      {
        title: "Slider",
        href: "/docs/components/glass-slider",
        icon: <Sliders className="size-4" />,
      },
      {
        title: "Switch",
        href: "/docs/components/glass-switch",
        icon: <ToggleLeft className="size-4" />,
      },
      { title: "Tabs", href: "/docs/components/glass-tabs", icon: <Layers className="size-4" /> },
      {
        title: "Tooltip",
        href: "/docs/components/glass-tooltip",
        icon: <CircleDot className="size-4" />,
      },
    ],
  },
  {
    title: "Innovative",
    items: [
      {
        title: "Command Palette",
        href: "/docs/components/glass-command-palette",
        icon: <Command className="size-4" />,
        isNew: true,
      },
      {
        title: "Dock",
        href: "/docs/components/glass-dock",
        icon: <Dock className="size-4" />,
        isNew: true,
      },
      {
        title: "Gauge",
        href: "/docs/components/glass-gauge",
        icon: <Gauge className="size-4" />,
        isNew: true,
      },
      {
        title: "Morph Card",
        href: "/docs/components/glass-morph-card",
        icon: <MousePointer className="size-4" />,
        isNew: true,
      },
      {
        title: "Notifications",
        href: "/docs/components/glass-notification",
        icon: <Bell className="size-4" />,
        isNew: true,
      },

      {
        title: "Ripple",
        href: "/docs/components/glass-ripple",
        icon: <Droplets className="size-4" />,
        isNew: true,
      },
      {
        title: "Timeline",
        href: "/docs/components/glass-timeline",
        icon: <Clock className="size-4" />,
        isNew: true,
      },

      // { title: "Spotlight", href: "/docs/components/spotlight", icon: <Sparkles className="size-4" />, isNew: true },
    ],
  },
  {
    title: "Widgets",
    items: [
      {
        title: "Calendar",
        href: "/docs/components/calendar-widget",
        icon: <Calendar className="size-4" />,
        isNew: true,
      },
      {
        title: "Clock",
        href: "/docs/components/clock-widget",
        icon: <Clock className="size-4" />,
        isNew: true,
      },
      {
        title: "Stats",
        href: "/docs/components/stats-widget",
        icon: <TrendingUp className="size-4" />,
        isNew: true,
      },
      {
        title: "Stock",
        href: "/docs/components/stock-widget",
        icon: <Gauge className="size-4" />,
        isNew: true,
      },
      {
        title: "Weather",
        href: "/docs/components/weather-widget",
        icon: <Cloud className="size-4" />,
        isNew: true,
      },
    ],
  },
  {
    title: "Registry",
    items: [
      { title: "Overview", href: "/docs/registry", icon: <Package className="size-4" /> },
      // { title: "registry.json", href: "/docs/registry/schema", icon: <FileJson className="size-4" /> },
    ],
  },
  {
    title: "Blocks",
    items: [
      { title: "Admin Panel", href: "/docs/blocks/admin", icon: <PanelLeft className="size-4" /> },
    ],
  },
];


export const headerNavItems = [
  { href: "/docs", label: "Docs", icon: BookOpen },
  { href: "/docs/components/glass-avatar", label: "Components", icon: LayoutGrid },
  { href: "/docs/components/weather-widget", label: "Widgets", icon: Sparkles, isNew: true },
];