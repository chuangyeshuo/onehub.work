This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## SEO Optimization 📈

This project has been updated with custom SEO settings so that searching for terms like `onehub`, `onehub.work`, `远程`, `一人公司`, or `远程一人公司社区` will lead users to the live site at `https://chuangyeshuo.github.io/onehub.work`.

Key improvements include:

- Global metadata with `metadataBase`, enhanced description and keywords.
- Open Graph and Twitter card tags for rich sharing.
- A static `robots.txt` and `sitemap.xml` placed under `public/`.
- Structured data (JSON‑LD) injected via an `app/head.tsx` component.
- Canonical URL pointing to the GitHub Pages domain.

You can modify `app/layout.tsx` or `app/head.tsx` to adjust or extend SEO settings.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
