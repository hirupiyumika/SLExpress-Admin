import React from "react";
import { Switch, Route } from "react-router-dom";

import Dashboard from "./Components/Pages/CompanyManagement/Dashboard/dashboard";
import CompanyDetails from "./Components/Pages/CompanyManagement/CompanyDetails/companyDetails";
//import CompanyDetailsForm from "./Components/Pages/CompanyManagement/CompanyDetails/comanyDetailsForm";
import ContactDetails from "./Components/Pages/CompanyManagement/ContactDetails/contactDetails";
import TermsOfServices from "./Components/Pages/CompanyManagement/TermsOfServices/termsOfServices";
import Category from "./Components/Pages/CompanyManagement/Category/category";
import CategoryForm from "./Components/Pages/CompanyManagement/Category/categoryForm";
import Sale from "./Components/Pages/CompanyManagement/Sale/sale";
import AdminSignIn from "./Components/Pages/CompanyManagement/AdminSignIn/adminSignIn";
import AdminSignUp from "./Components/Pages/CompanyManagement/AdminSignUp/adminSignUp";

import CustomerList from "./Components/Pages/CustomerManagement/CustomerList/customerList";
import SiteList from "./Components/Pages/CustomerManagement/SiteList/siteList";
import DomainList from "./Components/Pages/CustomerManagement/DomainList/domainList";
import CustomerTickets from "./Components/Pages/CustomerManagement/CustomerInquiries/customerTickets";
import CustomerInquiries from "./Components/Pages/CustomerManagement/CustomerInquiries/customerInquiries";
import UserDetails from "./Components/Pages/CustomerManagement/CustomerDetails/userDetails";

import DeveloperList from "./Components/Pages/DeveloperManagement/DeveloperList/developerList";
import ScriptList from "./Components/Pages/DeveloperManagement/ScriptList/scriptList";
import Payment from "./Components/Pages/DeveloperManagement/Payment/payment";
import PaymentForm from "./Components/Pages/DeveloperManagement/Payment/paymentForm";
import DeveloperTickets from "./Components/Pages/DeveloperManagement/DeveloperInquiries/developerTickets";
import DeveloperInquiries from "./Components/Pages/DeveloperManagement/DeveloperInquiries/developerInquiries";

import BusinessPlan from "./Components/Pages/BusinessPlanManagement/BusinessPlan/BusinessPlan";
import UserIdeasList from "./Components/Pages/BusinessPlanManagement/UserIdeasList/UserIdeasList";
import LogOut from "./Components/Common/logOut";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/Dashboard" component={Dashboard} />
      <Route path="/Company-Details" component={CompanyDetails} />
      {/* <Route path="/Company-Details/:id" component={CompanyDetailsForm} /> */}
      <Route path="/Contact-Details" component={ContactDetails} />
      <Route path="/Category/:id" component={CategoryForm} />
      <Route path="/Terms-Of-Services" component={TermsOfServices} />
      <Route path="/Category" component={Category} />
      <Route path="/Sale" component={Sale} />
      <Route path="/Admin-Sign-In" component={AdminSignIn} />
      <Route path="/LogOut" component={LogOut} />
      <Route path="/Admin-Sign-Up" component={AdminSignUp} />

      <Route path="/User-List" component={CustomerList} />
      <Route path="/Site-List" component={SiteList} />
      <Route path="/Domain-List" component={DomainList} />
      <Route path="/Customer-Tickets" component={CustomerTickets} />
      <Route path="/Customer-Inquiries/:id" component={CustomerInquiries} />
      <Route path="/UserDetails" component={UserDetails} />

      <Route path="/Developer-List" component={DeveloperList} />
      <Route path="/Script-List" component={ScriptList} />
      <Route path="/Payment/:id" component={PaymentForm} />
      <Route path="/Payment" component={Payment} />
      <Route path="/Developer-Tickets" component={DeveloperTickets} />
      <Route path="/Developer-Inquiries/:id" component={DeveloperInquiries} />

      <Route path="/Business-Plan" component={BusinessPlan} />
      <Route path="/User-Ideas-List" component={UserIdeasList} />
    </Switch>
  );
};

export default Routes;
