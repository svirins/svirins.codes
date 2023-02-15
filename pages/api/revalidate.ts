import type { NextApiRequest, NextApiResponse } from 'next';
import { parseBody } from 'next-sanity/webhook';

// Export the config from next-sanity to enable validating the request body signature properly
export { config } from 'next-sanity/webhook';

export default async function revalidate(
  req: NextApiRequest,
  res: NextApiResponse
) {
  console.log('request is', { req });
  try {
    const { isValidSignature, body } = await parseBody(
      req,
      process.env.SANITY_REVALIDATE_SECRET!
    );

    if (!isValidSignature) {
      const message = 'Invalid signature';
      console.warn(message);
      res.status(401).json({ message });
      return;
    }
    if (typeof body.slug.current === 'string') {
      const message = 'No valid slug in body';
      console.warn(message);
      res.status(401).json({ message });
      return;
    }

    await res.revalidate(staleRoute);
    const message = `Updated route: ${staleRoute}`;
    console.log(message);
    return res.status(200).json({ message });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: err.message });
  }
}
