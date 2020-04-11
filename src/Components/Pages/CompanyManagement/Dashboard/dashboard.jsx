import React from "react";
import { Grid } from "semantic-ui-react";
import { TitleWapper } from "../../../Common/CommonStyle";
import { SearchBar } from "../../../Common/icon";

const Dashboard = () => {
  return (
    <Grid.Column
      mobile={13}
      tablet={13}
      computer={13}
      //  style={{ background: "#e9ecef;" }}
    >
      <TitleWapper>Dashboard</TitleWapper>

      <SearchBar />
    </Grid.Column>
  );
};

export default Dashboard;
