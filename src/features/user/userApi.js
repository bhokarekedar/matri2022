import {http} from '../../http-common'
 

const userInfoApi = async () => {
    const response = await http.post("v1/users/ownProfile");
    return response
}

const getAllUsersApi = async () => {
    const response = await http.get(`v1/users/getAllUsers?page=${2}`);
    return response
}
const getUserByIdApi = async (data) => {
    console.log("data", data);
    const response = await http.post(`v1/users/userProfile`, data);
    return response
}
export {userInfoApi, getAllUsersApi, getUserByIdApi}