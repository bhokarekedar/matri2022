import { apiurl } from './ApiConstant';
import axios from 'axios';

class HttpService {
    PostData(data, ApiController) {

        const options = {
            // method : method,
            // body : JSON.stringify(data),
            headers: {
                "Content-Type": "application/json",
            },
        };
        return axios.post(apiurl + ApiController, data, options);
    }

    GetData(ApiController) {

        const options = {
            // method : method,
            // body : JSON.stringify(data),
            headers: {
                "Content-Type": "application/json",
            },
        };

        console.log("apiurl", apiurl);
        return axios.get(apiurl + ApiController, options);
    }

    PostData_Multipart(data, ApiController) {
        const options = {
            // method : method,
            // body : JSON.stringify(data),
            headers: { "Content-Type": "multipart/form-data" },
        };
        return axios.post(apiurl + ApiController, data, options);
    }
}


export default new HttpService();
