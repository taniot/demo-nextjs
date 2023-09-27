const getPageByID = `
query pageByID($id: ID!){
  page(id: $id, idType: DATABASE_ID) {
    title
    content
     campiPagine {
      campoDiProva
    }
  }
}
`;

export default getPageByID;
