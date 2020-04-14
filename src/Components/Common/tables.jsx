import React from "react";
import TableHeader from "./tableHeader";
import TableBody from "./tableBody";
import { Table } from "semantic-ui-react";

const Tables = ({
  columns,
  sortColumn,
  onSort,
  data,
  map1,
  map2,
  currentPage,
}) => {
  return (
    <Table basic="very" style={{ margin: 25 }}>
      <TableHeader columns={columns} sortColumn={sortColumn} onSort={onSort} />
      <TableBody
        columns={columns}
        data={data}
        map1={map1}
        map2={map2}
        currentPage={currentPage}
      />
    </Table>
  );
};

export default Tables;
