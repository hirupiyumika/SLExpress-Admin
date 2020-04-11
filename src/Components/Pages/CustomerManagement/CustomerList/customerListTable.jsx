import React, { Component } from "react";
import { Buttons } from "../../../Common/buttons";
import Tables from "../../../Common/tables";

class CustomerListTable extends Component {
  columns = [
    { path: "username", label: "Username" },
    { path: "email", label: "E-mail" },
    { path: "phone", label: "Phone" },
    {
      key: "button",
      content: customer => (
        <Buttons
          onSubmit={() => this.props.onDetails(customer)}
          name="Details"
          color="#40a3dc"
        />
      )
    },

    {
      key: "button",
      content: customer => (
        <Buttons
          onSubmit={() => this.props.onDelete(customer)}
          name="Delete"
          color="#e60000"
        />
      )
    }
  ];
  render() {
    const { customers, onSort, sortColumn, currentPage } = this.props;
    console.log("customer", customers);
    return (
      <Tables
        columns={this.columns}
        data={customers}
        currentPage={currentPage}
        sortColumn={sortColumn}
        onSort={onSort}
      />
    );
  }
}

export default CustomerListTable;
