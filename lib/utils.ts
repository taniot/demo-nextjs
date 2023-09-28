import { Slug } from './types';

export const createURI = (slug: Slug) => {
  return '/' + slug.join('/') + '/';
};

/*
['pagina', 'figlia'] => /pagina/figlia/
*/
