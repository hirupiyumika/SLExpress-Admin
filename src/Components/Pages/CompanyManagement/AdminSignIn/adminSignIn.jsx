import React from "react";
import { Grid, Segment, Form } from "semantic-ui-react";
import Joi from "joi-browser";
import auth from "../../../../Service/authAdminService";
import styled from "styled-components";
import { TitleWapper } from "../../../Common/CommonStyle";
import { CButtons } from "../../../Common/buttons";
import Forms from "../../../Common/forms";

class AdminSignIn extends Forms {
  state = {
    data: { email: "", password: "" },
    errors: {}
  };

  schema = {
    email: Joi.string()
      .required()
      .email()
      .label("E-mail"),
    password: Joi.string()
      .required()
      .min(8)
      .label("Password")
  };

  doSubmit = async () => {
    try {
      // const { data } = this.state;
      await auth.adminLogin(this.state.data);

      const { state } = this.props.location;
      window.location = state ? state.from.pathname : "/dashboard";
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
        const errors = { ...this.state.errors };
        errors.email = ex.response.data;
        this.setState({ errors });
      }
    }
  };
  render() {
    return (
      <Grid.Column
        mobile={16}
        tablet={16}
        computer={16}
        // style={{ background: "green" }}
      >
        <Grid>
          <Grid.Column mobile={5} tablet={5} computer={5}></Grid.Column>
          <Grid.Column mobile={6} tablet={6} computer={6}>
            <TitleWapper>Admin Sign In</TitleWapper>
            <Segment>
              <StyledForm onSubmit={this.handleSubmit}>
                {this.renderInput("email", "E-mail", "email")}
                {this.renderInput("password", "Password", "password")}
                <CButtons name="Login" color="#40a3dc" />
              </StyledForm>
            </Segment>
          </Grid.Column>
          <Grid.Column mobile={5} tablet={5} computer={5}></Grid.Column>
        </Grid>
      </Grid.Column>
    );
  }
}

export default AdminSignIn;

const StyledForm = styled(Form)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 25px;
`;
