import { useState, useEffect } from "react";
import yelp from "../API/yelp";

export default () => {
  const [results, setResults] = useState([]);
  const [errorMsg, setErrorMsg] = useState("");

  const searchAPI = async (searchTerm) => {
    try {
      const response = await yelp.get("/search", {
        params: {
          limit: 50,
          term: searchTerm,
          location: "sao paulo",
        },
      });
      setResults(response.data.businesses);
    } catch (err) {
      setErrorMsg("Something went wrong");
    }
  };

  useEffect(() => {
    searchAPI("pasta");
  }, []);

  return [results, searchAPI, errorMsg];
};
