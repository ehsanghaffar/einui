import type { ReactNode } from "react";

export interface ComponentExample {
  title: string;
  description: string;
  preview: ReactNode;
  code: string;
}

export interface ComponentConfig {
  slug: string;
  title: string;
  description: string;
  registryName: string;
  category:
    | "components"
    | "forms"
    | "data-display"
    | "overlays"
    | "innovative"
    | "time"
    | "widgets"
    | "data";
  examples: ComponentExample[];
}
