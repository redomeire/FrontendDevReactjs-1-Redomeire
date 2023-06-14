import { reqresInstance } from "../../../config/axiosInstance"
import { Auth } from "../../../models/Auth"

const login = (data: Auth) => {
    return reqresInstance.post('/login', {
        ...data
    })
}

export { login }
