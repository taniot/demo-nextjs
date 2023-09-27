const getAllPages = `
  query getPages {
    pages(where: { language: ALL }, first: 100) {
      nodes {
        uri
        language {
          slug
        }
      }
    }
  }
`;

export default getAllPages;
