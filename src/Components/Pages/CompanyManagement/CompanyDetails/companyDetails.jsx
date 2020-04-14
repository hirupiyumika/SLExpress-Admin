import React, { Component } from "react";
import {
  Button,
  Card,
  Feed,
  Header,
  Modal,
  Grid,
  Segment,
  Form,
} from "semantic-ui-react";
import { TitleWapper, StyleGrid } from "../../../Common/CommonStyle";
import { CompanyContext } from "../../../../context/companyContext";
import Cards from "../../../Common/cards";
import styled from "styled-components";
import { Loading } from "./../../../Common/icon";

class CompanyDetails extends Component {
  static contextType = CompanyContext;
  // Our main aim is to develop in a constant manner and become a leading
  //performer in this competitive global marketplace. Fortunately, we have been able
  //to gather a crew of professionals that can shape and mold their collective experiences,
  //all of them posses outstanding talent that can help to accelerate your organization.

  // Our vision is to unleash the full potential of the amazing pool of the software engineers
  //in Sri Lanka  by providing world class outsourcing services.

  render() {
    const { ourVision, ourMission, loading } = this.context;
    if (loading) {
      return <Loading />;
    }
    return (
      <>
        <Grid.Column mobile={13} tablet={13} computer={13}>
          <StyleGrid>
            <TitleWapper>Company Details</TitleWapper>

            {/* <Grid.Column mobile={8} tablet={8} computer={8}> */}
            <Cards
              header="Our Mission"
              name="Update"
              text={ourMission.text}
              date={ourMission.updatedDate}
            />
            {/* </Grid.Column> */}
            {/* <Grid.Column mobile={8} tablet={8} computer={8}> */}
            <Cards
              header="Our Vision"
              name="Update"
              text={ourVision.text}
              date={ourVision.updatedDate}
            />
            {/* </Grid.Column> */}
          </StyleGrid>
        </Grid.Column>
      </>
    );
  }
}

export default CompanyDetails;

const StyledForm = styled(Form)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 25px;
`;
