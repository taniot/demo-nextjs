const getPageByURI = `
query pageByID($id: ID!){
  page(id: $id, idType: DATABASE_ID) {
    title
  }
}
`;

export default getPageByURI;
