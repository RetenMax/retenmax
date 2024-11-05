// prismic.js
import * as prismic from '@prismicio/client';
const endpoint = prismic.getRepositoryEndpoint('retenmax'); // Apenas o nome do repositório, sem URL completa
const client = prismic.createClient(endpoint)
 {/*, {
  accessToken: process.env.PRISMIC_ACCESS_TOKEN,
} */}
export default client;
