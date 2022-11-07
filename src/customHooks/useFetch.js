import { useState, useEffect } from "react";
import { client } from "../DB/client.js";
const useFetch = (query) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    (async function (query) {
      try {
        const { photos } = await client.photos.search({ query, per_page: 1 });
        console.log(photos[0].src.original);
        setData(photos[0].src.original);
        setLoading(false);
      } catch (error) {
        setData(null);
        setLoading(false);
        console.dir(error);
      }
    })(query);
  });
  return [loading, data];
};

export default useFetch;
