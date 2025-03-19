import { axiosInstanceJson } from './axios'
import { changeTaskStatusSchema } from './schemas/apiPutSchema'

export const putRequest = async (url: string, data: any) => {
    try {
        const response = await axiosInstanceJson.put(url, data)
        return response.data
    } catch (error) {
        console.error('Error fetching data:', error)
        throw error
    }
}

export const changeTaskStatus = async (
    data: changeTaskStatusSchema,
    taskId: number
) => {
    return putRequest(`/tasks/${taskId}`, data)
}
