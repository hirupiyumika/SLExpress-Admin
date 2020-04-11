import React, { Component } from "react";
import { Buttons } from "../../../Common/buttons";
import Tables from "../../../Common/tables";
import { Status } from "../../../Common/icon";

class ScriptListTable extends Component {
  columns = [
    { date: "addedDate", label: "Date" },
    { id: "developer", label: "Developer Name" },
    { path: "name", label: "Site Name" },
    //{ path: "scripts.size", label: "Size" },
    { path: "price", label: "Price" },
    { count: "id", label: "Buyers" },
    {
      key: "button",
      label: "Approval",
      content: developerSite => (
        <Status
          onSubmit={() => this.props.onApprovel(developerSite)}
          name="Details"
          color="#40a3dc"
          liked={developerSite.approved}
        />
      )
    },

    {
      key: "button",
      content: developerSite => (
        <Buttons
          onSubmit={() => this.props.onDelete(developerSite)}
          name="Download"
          color="#40a3dc"
        />
      )
    },

    {
      key: "button",
      content: developerSite => (
        <Buttons
          onSubmit={() => this.props.onDelete(developerSite)}
          name="Delete"
          color="#e60000"
        />
      )
    }
  ];
  render() {
    const { scripts, map1, map2, onSort, sortColumn, currentPage } = this.props;

    return (
      <Tables
        columns={this.columns}
        data={scripts}
        map1={map1}
        map2={map2}
        currentPage={currentPage}
        sortColumn={sortColumn}
        onSort={onSort}
      />
    );
  }
}

export default ScriptListTable;
