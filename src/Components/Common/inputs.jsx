import React from "react";
import { MDBInput } from "mdbreact";
import { Form, TextArea } from "semantic-ui-react";
import styled from "styled-components";

export const Inputs = ({ name, errors, ...rest }) => {
  //console.log(name, label, value, onChange, type);
  return (
    <>
      <MDBInput {...rest} name={name} />
      {errors && <div className="alert alert-danger">{errors}</div>}
    </>
  );
};

export const Text = ({ name, errors, ...rest }) => {
  //console.log(name, label, value, onChange, type);
  return (
    <>
      <StyledTextarea {...rest} name={name} />
      {errors && <div className="alert alert-danger">{errors}</div>}
    </>
  );
};

export const Area = ({ name, errors, ...rest }) => {
  return (
    <>
      <TextArea
        rows={17}
        placeholder="Type a Message..."
        {...rest}
        name={name}
        style={{ minHeight: 100 }}
      />
      {errors && <div className="alert alert-danger">{errors}</div>}
    </>
  );
};

const StyledTextarea = styled(Form.TextArea)`
  width: 125%;
  height: 100% !important;
`;
