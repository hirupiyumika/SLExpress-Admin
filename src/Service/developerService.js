import http from "./httpService";
import { apiUrl } from "../Config/Config.json";

const apiEndpoint = apiUrl + "/admin";

/**
 * View Developers
 */

export function getDevelopers() {
  const type = { userType: "developer" };
  return http.post(apiEndpoint + "/" + "getUsers", type);
}

/**
 * Delete Developer
 */

export function deleteDeveloper(id) {
  const data = {
    id: id,
    type: "developer",
  };
  return http.delete(apiEndpoint + "/" + "deleteUser", { data });
}

/**
 * View Scripts
 */

export function getScripts() {
  return http.get(apiEndpoint + "/" + "getScripts");
}

/**
 * Delete Scripts
 */

export function deleteScript(siteId) {
  const data = {
    id: siteId,
    type: "developer",
  };
  // console.log("data", data);
  return http.delete(apiEndpoint + "/" + "deleteUser", { data });
}

/**
 * Approve Scripts
 */

export function approveScript(scriptid) {
  console.log("scriptid", scriptid);
  const data = { scriptId: scriptid };
  return http.patch(apiEndpoint + "/" + "approveScript", data);
}

/**
 * View Developer Tickets
 */

export function getTickets() {
  // const type = { userType: "developer" };
  return http.get(apiEndpoint + "/" + "getTickets");
}

export function viewInquiries(ticketid) {
  //console.log("ticketid", ticketid);
  const id = { ticketId: ticketid };
  return http.post(apiEndpoint + "/" + "getTicket", id);
}

export function replyTickets(msg, id) {
  console.log("ticketid", msg, id);
  const data = { reply: msg, ticketId: id };
  return http.put(apiEndpoint + "/" + "ticketReply", data);
}
