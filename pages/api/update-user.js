// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { requireAuth } from '@clerk/nextjs/api';

export default requireAuth(async (req, res) => {
  const headers = {
    Authorization: `Bearer ${process.env.CLERK_API_KEY}`,
    'Content-Type': 'application/json',
  };

  const {
    auth: { userId },
  } = req;

  // Update some public meta data for the user
  const response = await fetch(
    `https://api.clerk.dev/v1/users/${userId}/metadata`,
    {
      method: 'PATCH',
      headers,
      body: JSON.stringify({
        public_metadata: {
          free: 'style',
        },
      }),
    },
  );

  const updatedUserResponse = await fetch(
    `https://api.clerk.dev/v1/users/${userId}`,
    {
      headers,
    },
  );

  const { first_name, last_name, public_metadata } =
    await updatedUserResponse.json();

  res.status(200).json({ first_name, last_name, public_metadata });
});
