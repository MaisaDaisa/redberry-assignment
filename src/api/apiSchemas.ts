export type statusSchema = {
    id: number
    name: string
}

export type departmentSchema = {
    id: number
    name: string
}

export type prioritySchema = {
    id: number
    name: string
    icon: string
}

export type employeeSchema = {
    id: number
    name: string
    surname: string
    avatar: string
    department_id: number
}
