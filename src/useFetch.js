import React, { useState } from 'react';

const useFetch = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(null);

  async function request(url, options) {
    let response;
    let json;
    try {
      setError(null);
      setLoading(true);
      response = await fetch(url, options);
      json = await response.json();
      setLoading(false);
    } catch (erro) {
      json = null;
      setError('erro');
    } finally {
      setData(json);
      setLoading(false);
      return { response, json };
    }
  }

  return { data, error, loading, request };
};

export default useFetch;
