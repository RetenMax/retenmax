// prismic.js
import * as prismic from '@prismicio/client';
const endpoint = prismic.getRepositoryEndpoint('retenmax'); 
const client = prismic.createClient(endpoint, {
  fetchOptions: () => ({
    cache: 'no-store', 
  }),
  accessToken: process.env.PRISMIC_ACCESS_TOKEN
});
export default client;
