import React, { Component } from "react";
import { Grid } from "semantic-ui-react";
import { TitleWapper } from "../../../Common/CommonStyle";
import Pagination from "../../../Common/pagination";
import { paginate } from "../../../Common/paginate";
import SiteListTable from "./siteListTable";
import { CustomerContext } from "../../../../context/customersContext";
import { SearchBar, Loading } from "../../../Common/icon";
import _ from "lodash";

class SiteList extends Component {
  static contextType = CustomerContext;

  render() {
    const {
      sites,
      handleSiteDelete,
      handlePageChange,
      handlePreviousPageChange,
      handleNextPageChange,
      handleSort,
      loading,
      currentPage,
      pageSize,
      searchQuery,
      handleSearch,
      sortColumn
    } = this.context;

    const { length: count } = sites;

    let filtered = sites;
    if (searchQuery)
      filtered = sites.filter(s =>
        s.username.toLowerCase().startsWith(searchQuery.toLowerCase())
      );
    const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);
    const allSites = paginate(sorted, currentPage, pageSize);
    const { length: totalCount } = filtered;
    if (loading) {
      return <Loading />;
    }
    console.log("siteList", sites);
    return (
      <Grid.Column
        mobile={13}
        tablet={13}
        computer={13}
        style={{ overflowX: "scroll" }}
      >
        <TitleWapper>Site List</TitleWapper>

        {count === 0 ? (
          <p>There are no sites in the database.</p>
        ) : (
          <p>Showing {totalCount} sites in the database.</p>
        )}
        <SearchBar value={searchQuery} onChange={handleSearch} />
        <SiteListTable
          sites={allSites}
          currentPage={currentPage}
          sortColumn={sortColumn}
          onDelete={handleSiteDelete}
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
    );
  }
}
export default SiteList;
