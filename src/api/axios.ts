import axios from 'axios'

// Constants
export const token = import.meta.env.VITE_API_TOKEN
export const BaseUrl = 'https://momentum.redberryinternship.ge/api'

// Axios instance
export const axiosInstanceJson = axios.create({
    baseURL: BaseUrl,
    headers: {
        accept: 'application/json',
        Authorization: `Bearer ${token}`,
    },
})
