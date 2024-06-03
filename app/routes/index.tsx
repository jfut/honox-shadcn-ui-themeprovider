import { createRoute } from 'honox/factory'

import BaseLayout from "@/islands/BaseLayout";

export default createRoute((c) => {
  return c.render(
    <BaseLayout>
      <div className="container flex max-w-7xl flex-col gap-10 py-12 sm:gap-y-16">

        <h1 className="font-heading mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">
          HonoX + shadcn/ui + ThemeProvider
        </h1>

        <p>This is an example of ThemeProvider.
          While the Light and Dark buttons work correctly when deployed to Cloudflare Pages,
          they do not function on the local development server started with `bun run dev`.</p>
      </div>
    </BaseLayout>,
    { title: "HonoX + shadcn/ui + ThemeProvider" },
  )
})
