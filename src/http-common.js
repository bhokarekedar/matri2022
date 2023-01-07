import axios from "axios";

const baseURL = process.env.REACT_APP_APIURL;

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
    console.log(localStorage.getItem("tokenBhoi"))
    if (!request.url.includes("auth")) {
        request.headers = {
            "bearer": localStorage.getItem("tokenBhoi")
        }
        return request;
      }
      else {
        request.headers = {
            "bearer": ''
        }
        return request;
      }
    
});

http.interceptors.response.use(responseHandler, responseErrorHandler);



export { http };
