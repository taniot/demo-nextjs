const getPageByURI = `
  query NodeByUri($uri: String!) {
    nodeByUri(uri: $uri) {
      __typename
      ...Page
    }
  }
  fragment Page on Page {
    title
    content
  }
`;

export default getPageByURI;
