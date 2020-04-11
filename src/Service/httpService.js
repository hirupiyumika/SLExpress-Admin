import axios from "axios";
import { toast } from "react-toastify";

axios.defaults.headers.common["Content-Type"] = "application/json";

axios.interceptors.response.use(null, (error) => {
  const expectedError =
    error.response &&
    error.response.status >= 400 &&
    error.response.status < 500;
  if (!expectedError) {
    console.log("Logging the error", error);
    toast.error("An unexpected error occurred.");
  }
  return Promise.reject(error);
});

// axios({
//   url: "http://slexpress.tk:3000/admin/getCompanyDetails",
//   method: "get",
//   // data: {
//   // content: " Mission added",
//   //  ticketId: "5e8eaefff85bf12c506bd3d5",
//   //   lastname: "Saubhagyaqsd",
//   //   email: "yasmikasyasssdhq@gmail.com",
//   //   password: "qqqqqqqsdq",
//   //   phone: 1501762822
//   //},

//   headers: {
//     "Content-Type": "application/json",
//     Authorization:
//       "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI1ZTIwMDczNDkzNWQ0ZDNmMmI0NWE0OTMiLCJlbWFpbCI6ImNjY2NAZ21haWwuY29tIiwiaWF0IjoxNTg2NTAxOTAxLCJleHAiOjE1ODY1MDU1MDF9.pRhpVi5Uz0G80QfRPS5ks9xjAgTwhyAukJJVobej-ik",
//   },
// })
//   .then((response) => console.log(response))
//   .catch((error) => {
//     console.log(error);
//   });
// console.log("H");

export function setJwt(jwt) {
  axios.defaults.headers.common["Authorization"] = "Bearer " + jwt;
}

export default {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
  patch: axios.patch,
  setJwt,
};
