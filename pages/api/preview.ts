import { NextApiRequest, NextApiResponse } from 'next';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  res.setPreviewData({});
  let slug = '';

  switch (req.query.type) {
    case 'post':
      slug = `/blog/${req.query.slug}`;
      break;
    case 'snippet':
      break;
    default:
      slug = `/${req.query.slug}`;
  }

  res.writeHead(307, { Location: slug });
  res.end();
};

export default handler;
