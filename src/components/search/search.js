import React, { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";

const search = () => {
  const [search, setSearch] = useState(null);

  return (
    <AsyncPaginate
      placeholder="Search for a city.."
      debounceTimeout={600}
      value={search}
    />
  );
};

export default search;
