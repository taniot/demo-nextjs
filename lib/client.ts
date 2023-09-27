const client = async (query: string) => {
  try {
    let endpoint;
    if (process.env.WP_DATI) {
      endpoint = process.env.WP_DATI;
    } else {
      throw new Error('WP_DATI environment variable is not set');
    }

    const res = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Basic ${btoa(
          `${process.env.WP_USER}:${process.env.WP_KEY}`
        )}`,
      },
      body: JSON.stringify({
        query,
      }),
    });

    const data = await res.json();

    return data;
  } catch (error) {
    console.log(error);
  }
};

export default client;
