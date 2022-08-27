[![Netlify Status](https://api.netlify.com/api/v1/badges/f021865d-6a7c-498c-bf6f-20e022bf1c2e/deploy-status)](https://app.netlify.com/sites/clerk-nextjs/deploys)

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) and clerk.dev

<a href="https://www.twitch.tv/videos/1573783720?filter=highlights&sort=time">
  <img src="james-perkins-clerk.png" />
</a>

## Getting Started

### Create a .env.local file

Copy the file `env.local_example` to `.env.local`. Go to clerk.dev and create an account. From there you can grab your key that is safe for the frontend and add that as the value for the `NEXT_PUBLIC_CLERK_FRONTEND_API` environment key. You will also need a `CLERK_API_KEY` which you can generate from your clerk.dev dashboard.

### Start the project locally

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/update-user](http://localhost:3000/api/update-user). This endpoint can be edited in `pages/api/update-user.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

Check out [clerk.dev](https://clerk.dev)

To learn more about Next.js, take a look at the following resources:

- [Next.js on Netlify](https://docs.netlify.com/integrations/frameworks/next-js/overview/)
- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!
