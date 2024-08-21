import React from "react";

//hooks

import { useFetchDocuments } from "../../hooks/useFetchDocuments";
import { useQuery } from "../../hooks/useQuery";



const Search = () => {
  const query = useQuery()
  const search = query.get("q");
  return (
      <div>
      <h2>Search</h2>
      <p>{search ? search : "No search query provided"}</p>
    </div>
  );
};

export default Search;