import React from "react";
import { Button } from "react-bootstrap";
import { Search } from "../components/inputs/Search";
import { Table } from "../components/Table";

export const Itr = () => {
  return (
    <div className="mx-60">
      <div className="filter-top-container mt-38 d-flex justify-content-end">
        <Button variant="primary">Add Filiing</Button>
        <Search />
      </div>
      <div className="mt-18">
        <Table />
      </div>
    </div>
  );
};
