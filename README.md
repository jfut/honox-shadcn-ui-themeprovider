# HonoX + shadcn/ui + ThemeProvider

> [!WARNING]  
> This is an example of ThemeProvider. While the Light and Dark buttons work correctly when deployed to Cloudflare Pages, they do not function on the local development server started with `bun run dev`.

## Running locally

1. Install dependencies using bun:

```sh
bun install
```

2. Start the development server:

```sh
bun run dev
```

## Initial setup

1. Install bun using aqua

```bash
aqua i -l
```

2. Create a HonoX project:

```bash
$ bun run npm create hono@latest
Need to install the following packages:
create-hono@0.7.3
Ok to proceed? (y) y
create-hono version 0.7.3
? Target directory honox-shadcn-ui-themeprovider
? Which template do you want to use? x-basic
✔ Cloning the template
? Do you want to install project dependencies? yes
? Which package manager do you want to use? bun
✔ Installing project dependencies
🎉 Copied project files
Get started with: cd honox-shadcn-themeprovider
```

3. Add `components.json`
4. Install dependencies:

```bash
# react
bun add react react-dom react-day-picker @hono/react-renderer -E
bun add @types/react @types/react-dom -E -d

# shadcn/ui
bun add tailwindcss postcss autoprefixer -E -d
bun x shadcn-ui@latest add button
bun add class-variance-authority -E
```

## Thanks

- [yossydev/example-honox-shadcn-ui](https://github.com/yossydev/example-honox-shadcn-ui)

## License

MIT
