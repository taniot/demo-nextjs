const client = async (query: string) => {
  let endpoint;

  try {
    if (process.env.WP_DATI) {
      endpoint = process.env.WP_DATI;
    } else {
      throw new Error('WP DATI non trovata');
    }

    const result = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        authentication: `bearer: XJIN 5DXh 4FkR K8ZP qHpY 2uT3`,
      },
      body: JSON.stringify({ query }),
    });

    const data = await result.json();
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export default client;
