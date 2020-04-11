import React, { Component } from "react";
import { Grid } from "semantic-ui-react";
import { TitleWapper } from "../../../Common/CommonStyle";
import Pagination from "../../../Common/pagination";
import { paginate } from "../../../Common/paginate";
import DeveloperSiteListTable from "./scriptListTable";
import { DeveloperContext } from "../../../../context/developersContext";
import { SearchBar, Loading } from "../../../Common/icon";
import _ from "lodash";

class ScriptList extends Component {
  static contextType = DeveloperContext;

  render() {
    const {
      developers,
      scripts,
      buyers,
      handleDeveloperSiteDelete,
      handleApprovel,
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

    const { length: count } = scripts;

    let filtered = scripts;
    if (searchQuery)
      filtered = scripts.filter((sd) =>
        sd.name.toLowerCase().startsWith(searchQuery.toLowerCase())
      );
    const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);
    const allScripts = paginate(sorted, currentPage, pageSize);
    const { length: totalCount } = filtered;

    if (loading) {
      return <Loading />;
    }
    //   console.log("buyers", buyers);

    return (
      <Grid.Column
        mobile={13}
        tablet={13}
        computer={13}
        style={{ overflowX: "scroll" }}
      >
        <TitleWapper>Script List</TitleWapper>

        {count === 0 ? (
          <p>There are no Script in the database.</p>
        ) : (
          <p>Showing {totalCount} Scripts in the database.</p>
        )}
        <SearchBar value={searchQuery} onChange={handleSearch} />
        <DeveloperSiteListTable
          scripts={allScripts}
          map1={developers}
          map2={buyers}
          onApprovel={handleApprovel}
          currentPage={currentPage}
          sortColumn={sortColumn}
          onDelete={handleDeveloperSiteDelete}
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
export default ScriptList;
