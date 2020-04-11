import React from "react";
import { Grid } from "semantic-ui-react";
import MenuBar from "./menuBar";
import Routes from "../../Routes";
import UserListContainer from "../../Containers/UserList.container";

const Content = ({ admin }) => {
  return (
    <Grid style={{ margin: 0 }}>
      {/* {!admin && <MenuBar />} */}
      {admin && <MenuBar />}
      <UserListContainer.Provider>
        <Routes />
      </UserListContainer.Provider>
    </Grid>
  );
};

export default Content;
