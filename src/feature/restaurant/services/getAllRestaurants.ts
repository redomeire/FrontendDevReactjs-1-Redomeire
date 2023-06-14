import { dicodingInstance } from "../../../config/axiosInstance"

const getAllRestaurants = (value?: string) => {
    return dicodingInstance.get(`/search?q=${value}`)
}

export { getAllRestaurants }
