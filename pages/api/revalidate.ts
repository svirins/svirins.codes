import { NextResponse } from 'next/server';
import { parseBody } from 'next-sanity/webhook';
import { NextApiRequest, NextApiResponse } from 'next';
export { config } from 'next-sanity/webhook';

export const runtime = 'edge';

async function handler(
  request: NextApiRequest,
  response: NextApiResponse
): Promise<NextResponse> {
  const data = await parseBody(request, process.env.SANITY_REVALIDATE_SECRET!);
  const { isValidSignature, body } = data as any;
  if (!isValidSignature) {
    throw new Error('revalidation error!');
  }
  const staleRoute = `/${body.slug.current}`;
  await response.revalidate(staleRoute);

  return NextResponse.json({ message: `Updated route: ${staleRoute}` });
}

export default handler;
