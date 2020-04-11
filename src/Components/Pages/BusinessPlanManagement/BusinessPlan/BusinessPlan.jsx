import React from "react";
import { Grid } from "semantic-ui-react";
import { TitleWapper } from "./../../../Common/CommonStyle";

const BusinessPlan = () => {
  return (
    <Grid.Column
      mobile={13}
      tablet={13}
      computer={13}
      //style={{ background: "#e9ecef;" }}
    >
      <TitleWapper>Business Plan</TitleWapper>
    </Grid.Column>
  );
};

export default BusinessPlan;
