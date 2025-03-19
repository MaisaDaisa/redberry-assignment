import { Comment } from './components/CommentsComponents/Comment'
import CommentTextArea from './components/CommentsComponents/CommentTextArea'
import DepartmentRounded from '@/components/DepartmentRounded'
import TaskPriorityBordered from '@/components/TaskPriorityBordered'
import DetailsRow from './components/DetailsRow'

import pieChart from '@/assets/imgs/pieChart.svg'
import calendar from '@/assets/imgs/calendar.svg'
import person from '@/assets/imgs/person.svg'
import { useContext, useEffect, useState } from 'react'
import { getTaskById } from '@/api/getRequest'
import { useParams } from 'react-router'
import { taskSchema } from '@/api/apiSchemas'
import { mainContext } from '@/contexts/mainContext'
import { WeeksGeorgian } from '@/enums/dateEnums'
import DropDown from '@/components/DropDown/DropDown'

const weekDays = [
    WeeksGeorgian.Sunday,
    WeeksGeorgian.Monday,
    WeeksGeorgian.Tuesday,
    WeeksGeorgian.Wednesday,
    WeeksGeorgian.Thursday,
    WeeksGeorgian.Friday,
    WeeksGeorgian.Saturday,
]

export const index = () => {
    const [task, setTask] = useState<taskSchema | null>(null)
    let { taskId } = useParams<{ taskId: string }>()

    const departmentValues = useContext(mainContext)
    console.log(departmentValues)

    useEffect(() => {
        const fetchData = async () => {
            if (taskId && !isNaN(Number(taskId))) {
                const taskData = await getTaskById(Number(taskId))
                setTask(taskData)
            }
        }
        fetchData()
    }, [taskId])

    const dueDate: Date | null = task ? new Date(task.due_date) : new Date()

    return (
        <>
            {/* {!task == null && departmentValues.length > 0 ? ( */}
            {task && departmentValues?.departments.length > 0 && (
                <section className="flex flex-row justify-between">
                    <div className="flex max-w-[715px] flex-col items-start gap-16">
                        <div className="flex flex-col gap-[26px]">
                            <div className="flex flex-col gap-3 py-[10px]">
                                <div className="flex items-center gap-[18px]">
                                    <TaskPriorityBordered />
                                    <DepartmentRounded
                                        departmentId={task?.department.id}
                                        departmentText="დიზაინი"
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
                                    <div></div>
                                    <DropDown control={} />
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
                    <aside className="isolate mt-[60px] h-[975px] w-[741px] overflow-hidden rounded-[10px] px-[45px] py-[40px]">
                        <CommentTextArea />
                        <div className="mt-[66px] flex h-[calc(100%-166px)] flex-col items-start gap-10">
                            <div className="flex items-center gap-[7px]">
                                <h4 className="text-xl font-semibold text-black">
                                    კომენტარები
                                </h4>
                                <div className="bg-purple-accent flex h-[22px] w-[30px] items-center justify-center rounded-full p-[10px]">
                                    <p className="font-sm font-medium text-white">
                                        3
                                    </p>
                                </div>
                            </div>
                            <div className="no-scrollbar flex h-full flex-col gap-10 overflow-y-auto">
                                <Comment />
                                <Comment />
                                <Comment />
                            </div>
                        </div>
                    </aside>
                </section>
            )}
        </>
    )
}

export default index
