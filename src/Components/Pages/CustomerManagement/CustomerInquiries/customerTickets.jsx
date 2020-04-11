import React, { Component } from "react";
import { Grid, Card, Feed } from "semantic-ui-react";
import { TitleWapper } from "../../../Common/CommonStyle";
import { Link } from "react-router-dom";
import { CustomerContext } from "../../../../context/customersContext";
import Moment from "react-moment";
import _ from "lodash";
import Loading from "./../../../Common/loading";

class CustomerTickets extends Component {
  static contextType = CustomerContext;

  renderReplies = (user, admin) => {
    let count;
    count = user + admin;
    return count + " replies";
  };

  render() {
    const { tickets, loading, handleInquiries } = this.context;

    if (loading) {
      return <Loading />;
    }
    console.log("AllTickets", tickets);
    return (
      <Grid.Column mobile={13} tablet={13} computer={13}>
        <TitleWapper>Customer Tickets</TitleWapper>
        <Grid>
          <Grid.Column mobile={3} tablet={3} computer={3}></Grid.Column>
          <Grid.Column mobile={10} tablet={10} computer={10}>
            {tickets.map((ticket, index) => (
              <>
                {ticket.userId && (
                  <Card fluid key={index}>
                    <Card.Content>
                      <Card.Header>{ticket.title}</Card.Header>
                    </Card.Content>
                    <Card.Content>
                      <Feed>
                        <Feed.Event>
                          <Feed.Label image="https://react.semantic-ui.com/images/avatar/small/jenny.jpg" />
                          <Feed.Content>
                            <Card.Meta>
                              {
                                <Moment fromNow ago>
                                  {ticket.time}
                                </Moment>
                              }{" "}
                              ago
                            </Card.Meta>
                            <Feed.Summary>{ticket.ticketText}</Feed.Summary>
                            <Link
                              to={{
                                pathname: `/customer-inquiries/${ticket._id}`,
                                status: [ticket.open],
                              }}
                              onClick={() => handleInquiries(ticket._id)}
                            >
                              {this.renderReplies(
                                ticket.adminReplies.length,
                                ticket.userReplies.length
                              )}
                            </Link>
                          </Feed.Content>
                        </Feed.Event>
                      </Feed>
                    </Card.Content>
                  </Card>
                )}
              </>
            ))}
          </Grid.Column>
        </Grid>
      </Grid.Column>
    );
  }
}

export default CustomerTickets;
