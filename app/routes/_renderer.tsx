import { reactRenderer } from "@hono/react-renderer";
import { useRequestContext } from "@hono/react-renderer";
import type { FC, PropsWithChildren } from "react";

import { cn } from "@/lib/utils";

import { ThemeProvider } from "@/islands/ThemeProvider";

const HasIslands: FC<PropsWithChildren> = ({ children }) => {
  const IMPORTING_ISLANDS_ID = "__importing_islands" as const;
  const c = useRequestContext();
  return <>{c.get(IMPORTING_ISLANDS_ID) ? children : <></>}</>;
};

export default reactRenderer(({ children, title }) => {
  return (
    <>
      {/* <!DOCTYPE html> */}
      <html lang="en" suppressHydrationWarning>
        <head>
          <meta charSet="UTF-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          {import.meta.env.PROD ? (
            <>
              <HasIslands>
                <script type="module" src="/static/client.js" />
              </HasIslands>
              <link href="/static/assets/tailwind.css" rel="stylesheet" />
            </>
          ) : (
            <>
              <script type="module" src="/app/client.ts" />
              <link href="/app/tailwind.css" rel="stylesheet" />
            </>
          )}
          {title ? <title>{title}</title> : ""}
        </head>
        <body
          className={cn("min-h-screen bg-background font-sans antialiased")}
        >
          <ThemeProvider defaultTheme="light" storageKey="hono-ui-theme">
            {children}
          </ThemeProvider>
        </body>
      </html>
    </>
  );
});
