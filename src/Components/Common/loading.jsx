import React from "react";
import { Loader } from "semantic-ui-react";
import { StyleGrid } from "./CommonStyle";
import { Grid } from "semantic-ui-react";

const Loading = () => {
  return (
    <Grid.Column mobile={13} tablet={13} computer={13}>
      <StyleGrid>
        <Loader active inline="centered" style={{ marginTop: "250px" }} />
      </StyleGrid>
    </Grid.Column>
  );
};

export default Loading;
