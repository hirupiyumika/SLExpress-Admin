import React, { Component } from "react";
import { Grid } from "semantic-ui-react";
import { TitleWapper, StyleGrid } from "../../../Common/CommonStyle";
import Pagination from "../../../Common/pagination";
import { paginate } from "../../../Common/paginate";
import CustomerListTable from "./customerListTable";
import { CustomerContext } from "../../../../context/customersContext";
import { SearchBar, Loading } from "../../../Common/icon";
import _ from "lodash";

class CustomerList extends Component {
  static contextType = CustomerContext;

  render() {
    const {
      customers,
      handleCustomerDelete,
      handleCustomerDetails,
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

    const { length: count } = customers;

    let filtered = customers;
    if (searchQuery)
      filtered = customers.filter((c) =>
        c.username.toLowerCase().startsWith(searchQuery.toLowerCase())
      );
    const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);
    const allCustomers = paginate(sorted, currentPage, pageSize);
    const { length: totalCount } = filtered;

    if (loading) {
      return <Loading />;
    }

    return (
      <Grid.Column
        mobile={13}
        tablet={13}
        computer={13}
        style={{ animation: "fadeIn 1s ease-in" }}
      >
        <StyleGrid>
          <Grid.Column mobile={16} tablet={16} computer={16}>
            <TitleWapper>Customer List</TitleWapper>

            {count === 0 ? (
              <p>There are no customers in the database.</p>
            ) : (
              <p>Showing {totalCount} customers in the database.</p>
            )}
            <SearchBar value={searchQuery} onChange={handleSearch} />
            <CustomerListTable
              customers={allCustomers}
              currentPage={currentPage}
              sortColumn={sortColumn}
              onDelete={handleCustomerDelete}
              onDetails={handleCustomerDetails}
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
    );
  }
}
export default CustomerList;
