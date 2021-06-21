import React from "react";

export const Search = () => {
  return (
    <div class="input-group-search">
      <input
        type="search"
        className="form-control"
        placeholder="Search by ID, Name, Status"
      />
      <img className="search" alt="" src="/images/icon/search.svg" />
    </div>
  );
};
