# BSC Live Chat Marketing Website

Professional marketing website for **Business Solution Center (BSC Live Chat)**.

This is a separate Next.js project. It does not modify or depend on the existing `bsc-live` application.

## Run on Windows

Place this folder at `C:\Users\user\bsc-website`, then open PowerShell:

```powershell
cd C:\Users\user\bsc-website
npm install
npm run dev
```

Open `http://localhost:3000`.

## Production check

```powershell
npm run build
```

## Deploy as a separate Vercel project

Create a new GitHub repository for `bsc-website`, push this folder to it, then import that repository into Vercel as a new project. Keep the existing `bsc-live` repository and Vercel project unchanged.

### Contact and trial forms

The Contact and 15-Day Free Trial forms are connected to the Business Solution Center Formspree endpoint. Form submissions are delivered to `info@bsctelemarketing.com`. No Vercel environment variables are required.

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

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
