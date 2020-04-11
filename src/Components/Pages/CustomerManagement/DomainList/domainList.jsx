import React from "react";
import { Grid } from "semantic-ui-react";
import { TitleWapper } from "../../../Common/CommonStyle";

const DomainList = () => {
  return (
    <Grid.Column mobile={13} tablet={13} computer={13}>
      <TitleWapper>Domain List</TitleWapper>
    </Grid.Column>
  );
};

export default DomainList;
