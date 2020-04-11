import React from "react";
import { Grid, Button, Modal } from "semantic-ui-react";
import { TitleWapper } from "../../../Common/CommonStyle";
import Forms from "../../../Common/forms";
import { CompanyContext } from "../../../../context/companyContext";
import Cards from "../../../Common/cards";
import { Loading } from "./../../../Common/icon";

class TermsOfServices extends Forms {
  static contextType = CompanyContext;
  render() {
    const { ourToS, loading } = this.context;
    if (loading) {
      return <Loading />;
    }
    return (
      <Grid.Column mobile={13} tablet={13} computer={13}>
        <TitleWapper>Terms of Services</TitleWapper>

        <Cards
          header="Terms Of Services"
          name="Update"
          text={ourToS.text}
          date={ourToS.updatedDate}
        />
      </Grid.Column>
    );
  }
}

export default TermsOfServices;
