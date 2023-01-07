import {http} from '../../http-common'


const registerUserpi = async (data) => {
    const response = await http.post("auth/register", data)
    return response
}

export {registerUserpi}