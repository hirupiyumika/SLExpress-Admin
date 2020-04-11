import React, { Component } from "react";
import { Grid } from "semantic-ui-react";
import { TitleWapper } from "../../../Common/CommonStyle";
import Pagination from "../../../Common/pagination";
import { paginate } from "../../../Common/paginate";
import DeveloperListTable from "./developerListTable";
import { DeveloperContext } from "../../../../context/developersContext";
import { SearchBar, Loading } from "../../../Common/icon";
import _ from "lodash";

class DeveloperList extends Component {
  static contextType = DeveloperContext;

  render() {
    const {
      developers,
      handleDeveloperDelete,
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

    const { length: count } = developers;

    let filtered = developers;
    if (searchQuery)
      filtered = developers.filter(sd =>
        sd.username.toLowerCase().startsWith(searchQuery.toLowerCase())
      );
    const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);
    const allDevelopers = paginate(sorted, currentPage, pageSize);
    const { length: totalCount } = filtered;
    if (loading) {
      return <Loading />;
    }

    return (
      <Grid.Column mobile={13} tablet={13} computer={13}>
        <TitleWapper>Developers List</TitleWapper>
        {count === 0 ? (
          <p>There are no Developer-sites in the database.</p>
        ) : (
          <p>Showing {totalCount} Developer-sites in the database.</p>
        )}
        <SearchBar value={searchQuery} onChange={handleSearch} />
        <DeveloperListTable
          developers={allDevelopers}
          currentPage={currentPage}
          sortColumn={sortColumn}
          onDelete={handleDeveloperDelete}
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
export default DeveloperList;
