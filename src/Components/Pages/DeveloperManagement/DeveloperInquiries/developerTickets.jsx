import React, { Component } from "react";
import { Grid } from "semantic-ui-react";
import { TitleWapper, StyleGrid } from "../../../Common/CommonStyle";
import { DeveloperContext } from "../../../../context/developersContext";
import _ from "lodash";
import Loading from "./../../../Common/loading";
import Ticket from "./../../../Common/ticket";

class DeveloperTickets extends Component {
  static contextType = DeveloperContext;

  render() {
    const { tickets, loading, handleInquiries } = this.context;
    if (loading) {
      return <Loading />;
    }

    return (
      <Grid.Column mobile={13} tablet={13} computer={13}>
        <StyleGrid>
          <TitleWapper>Developers Tickets</TitleWapper>
          <Grid>
            <Grid.Column mobile={5} tablet={5} computer={5}></Grid.Column>
            <Grid.Column mobile={10} tablet={10} computer={10}>
              <Ticket
                tickets={tickets}
                handleInquiries={handleInquiries}
                link="developer"
              />
            </Grid.Column>
          </Grid>
        </StyleGrid>
      </Grid.Column>
    );
  }
}

export default DeveloperTickets;
