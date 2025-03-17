import { axiosInstanceJson } from '@/api/axios'

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
        console.log(data)
        const formData = new FormData()

        // Convert object properties to FormData
        Object.entries(data).forEach(([key, value]) => {
            // @ts-ignore This will work trust me
            formData.append(key, value)
        })

        // console.log(formData)
        const response = await axiosInstanceJson.postForm(url, formData)
        return response.data
    } catch (error) {
        console.error('Error fetching data:', error)
        throw error
    }
}

export const createEmployee = async (data: any) => {
    return postRequestForm('/employees', data)
}

export const createNewComment = async (data: any, taskId: number) => {
    return postRequest(`/tasks/${taskId}/comments`, data)
}

export const createNewTask = async (data: any) => {
    return postRequest(`/tasks`, data)
}
