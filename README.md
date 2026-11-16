# sample-npm-package

Minimal sample package to test installing and running from GitHub with `pnpm` and `npx`.

## Try with `npx`

```bash
npx github:BizShuk/sample_npm_package
npx github:BizShuk/sample_npm_package Alice
```

## Install with `pnpm`

```bash
pnpm add github:BizShuk/sample_npm_package
pnpm exec sample-npm-package Alice
```

Or globally:

```bash
pnpm add -g github:BizShuk/sample_npm_package
sample-npm-package Alice
```
