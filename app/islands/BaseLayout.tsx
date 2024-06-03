import type * as React from "react";

import { ThemeProviderToggle } from "@/islands/ThemeProviderToggle";

interface BaseLayoutProps {
  children: React.ReactNode;
}

export default function BaseLayout({ children }: BaseLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <main>{children}</main>
      <div className="mx-auto max-w-sm">
        <ThemeProviderToggle />
      </div>
    </div>
  );
}
