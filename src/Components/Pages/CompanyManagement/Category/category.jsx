import React, { Component } from "react";
import { Grid } from "semantic-ui-react";
import { TitleWapper, StyleGrid } from "../../../Common/CommonStyle";
import Pagination from "../../../Common/pagination";
import { paginate } from "../../../Common/paginate";
import CategoryTable from "./categoryTable";
import { CompanyContext } from "../../../../context/companyContext";
import { IButtons } from "../../../Common/buttons";
import { SearchBar, Loading } from "../../../Common/icon";
import _ from "lodash";
import { Link } from "react-router-dom";

class Category extends Component {
  static contextType = CompanyContext;

  render() {
    const {
      categories,
      handleCategoryDelete,
      handleCategoryUpdate,
      show,
      handlePageChange,
      handlePreviousPageChange,
      handleNextPageChange,
      handleSort,
      loading,
      currentPage,
      pageSize,
      searchQuery,
      handleSearch,
      sortColumn,
    } = this.context;

    const { length: count } = categories;

    let filtered = categories;
    if (searchQuery)
      filtered = categories.filter((c) =>
        c.name.toLowerCase().startsWith(searchQuery.toLowerCase())
      );
    const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);
    const allCategories = paginate(sorted, currentPage, pageSize);
    const { length: totalCount } = filtered;

    if (loading) {
      return <Loading />;
    }

    return (
      <>
        <Grid.Column
          mobile={13}
          tablet={13}
          computer={13}
          style={{ animation: "fadeIn 1s ease-in" }}
        >
          <StyleGrid>
            <Grid.Column mobile={14} tablet={14} computer={14}>
              <TitleWapper>Categories List</TitleWapper>
              {count === 0 ? (
                <p>There are no categories in the database.</p>
              ) : (
                <p>Showing {totalCount} Categories in the database.</p>
              )}

              <Link to="/category/category-form">
                <IButtons name="Add New" color="blue" icon="add" />
              </Link>
              <br />
              <br />
              <SearchBar value={searchQuery} onChange={handleSearch} />
              <CategoryTable
                categories={allCategories}
                currentPage={currentPage}
                sortColumn={sortColumn}
                onDelete={handleCategoryDelete}
                onUpdate={handleCategoryUpdate}
                onSort={handleSort}
              />
              <Pagination
                itemCount={totalCount}
                pageSize={pageSize}
                currentPage={currentPage}
                onPreviousPageChange={handlePreviousPageChange}
                onPageChange={handlePageChange}
                onNextPageChange={handleNextPageChange}
              />
            </Grid.Column>
          </StyleGrid>
        </Grid.Column>
      </>
    );
  }
}
export default Category;
