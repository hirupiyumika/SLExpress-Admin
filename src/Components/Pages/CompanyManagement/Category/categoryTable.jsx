import React, { Component } from "react";
import { Buttons } from "../../../Common/buttons";
import Tables from "../../../Common/tables";
import { Link } from "react-router-dom";

class CategoryTable extends Component {
  columns = [
    { path: "name", label: "Category" },
    {
      key: "button",
      content: category => (
        <Link to={`/category/${category._id}`}>
          <Buttons
            onSubmit={() => this.props.onUpdate(category, "mini")}
            name="Update"
            color="#40a3dc"
          />
        </Link>
      )
    },

    {
      key: "button",
      content: category => (
        <Buttons
          onSubmit={() => this.props.onDelete(category)}
          name="Delete"
          color="#e60000"
        />
      )
    }
  ];
  render() {
    const { categories, onSort, sortColumn, currentPage } = this.props;

    return (
      <Tables
        columns={this.columns}
        data={categories}
        currentPage={currentPage}
        sortColumn={sortColumn}
        onSort={onSort}
      />
    );
  }
}

export default CategoryTable;
