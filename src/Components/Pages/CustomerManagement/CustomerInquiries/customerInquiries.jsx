import React, { Component } from "react";
import { Grid, Message, Icon, Form, Label, Card } from "semantic-ui-react";
import { TitleWapper } from "../../../Common/CommonStyle";
import styled from "styled-components";
import { CustomerContext } from "../../../../context/customersContext";
import _ from "lodash";
import Forms from "../../../Common/forms";
import Joi from "joi-browser";
import { CButtons } from "../../../Common/buttons";
import Moment from "react-moment";
import { Loading } from "./../../../Common/icon";

class CustomerInquiries extends Forms {
  static contextType = CustomerContext;
  state = {
    data: {
      _id: "",
      message: "",
    },
    open: [],
    errors: {},
  };

  schema = {
    message: Joi.string().required().min(4).label("Message"),
  };

  componentDidMount = async () => {
    const id = this.props.match.params.id;
    this.setState({ data: this.setId(id) });
    const open = this.props.location.status;
    console.log("local", open);
    this.setState({ open: this.setOpen(open), loading: false });
    await this.context.handleInquiries(id);
    this.setOpen(open);
  };

  setOpen(o) {
    return {
      open: o,
    };
  }

  setId(id) {
    return {
      _id: id,
    };
  }

  setOpen(open) {
    if (open !== undefined) {
      open = open[0];
      console.log("fff", open);

      if (open) {
        localStorage.removeItem("open");
        localStorage.setItem("open", "open");
      }
      if (!open) {
        localStorage.removeItem("open");
        localStorage.setItem("open", "close");
      }
    }
  }

  doSubmit = async () => {
    try {
      const AdminMsg = this.state.data;
      console.log("AdminMsg.message", AdminMsg._id);
      this.context.handleReply(AdminMsg.message, AdminMsg._id);
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
        const errors = { ...this.state.errors };
        this.setState({ errors });
      }
    }
  };

  render() {
    const { sortAllMsg, loading } = this.context;

    if (loading) {
      return <Loading />;
    }
    return (
      <Grid.Column mobile={13} tablet={13} computer={13}>
        <br />
        <br />
        <TitleWapper>Customer Inquiries</TitleWapper>
        <br />
        <br />
        <Grid>
          <Grid.Column mobile={2} tablet={2} computer={2}></Grid.Column>
          <Grid.Column mobile={10} tablet={10} computer={10}>
            <Card fluid>
              <Card.Content>
                <br />
                <br />
                {sortAllMsg.map((d, index) => (
                  <>
                    {!d.adminReply && (
                      <>
                        <Grid key={index}>
                          <Grid.Column
                            mobile={1}
                            tablet={1}
                            computer={1}
                          ></Grid.Column>
                          <Grid.Column mobile={1} tablet={1} computer={1}>
                            <Icon name="user circle" size="big" />
                          </Grid.Column>
                          <br />
                          <Grid.Column mobile={13} tablet={13} computer={13}>
                            <Message positive style={{ borderRadius: "1rem" }}>
                              {d.userReply}
                              {d.userReply}
                              <Card.Meta style={{ textAlign: "right" }}>
                                {<Moment calendar>{d.time}</Moment>}
                              </Card.Meta>
                            </Message>
                          </Grid.Column>
                          <br />
                        </Grid>
                        <br />
                      </>
                    )}

                    {d.adminReply && (
                      <>
                        <Grid>
                          <Grid.Column
                            mobile={1}
                            tablet={1}
                            computer={1}
                          ></Grid.Column>
                          <Grid.Column mobile={13} tablet={13} computer={13}>
                            <Message info style={{ borderRadius: "1rem" }}>
                              {d.adminReply}
                              <Card.Meta style={{ textAlign: "right" }}>
                                {<Moment calendar>{d.time}</Moment>}
                              </Card.Meta>
                            </Message>
                          </Grid.Column>
                          <br />
                          <Grid.Column mobile={1} tablet={1} computer={1}>
                            <Icon name="user circle outline" size="big" />
                          </Grid.Column>
                          <br />
                        </Grid>

                        <br />
                      </>
                    )}
                  </>
                ))}
              </Card.Content>
              {localStorage.open == "open" && (
                <Card.Content>
                  <Grid>
                    <Grid.Column mobile={16} tablet={16} computer={16}>
                      <StyledForm onSubmit={this.handleSubmit}>
                        {this.renderTextArea("message", "Message")}
                        <br />
                        <CButtons name="Send" color="#40a3dc" />
                      </StyledForm>
                    </Grid.Column>
                  </Grid>
                </Card.Content>
              )}
            </Card>
          </Grid.Column>
        </Grid>
      </Grid.Column>
    );
  }
}

export default CustomerInquiries;

const StyledForm = styled(Form)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 25px;
`;
