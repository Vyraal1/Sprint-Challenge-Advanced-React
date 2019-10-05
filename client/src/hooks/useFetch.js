//this was a trap, rather not spend time researching on a new API during timed exam
import React, { useState, useEffect } from "react";
import axios from "axios";

const useFetch = url => {
  const [response, setResponse] = useState({});
  const [error, setError] = useState(null);
  useEffect(
    axios
      .get(url)
      .then(res => setResponse(res))
      .catch(err => console.log("error getting data", err)),
    []
  );

  return response;
};

export default useFetch;
