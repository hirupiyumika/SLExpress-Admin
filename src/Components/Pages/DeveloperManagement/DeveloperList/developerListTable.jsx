import React, { Component } from "react";
import { Buttons } from "../../../Common/buttons";
import Tables from "../../../Common/tables";

class DeveloperListTable extends Component {
  columns = [
    { path: "username", label: "Username" },
    { path: "email", label: "E-mail" },
    { path: "phone", label: "Phone" },
    {
      key: "details",
      content: developer => (
        <Buttons
          onSubmit={() => this.props.onDelete(developer)}
          name="Details"
          color="#40a3dc"
        />
      )
    },
    {
      key: "button",
      content: developer => (
        <Buttons
          onSubmit={() => this.props.onDelete(developer)}
          name="Delete"
          color="#e60000"
        />
      )
    }
  ];
  render() {
    const { developers, onSort, sortColumn, currentPage } = this.props;
    console.log("developers", developers);
    return (
      <Tables
        columns={this.columns}
        data={developers}
        currentPage={currentPage}
        sortColumn={sortColumn}
        onSort={onSort}
      />
    );
  }
}

export default DeveloperListTable;
