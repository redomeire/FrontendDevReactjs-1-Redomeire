import axios from "axios";

const reqresInstance = axios.create({
    baseURL: 'https://reqres.in/api'
})

const dicodingInstance = axios.create({
    baseURL: 'https://restaurant-api.dicoding.dev'
})

export { reqresInstance, dicodingInstance }
