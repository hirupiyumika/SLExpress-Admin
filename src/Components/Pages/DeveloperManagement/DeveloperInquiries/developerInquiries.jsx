import React, { Component } from "react";
import { Grid } from "semantic-ui-react";
import { TitleWapper, StyleGrid } from "../../../Common/CommonStyle";
import { DeveloperContext } from "../../../../context/developersContext";
import _ from "lodash";
import { Loading } from "./../../../Common/icon";
import Messagebox from "./../../../Common/messageBox";
import styled from "styled-components";

class DeveloperInquiries extends Component {
  static contextType = DeveloperContext;

  render() {
    const { sortAllMsg, loading, handleInquiries, handleReply } = this.context;

    if (loading) {
      return <Loading />;
    }

    return (
      <Grid.Column mobile={13} tablet={13} computer={13}>
        <StyleGrid>
          <TitleWapper>Developer Inquiries</TitleWapper>

          <Messagebox
            sortAllMsg={sortAllMsg}
            id={this.props.match.params.id}
            status={this.props.location.status}
            inquiries={handleInquiries}
            handleReply={handleReply}
          />
        </StyleGrid>
      </Grid.Column>
    );
  }
}

export default DeveloperInquiries;
