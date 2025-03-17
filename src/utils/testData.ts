import {
    departmentSchema,
    employeeSchema,
    prioritySchema,
    statusSchema,
} from '@/api/apiSchemas'

export const testStatus: statusSchema[] = [
    {
        id: 1,
        name: 'დასაწყები',
    },
    {
        id: 2,
        name: 'პროგრესში',
    },
    {
        id: 3,
        name: 'მზად ტესტირებისთვის',
    },
    {
        id: 4,
        name: 'დასრულებული',
    },
]

export const testPriorities: prioritySchema[] = [
    {
        id: 1,
        name: 'დაბალი',
        icon: 'https://momentum.redberryinternship.ge/storage/priority-icons/Low.svg',
    },
    {
        id: 2,
        name: 'საშუალო',
        icon: 'https://momentum.redberryinternship.ge/storage/priority-icons/Medium.svg',
    },
    {
        id: 3,
        name: 'მაღალი',
        icon: 'https://momentum.redberryinternship.ge/storage/priority-icons/High.svg',
    },
]

export const testEmployees: employeeSchema[] = [
    {
        id: 1,
        name: 'John',
        surname: 'Doe',
        avatar: 'https://picsum.photos/300/300',
        department_id: 1,
    },
    {
        id: 2,
        name: 'Jane',
        surname: 'Smith',
        avatar: 'https://picsum.photos/300/300',
        department_id: 2,
    },
    {
        id: 3,
        name: 'Alice',
        surname: 'Johnson',
        avatar: 'https://picsum.photos/300/300',
        department_id: 1,
    },
    {
        id: 4,
        name: 'Bob',
        surname: 'Brown',
        avatar: 'https://picsum.photos/300/300',
        department_id: 3,
    },
    {
        id: 5,
        name: 'Charlie',
        surname: 'Davis',
        avatar: 'https://picsum.photos/300/300',
        department_id: 2,
    },
]

export const testDepartments: departmentSchema[] = [
    {
        id: 1,
        name: 'ადმინისტრაციის დეპარტამენტი',
    },
    {
        id: 2,
        name: 'ადამიანური რესურსების დეპარტამენტი',
    },
    {
        id: 3,
        name: 'ფინანსების დეპარტამენტი',
    },
    {
        id: 4,
        name: 'გაყიდვები და მარკეტინგის დეპარტამენტი',
    },
    {
        id: 5,
        name: 'ლოჯოსტიკის დეპარტამენტი',
    },
    {
        id: 6,
        name: 'ტექნოლოგიების დეპარტამენტი',
    },
    {
        id: 7,
        name: 'მედიის დეპარტამენტი',
    },
]
