import React from "react";
import { Loader, Icon, Input } from "semantic-ui-react";
import styled from "styled-components";

export const Loading = () => {
  return <Loader active inline="centered" style={{ marginTop: "250px" }} />;
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
      onChange={e => onChange(e.currentTarget.value)}
    />
  );
};

const Inputfield = styled(Input)`
  &&.ui.input > input {
    border-radius: 500rem !important;
  }
`;
