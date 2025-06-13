import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState("");
  const [error, setError] = useState("");
  useEffect(() => {
    const controller=new AbortController()
    const signal=controller.signal
    setTimeout(() => {
      fetch(url,{signal})
        .then((response) => {
          console.log(response);
          if (!response.ok) {
            throw Error("Couldn't retrive data");
          }
          return response.json();
        })
        .then((data) => {
          setData(data);
        })
        .catch((error) => {
          console.log(error.message);
          setError(error.message);
        });
    }, 4000);

    return()=>{
     console.log("Unmounted")
     controller.abort()
    }
  }, []);

  return [data, error, setData];
};

export default useFetch;
