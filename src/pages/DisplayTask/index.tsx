import AsideWrapper from './wrappers/AsideWrapper'
import DepartmentRounded from '@/components/DepartmentRounded'
import TaskPriorityBordered from '@/components/TaskPriorityBordered'
import DetailsRow from './components/DetailsRow'
import pieChart from '@/assets/imgs/pieChart.svg'
import calendar from '@/assets/imgs/calendar.svg'
import person from '@/assets/imgs/person.svg'
import { useContext, useEffect, useState } from 'react'
import { getTaskById } from '@/api/getRequest'
import { useParams } from 'react-router'
import { taskSchema } from '@/api/schemas/apiSchemas'
import { appContext } from '@/contexts/AllPages/appContext'

import TaskDropDownWrapper from './wrappers/TaskDropDownWrapper'

const weekDays = ['ორშ', 'სამ', 'ოთხ', 'ხუთ', 'პარ', 'შაბ', 'კვი']

export const index = () => {
    const [task, setTask] = useState<taskSchema | null>(null)
    let { taskId } = useParams<{ taskId: string }>()
    const numericTaskId = Number(taskId)

    const departmentValues = useContext(appContext)

    useEffect(() => {
        const fetchData = async () => {
            if (numericTaskId && !isNaN(numericTaskId)) {
                const taskData = await getTaskById(numericTaskId)
                setTask(taskData)
            }
        }
        fetchData()
    }, [numericTaskId])

    const dueDate: Date | null = task ? new Date(task.due_date) : new Date()

    return (
        <>
            {task && (departmentValues?.departments?.length ?? 0) > 0 && (
                <section className="flex flex-row justify-between">
                    <div className="flex max-w-[715px] flex-col items-start gap-16">
                        <div className="flex flex-col gap-[26px]">
                            <div className="flex flex-col gap-3 py-[10px]">
                                <div className="flex items-center gap-[18px]">
                                    <TaskPriorityBordered
                                        icon={task.priority.icon}
                                        name={task.priority.name}
                                        id={task.priority.id}
                                    />
                                    <DepartmentRounded
                                        departmentId={task?.department.id}
                                        departmentText={task?.department.name}
                                    />
                                </div>
                                <h1 className="font-Inter text-[34px] font-semibold">
                                    {/* Redberry-ს საიტის ლენდინგის დიზაინი */}
                                    {task.name}
                                </h1>
                            </div>
                            <p className="line text-lg leading-7 text-black">
                                {/* მიზანია რომ შეიქმნას თანამედროვე, სუფთა და
                                ფუნქციონალური დიზაინი, რომელიც უზრუნველყოფს
                                მარტივ ნავიგაციას და მკაფიო ინფორმაციის
                                გადაცემას. დიზაინი უნდა იყოს ადაპტირებადი
                                (responsive), გამორჩეული ვიზუალით, მინიმალისტური
                                სტილით და ნათელი ტიპოგრაფიით. */}
                                {task.description}
                            </p>
                        </div>
                        <div className="flex flex-col items-start gap-[18px]">
                            <h3 className="py-[10px] text-2xl font-semibold text-[#2A2A2A]">
                                დავალების დეტალები
                            </h3>
                            <div className="flex flex-col">
                                <DetailsRow imgUrl={pieChart} text="სტატუსი">
                                    <TaskDropDownWrapper
                                        task_id={numericTaskId}
                                        chosenStatusIdProp={task?.status?.id}
                                    />
                                </DetailsRow>
                                <DetailsRow imgUrl={person} text="თანამშრომელი">
                                    <div className="flex flex-row items-center gap-[6px]">
                                        <img
                                            src={task.employee.avatar}
                                            alt={task.employee.name}
                                            className={`h-8 w-8 rounded-full object-cover object-center`}
                                        />
                                        <div className="relative">
                                            <p
                                                className={`font-sm text-blackish-shades text-sm font-normal`}
                                            >
                                                {task.employee.name +
                                                    ' ' +
                                                    task.employee.surname}
                                            </p>
                                            <p className="text-gray-small absolute -top-4 text-[11px] font-light text-nowrap">
                                                {
                                                    departmentValues
                                                        ?.departments[
                                                        task.department.id
                                                    ].name
                                                }
                                            </p>
                                        </div>
                                    </div>
                                </DetailsRow>
                                <DetailsRow
                                    imgUrl={calendar}
                                    text="დავალების ვადა"
                                >
                                    <div>
                                        <p className="text-blackish-shades text-sm">
                                            {weekDays[dueDate?.getDay()]} -{' '}
                                            {`${dueDate?.getDate()}/${dueDate?.getMonth()}/${dueDate?.getFullYear()}`}
                                        </p>
                                    </div>
                                </DetailsRow>
                            </div>
                        </div>
                    </div>
                    <AsideWrapper taskId={numericTaskId} />
                </section>
            )}
        </>
    )
}

export default index
