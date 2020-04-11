import React, { Component } from "react";
import {
  getDevelopers,
  deleteDeveloper,
  getScripts,
  approveScript,
  deleteScript,
  getTickets,
  viewInquiries,
  replyTickets,
} from "../Service/developerService";
import auth from "../Service/authAdminService";
import _ from "lodash";
import { toast } from "react-toastify";
import Moment from "react-moment";
import moment from "moment";

const DeveloperContext = React.createContext();

class DeveloperProvider extends Component {
  state = {
    developers: [],
    scripts: [],
    buyers: [],
    tickets: [],
    openTicket: "",
    inquiry: [],
    sortDevMsg: [],
    sortAdminMsg: [],
    sortAllMsg: [],
    currentPage: 1,
    pageSize: 5,
    loading: true,
    searchQuery: "",
    sortColumn: { path: "title", order: "asc" },
  };

  componentDidMount = async () => {
    try {
      if (auth.getCurrentAdmin()) {
        await this.developerList();
        await this.scriptList();
        await this.ticketsList();
      }
    } catch (ex) {}
  };

  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };

  handlePreviousPageChange = (page) => {
    this.setState({ currentPage: page - 1 });
  };

  handleNextPageChange = (page) => {
    this.setState({ currentPage: page + 1 });
  };

  handleSort = (sortColumn) => {
    this.setState({ sortColumn });
  };

  handleSearch = (query) => {
    this.setState({ searchQuery: query, currentPage: 1 });
  };

  /**
   * Developer List
   */

  async developerList() {
    const { data: developers } = await getDevelopers();
    this.setState({ developers: developers.users, loading: false });
  }

  handleDeveloperDelete = async (developer) => {
    const developers = this.state.developers.filter(
      (d) => d._id !== developer._id
    );
    this.setState({ developers });

    try {
      await deleteDeveloper(developer._id);
    } catch (ex) {
      if (ex.response && ex.response.status === 404)
        toast.error("This site has already been deleted.");
    }
  };

  /**
   * Scripts List
   */

  async scriptList() {
    const { data: scriptList } = await getScripts();
    this.setState({ scripts: scriptList.scripts, loading: false });
    this.setState({ buyers: scriptList.scriptCustomers });
  }

  handleScriptDelete = async (developerSite) => {
    const scripts = this.state.scripts.filter(
      (ds) => ds._id !== developerSite._id
    );
    this.setState({ scripts });

    try {
      await deleteScript(developerSite._id);
    } catch (ex) {
      if (ex.response && ex.response.status === 404)
        toast.error("This site has already been deleted.");
    }
  };

  handleApprovel = async (script) => {
    console.log("scriptid", script.id);
    try {
      await approveScript(script.id);
      this.scriptList();
    } catch (ex) {
      if (ex.response && ex.response.status === 404)
        toast.error("This site has already been deleted.");
    }
  };

  /**
   * Developer Inquiries
   */

  async ticketsList() {
    const { data: ticketsList } = await getTickets();
    // console.log("ticketsList", ticketsList.tickets);
    // ticketsList.tickets.map((e) => console.log(e.userId.customerId));
    const tic = ticketsList.tickets.map((e) => this.renderDevTicket(e));
    // console.log("tic", tic);
    if (tic !== 0) {
      this.setState({ tickets: tic, loading: false });
    }
    const Tick = _.orderBy(this.state.tickets, ["time"], ["desc"]);
    this.setState({ tickets: Tick });
  }

  renderDevTicket = (tickets) => {
    if (tickets.userId.developerId) return tickets;
    else return 0;
  };

  handleInquiries = async (id, open) => {
    try {
      const { data: inquiries } = await viewInquiries(id);
      this.setState({ openTicket: open });
      this.setState({ inquiry: inquiries.ticket, loading: false });
      var DevMsg = _.orderBy(this.state.inquiry.userReplies, ["time"], ["asc"]);
      var AdminMsg = _.orderBy(
        this.state.inquiry.adminReplies,
        ["time"],
        ["asc"]
      );
      this.setState({ sortDevMsg: DevMsg });
      this.setState({ sortAdminMsg: AdminMsg });
      const dev = this.state.sortDevMsg;
      const admin = this.state.sortAdminMsg;

      const concatArr = [...dev, ...admin];
      console.log("concatArr", concatArr);
      var sortaMsg = _.orderBy(concatArr, ["replyId.time", "time"], ["asc"]);
      this.setState({ sortAllMsg: sortaMsg });
      auth.removeOpen();
      auth.setOpen(open);
    } catch (ex) {
      if (ex.response && ex.response.status === 404)
        toast.error("This message has already been deleted.");
    }
  };

  handleReply = async (msg, id) => {
    try {
      const res = await replyTickets(msg, id);
      if (res.status === 200) await this.handleInquiries(id);
    } catch (ex) {
      if (ex.response && ex.response.status === 404)
        toast.error("Something Wrong..!");
    }
  };

  render() {
    // console.log("developers", this.state.developers);
    //console.log("moment2", moment("2020-04-01T19:34:07.418Z").unix());
    //  console.log("buyersssss", this.state.buyers);
    return (
      <DeveloperContext.Provider
        value={{
          ...this.state,
          handlePageChange: this.handlePageChange,
          handlePreviousPageChange: this.handlePreviousPageChange,
          handleNextPageChange: this.handleNextPageChange,
          handleSort: this.handleSort,
          handleSearch: this.handleSearch,

          handleDeveloperDelete: this.handleDeveloperDelete,
          handleScriptDelete: this.handleScriptDelete,
          handleApprovel: this.handleApprovel,
          handleInquiries: this.handleInquiries,
          handleReply: this.handleReply,
        }}
      >
        {this.props.children}
      </DeveloperContext.Provider>
    );
  }
}

const DeveloperConsumer = DeveloperContext.Consumer;
export { DeveloperProvider, DeveloperConsumer, DeveloperContext };
