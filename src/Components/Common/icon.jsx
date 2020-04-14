import React from "react";
import { Loader, Icon, Input, Grid } from "semantic-ui-react";
import styled from "styled-components";
import { StyleGrid } from "./CommonStyle";

export const Loading = () => {
  return (
    <Grid.Column mobile={13} tablet={13} computer={13}>
      <StyleGrid>
        <Loader
          active
          inline="centered"
          style={{
            marginTop: "11rem",
            marginLeft: "27rem",
            marginBottom: "11rem",
          }}
        />
      </StyleGrid>
    </Grid.Column>
  );
};

export const Down = () => {
  return <Icon name="caret down" />;
};

export const Up = () => {
  return <Icon name="caret up" />;
};

export const Status = ({ liked, onSubmit }) => {
  if (!liked)
    return (
      <Icon name="delete" onClick={onSubmit} style={{ color: "#e60000" }} />
    );
  else return <Icon name="checkmark" style={{ color: "#21ba45" }} />;
};

export const SearchBar = ({ value, onChange }) => {
  return (
    <Inputfield
      icon="search"
      name="search "
      placeholder="Search..."
      value={value}
      group
      type="text"
      onChange={(e) => onChange(e.currentTarget.value)}
    />
  );
};

const Inputfield = styled(Input)`
  &&.ui.input > input {
    border-radius: 500rem !important;
  }
`;
