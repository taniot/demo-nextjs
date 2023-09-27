import { GraphQLClient } from 'graphql-request';

let endpoint;
if (process.env.WP_DATI) {
  endpoint = process.env.WP_DATI;
} else {
  throw new Error('WP_DATI environment variable is not set');
}

let user;
if (process.env.WP_USER) {
  user = process.env.WP_USER;
} else {
  throw new Error('WP_DATI environment variable is not set');
}

let key;
if (process.env.WP_KEY) {
  key = process.env.WP_KEY;
} else {
  throw new Error('WP_DATI environment variable is not set');
}

let headers = {
  authorization: `Basic ${btoa(`${user}:${key}`)}`,
};

const client = new GraphQLClient(endpoint, { headers }) || null;

export default client;
