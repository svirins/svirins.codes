/**
 * todo: add dedicated tag pages for each tag
 **/

import { writeFile } from 'fs/promises';
import { getPostSlugs } from 'lib/sanity-api';

const PAGE = 'https://svirins.codes';

async function createSitemap(routes: string[]) {
  const sitemap = `
  <?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${routes
        .map((route) => {
          return `
            <url>
                <loc>${`${PAGE}${route}`}</loc>
            </url>
          `;
        })
        .join('')}
  </urlset>
  `;
  return sitemap;
}

(async () => {
  const paths = await getPostSlugs();
  const allPaths = [
    ...paths.map((slug) => `blog/${slug}`),
    ...['', 'blog', 'snippets']
  ];

  console.log(`create sitemap for ${allPaths.length} paths`);
  const sitemap = await createSitemap(allPaths);

  await writeFile('./public/sitemap.xml', sitemap, { encoding: 'utf-8' });
})();
