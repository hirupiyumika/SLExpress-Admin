import { useEffect, useState } from "react";
import { createContainer } from "unstated-next";
// import { menuBarData } from "./../FakeDatabase/MenuBarData";
// import { tableRow } from "../FakeDatabase/UserListData";
import { UserListData } from "./../Api";
//import { Details } from "./../Components/Common/Buttons";
//import UserDetails from "./../Components/Pages/UserManagement/UserDetails/UserDetails";

const useUserList = () => {
  const [data, setData] = useState();
  const [isloading, setIsloading] = useState(false);
  const [details, setDetails] = useState();

  const fetchData = async () => {
    setIsloading(true);
    const response = await UserListData();
    if (response) {
      setIsloading(false);
      setData(response);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleDetails = customer => {
    const userDetails = { customer };
    console.log(userDetails);
    setDetails(userDetails);
  };

  return { data, isloading, handleDetails, details };
};
const UserListContainer = createContainer(useUserList);

export default UserListContainer;
