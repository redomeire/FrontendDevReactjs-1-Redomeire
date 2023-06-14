import { dicodingInstance } from "../../../config/axiosInstance"

const getRestaurantById = (id?: string) => {
    return dicodingInstance.get(`/detail/${id}`)
}

export { getRestaurantById }
