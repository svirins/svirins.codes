import type { NextApiRequest, NextApiResponse } from 'next';
import { parseBody } from 'next-sanity/webhook';
import { SanityDocument } from '@sanity/types';
// Export the config from next-sanity to enable validating the request body signature properly
export { config } from 'next-sanity/webhook';

export default async function revalidate(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const data = await parseBody(req, process.env.SANITY_REVALIDATE_SECRET!);
    const { isValidSignature, body } = data as any;

    if (!isValidSignature) {
      const message = 'Invalid signature';
      console.warn(message);
      res.status(401).json({ message });
      return;
    }

    const staleRoute = `/${body.slug.current}`;

    await res.revalidate(staleRoute);
    const message = `Updated route: ${staleRoute}`;
    console.log(message);
    return res.status(200).json({ message });
  } catch (err) {
    const e = new Error('Revalidation failed');
    console.error(err);
    return res.status(500).json({ message: e.message });
  }
}
