import { axiosInstanceJson } from '@/api/axios'
import {
    commentPostSchema,
    employeePostSchema,
    taskPostSchema,
} from './schemas/apiPostSchemas'

export const postRequest = async (url: string, data: any) => {
    try {
        const response = await axiosInstanceJson.post(url, data)
        return response.data
    } catch (error) {
        console.error('Error fetching data:', error)
        throw error
    }
}

export const postRequestForm = async (url: string, data: any) => {
    try {
        const response = await axiosInstanceJson.postForm(url, data)
        return response.data
    } catch (error) {
        console.error('Error fetching data:', error)
        throw error
    }
}

export const createEmployee = async (data: employeePostSchema) => {
    return postRequestForm('/employees', data)
}

export const createNewComment = async (
    data: commentPostSchema,
    taskId: number
) => {
    return postRequest(`/tasks/${taskId}/comments`, data)
}

export const createNewTask = async (data: taskPostSchema) => {
    return postRequest(`/tasks`, data)
}
