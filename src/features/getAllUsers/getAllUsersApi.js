import {http} from '../../http-common'

const getAllUsersData = async (pageNumber) => {
    const response = await http.get(`users/getAllUsers?page=${pageNumber}`)
}

export {getAllUsersData}