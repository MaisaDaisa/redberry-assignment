import axios from 'axios'

// Constants
// please bear in mind this is not a wise way to store sensitive data especially in client side which can be accessed by anyone
export const token = import.meta.env.VITE_API_TOKEN
export const BaseUrl = 'https://momentum.redberryinternship.ge/api'

// Axios instance
export const axiosInstanceJson = axios.create({
    baseURL: BaseUrl,
    headers: {
        accept: 'application/json',
        // 'Content-Type': 'multipart/form-data',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
    },
})
