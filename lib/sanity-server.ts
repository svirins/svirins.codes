/**
 * Server-side Sanity utilities. By having these in a separate file from the
 * utilities we use on the client side, we are able to tree-shake (remove)
 * code that is not used on the client side.
 */
// TODO: Change Sanity API version to 2022
import { createClient } from 'next-sanity';
import { cache } from 'react';

export const sanityClient = createClient({
  dataset: 'production',
  projectId: 'q60wk43i',
  useCdn: true,
  apiVersion: '2021-10-21'
});

export const clientFetch = cache(sanityClient.fetch.bind(sanityClient));
