export const getTweetData = async (id: string) => {
  const queryParams = new URLSearchParams({
    id,
    expansions:
      'author_id,attachments.media_keys,referenced_tweets.id,referenced_tweets.id.author_id',
    'tweet.fields':
      'attachments,author_id,public_metrics,created_at,id,in_reply_to_user_id,referenced_tweets,text',
    'user.fields': 'id,name,profile_image_url,protected,url,username,verified',
    'media.fields':
      'duration_ms,height,media_key,preview_image_url,type,url,width,public_metrics'
  });

  const response = await fetch(
    `https://api.twitter.com/2/tweets?${queryParams}`,
    {
      headers: {
        Authorization: `Bearer ${process.env.TWITTER_API_TOKEN}`
      }
    }
  );

  const tweet = await response.json();
  console.log('tweet is', tweet);
};

//   const getAuthorInfo = (author_id: any) => {
//     return tweets.includes.users.find(
//       (user: { id: any }) => user.id === author_id
//     );
//   };

//   const getReferencedTweets = (mainTweet: { referenced_tweets: any[] }) => {
//     return (
//       mainTweet?.referenced_tweets?.map(
//         (referencedTweet: { id: any; type: any }) => {
//           const fullReferencedTweet = tweets.includes.tweets.find(
//             (tweet: { id: any }) => tweet.id === referencedTweet.id
//           );

//           return {
//             type: referencedTweet.type,
//             author: getAuthorInfo(fullReferencedTweet.author_id),
//             ...fullReferencedTweet
//           };
//         }
//       ) || []
//     );
//   };

//   return (
//     tweets.data.reduce(
//       (
//         allTweets: any,
//         tweet: { attachments: { media_keys: any[] }; author_id: any }
//       ) => {
//         const tweetWithAuthor = {
//           ...tweet,
//           media:
//             tweet?.attachments?.media_keys.map((key: any) =>
//               tweets.includes.media.find(
//                 (media: { media_key: any }) => media.media_key === key
//               )
//             ) || [],
//           referenced_tweets: getReferencedTweets(tweet),
//           author: getAuthorInfo(tweet.author_id)
//         };

//         return [tweetWithAuthor, ...allTweets];
//       },
//       []
//     ) || [] // If the Twitter API key isn't set, don't break the build
//   );
// };

// export const getTweetCount = async () => {
//   const response = await fetch(
//     `https://api.twitter.com/2/users/by/username/leeerob?user.fields=public_metrics`,
//     {
//       headers: {
//         Authorization: `Bearer ${process.env.TWITTER_API_TOKEN}`
//       }
//     }
//   );

//   const { data } = await response.json();
//   return Number(data.public_metrics.tweet_count);
// };
