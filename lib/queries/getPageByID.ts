import { gql } from 'graphql-request';

const getPageByID = gql`
  query pageByID($id: ID!) {
    page(id: $id, idType: DATABASE_ID) {
      title
      content
      campiPagine {
        campoDiProva
      }
    }
  }
`;

export type PageByID = {
  page: {
    title: string;
    content: string;
    campiPagine: {
      campoDiProva: string;
    };
  };
};

export default getPageByID;
