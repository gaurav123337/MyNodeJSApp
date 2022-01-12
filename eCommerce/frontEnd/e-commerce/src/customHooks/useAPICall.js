// import axios from "axios";
// const baseURI = "http://localhost:5000";

// export default function useAPICall() {
//   const fetchAPI = async (request, routePath, token, headerVal = "*") => {
//     await axios.post(
//       baseURI + routePath, request, {
//       headers: {
//         "Access-Control-Allow-Origin": headerVal,
//         "Authorization": "" || "Bearer " + token
//       },

//     }).then((response) => {
//       console.log(response, "response");
//     });
//   }
//   return [fetchAPI];
// }


import axios from "axios";
const baseURI = "http://localhost:5000";

// export function useAPICall() {
//   const fetchAPI = async (request, routePath, token, headerVal = "*") => {
//     const resp = await axios.post(
//       baseURI + routePath, request, {
//       headers: {
//         "Access-Control-Allow-Origin": headerVal,
//         "Authorization": "Bearer " + token
//       },

//     });
//     console.log(resp)
//     return resp.data;
//   }
//   return [fetchAPI];
// }


export let postAPI = async (request, routePath, token, headerVal = "*") => {
  const resp = await axios.post(
    baseURI + routePath, request, {
    headers: {
      "Access-Control-Allow-Origin": headerVal,
      "Authorization": "Bearer " + token
    },

  });
  console.log(resp)
  // return (resp.data);
  return (resp);
}


export let getAPI = async (routePath, token, headerVal = "*") => {
  const resp = await axios.get(
    baseURI + routePath, {
    headers: {
      "Access-Control-Allow-Origin": headerVal,
      "Authorization": null || "Bearer " + token
    },

  });
  console.log(resp)
  return resp.data;
}
