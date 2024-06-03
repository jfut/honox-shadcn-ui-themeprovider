import { Button } from "@/components/ui/button";

import { useTheme } from "@/islands/ThemeProvider";
import type { Theme } from "@/islands/ThemeProvider";

export function ThemeProviderToggle() {
  const { setTheme } = useTheme();

  const handleThemeToggle = (theme: Theme) => {
    // FIXME:  While the Light and Dark buttons work correctly when deployed to Cloudflare Pages,
    // they do not function on the local development server started with `bun run dev`.
    setTheme(theme);
    console.log("handleThemeToggle: click", theme)

    // test: The following works.
    // const root = window.document.documentElement;
    // root.classList.remove("light", "dark");
    // root.classList.add(theme);
    // localStorage.setItem("test", theme);
  };

  return (
    <>
      <Button variant="outline" onClick={() => handleThemeToggle("light")}>
        Light
      </Button>
      <Button variant="default" onClick={() => handleThemeToggle("dark")}>
        Dark
      </Button>
    </>
  );
}
