import { compareDesc, parseISO } from 'date-fns';
import { Feed } from 'feed';
import { writeFile } from 'fs/promises';
import { getPosts } from 'lib/sanity-api';
import { urlForImage } from 'lib/sanity-client';

async function createFeed() {
  const feed = new Feed({
    title: 'Blog | Dzmitry Svirin',
    description: 'Posts about code, dev life and other things',
    id: 'https://svirins.codes',
    link: 'https://svirins.codes',
    language: 'en',
    favicon: 'https://svirins.codes/favicon.ico',
    copyright: 'All rights reserved 2023, Dzmitry Svirin',
    author: {
      name: 'Dzmitry Svirin',
      email: 'svirins@gmail.com',
      link: 'https://svirins.codes'
    }
  });

  const allPosts = await getPosts();

  allPosts
    .sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)))
    .forEach((post) => {
      feed.addItem({
        id: post.slug,
        link: `https://svirins.codes/blog/${post.slug}`,
        title: post.title,
        description: post.excerpt,
        date: setHours(parseISO(post.date), 13),
        category: post.tags.map((name) => ({ name })),
        image: urlForImage(post.coverImage).url,
        author: [
          {
            name: 'Dzmitry Svirin',
            email: 'svirins@gmail.com',
            link: 'https://svirins.codes'
          }
        ]
      });
    });
  return feed.rss2();
}
(async () => {
  console.log(`create feed for ${allPosts.length} paths`);
  const feed = await createFeed();

  await writeFile('./public/rss.xml', feed, { encoding: 'utf-8' });
})();
