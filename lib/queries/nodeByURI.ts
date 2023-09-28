import client from '../client';

export const queryNodeByURI = `
query NodeByUri($uri: String!) {
  nodeByUri(uri: $uri) {
    __typename
    ...Page
    ...Vino
    ...Evento
  }
}

fragment Page on Page {
  title
  content
}
fragment Vino on Vini {
  title
  content
}
fragment Evento on Evento {
  title
  content
}

`;

export const getNodeByURI = async (uri: string) => {
  const query = queryNodeByURI;
  const variables = {
    uri,
  };

  const { nodeByUri } = await client.request(query, variables);

  if (!nodeByUri) return null;

  return {
    type: nodeByUri?.__typename.toLowerCase() ?? null,
    title: nodeByUri?.title,
    content: nodeByUri?.content,
    prova: 'ciao',
  };
};
