import axios from "axios";
import jwt_decode from "jwt-decode";
const token = localStorage.getItem("tokenBhoi");

const baseURL = process.env.REACT_APP_APIURL;
console.log("baseURL", baseURL)
const http = axios.create({
  baseURL: baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

const responseHandler = (config) => {
  return config;
};

const responseErrorHandler = (error) => {
    console.log(error)
  if (error?.response?.data) {
    console.log("errorFromInterceptor1", error.response.data);
    return error?.response;
  } else if (error?.request) {
    console.log("errorFromInterceptor2", error.request);
    return error;
  } else {
    console.log("errorFromInterceptor3", error?.message);
    return error;
  }
};

http.interceptors.request.use((request) => {
    console.log("axios", token)
    console.log(request.url.includes("auth"))
  const tok = token?.split("Bearer")[1];
  console.log("tok", request.url.includes("auth"))
  const decodedJwt = jwt_decode(tok);
  const controller = new AbortController();
  if (request.url.includes("auth")) {
    return request;
  } else if (!decodedJwt) {
    controller.abort();
  } 
  //else if (decodedJwt.exp * 1000 < Date.now()) {
//     controller.abort();
  // } 
   else {
    request.headers = {
        "bearer": tok
    }
    return request;
  }
});

//http.interceptors.response.use(responseHandler, responseErrorHandler);

const httpFile = axios.create({
  baseURL: baseURL,
  responseType: "blob",
});

export { http, httpFile };
