import React, { Component } from "react";
import { Grid, Segment, Form, Button, Modal } from "semantic-ui-react";
import styled from "styled-components";
import { TitleWapper } from "./../../../Common/CommonStyle";
import Forms from "../../../Common/forms";
import { CButtons } from "../../../Common/buttons";
import { CompanyContext } from "../../../../context/companyContext";
import Joi from "joi-browser";

class CategoryForm extends Forms {
  static contextType = CompanyContext;
  state = {
    data: {
      _id: "",
      name: "",
    },

    errors: {},
  };

  schema = {
    _id: Joi.string(),
    name: Joi.string().required().label("Category Name"),
  };

  componentDidMount() {
    const categoryId = this.props.match.params.id;
    if (categoryId === "category-form") return;

    const category = this.context.singleCategory[0];
    if (!category) return this.props.history.replace("/category");

    this.setState({ data: this.mapToCategoryModel(category) });
  }

  mapToCategoryModel(category) {
    return {
      _id: category._id,
      name: category.name,
    };
  }

  doSubmit = async () => {
    console.log("doSubmit");
    await this.context.handleCategorySave(this.state.data);
    this.props.history.push("/category");
  };

  render() {
    const { open, size, close } = this.context;
    return (
      <Grid.Column mobile={13} tablet={13} computer={13}>
        <Grid>
          <Grid.Column mobile={4} tablet={4} computer={4}></Grid.Column>
          <Grid.Column mobile={7} tablet={7} computer={7}>
            <TitleWapper>Category Update</TitleWapper>
            <Segment>
              <StyledForm onSubmit={this.handleSubmit}>
                {this.renderInput("name", "Category Name")}
                <CButtons name="Submit" color="#40a3dc" />
              </StyledForm>
            </Segment>
          </Grid.Column>
          <Grid.Column mobile={5} tablet={5} computer={5}></Grid.Column>
        </Grid>
      </Grid.Column>
    );
  }
}

export default CategoryForm;

const StyledForm = styled(Form)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 25px;
`;
