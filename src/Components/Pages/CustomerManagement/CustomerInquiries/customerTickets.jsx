import React, { Component } from "react";
import { Grid } from "semantic-ui-react";
import { TitleWapper, StyleGrid } from "../../../Common/CommonStyle";
import { CustomerContext } from "../../../../context/customersContext";
import _ from "lodash";
import Loading from "./../../../Common/loading";
import Ticket from "./../../../Common/ticket";

class CustomerTickets extends Component {
  static contextType = CustomerContext;

  render() {
    const { tickets, loading, handleInquiries } = this.context;

    if (loading) {
      return <Loading />;
    }
    console.log("AllTickets", tickets);
    return (
      <Grid.Column
        mobile={13}
        tablet={13}
        computer={13}
        style={{ animation: "fadeIn 1s ease-in" }}
      >
        <StyleGrid>
          <TitleWapper>Customer Tickets</TitleWapper>
          <Grid>
            <Grid.Column mobile={5} tablet={5} computer={5}></Grid.Column>
            <Grid.Column mobile={10} tablet={10} computer={10}>
              <Ticket
                tickets={tickets}
                handleInquiries={handleInquiries}
                link="customer"
              />
            </Grid.Column>
          </Grid>
        </StyleGrid>
      </Grid.Column>
    );
  }
}

export default CustomerTickets;
