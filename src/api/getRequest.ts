import { AxiosInstance } from 'axios'
import { axiosInstanceJson } from './axios'

export const getRequest = async (url: string, axiosInstance: AxiosInstance) => {
    try {
        const response = await axiosInstance.get(url)
        return response.data
    } catch (error) {
        console.error('Error fetching data:', error)
        throw error
    }
}

export const getAllStatuses = async () => {
    return getRequest('/statuses', axiosInstanceJson)
}

export const getAllPriorities = async () => {
    return getRequest('/priorities', axiosInstanceJson)
}

export const getAllDepartments = async () => {
    return getRequest('/departments', axiosInstanceJson)
}

export const getAllEmployees = async () => {
    return getRequest('/employees', axiosInstanceJson)
}

// Tasks
export const getAllTasks = async () => {
    return getRequest(`/tasks`, axiosInstanceJson)
}

export const getTaskComments = async (taskId: number) => {
    return getRequest(`/tasks/${taskId}/comments`, axiosInstanceJson)
}

export const getTaskById = async (taskId: number) => {
    return getRequest(`/tasks/${taskId}`, axiosInstanceJson)
}
