import {http} from '../../http-common'
 

const userInfoApi = async () => {
    const response = await http.post("v1/users/ownProfile");
    return response
}

const getAllUsersApi = async (pageNumber) => {
    const response = await http.get(`v1/users/getAllUsers?page=${pageNumber}`);
    console.log("responsefrom api", response)
    return response
}

export {userInfoApi, getAllUsersApi}