import './App.css'
import MainSection from '@/layouts/MainSection'
import NavBar from '@/layouts/NavBar'
import HollowButton from '@/components/Buttons/HollowButton'
import SolidButton from '@/components/Buttons/SolidButton'
import { Route, Routes, useNavigate } from 'react-router'
import IndexPage from '@/pages/IndexPage'
import CreateTaskPage from '@/pages/CreateTaskPage'
import DisplayTask from '@/pages/DisplayTask'
import FullScreenBlur from '@/layouts/FullScreenBlur/FullScreenBlur'
import { useEffect, useState } from 'react'
import FullScreenWrapper from '@/layouts/FullScreenBlur/FullScreenWrapper'
import { departmentSchema, statusSchema } from '@/api/schemas/apiSchemas'
import { appContext } from '@/contexts/AllPages/appContext'
import { getAllDepartments, getAllStatuses } from './api/getRequest'
import fullScreenContext from '@/contexts/FullScreen/fullScreenContext'
import {
    zodEmployeeFormSchema,
    zodEmployeeFormSchemaType,
} from './api/zodSchemas/zod.employeePostSchema'
import { FormProvider, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

function App() {
    const [blurActive, setIsBlurActive] = useState(false)
    const [departments, setDepartments] = useState<departmentSchema[]>([])
    const [statuses, setStatuses] = useState<statusSchema[]>([])

    const methods = useForm<zodEmployeeFormSchemaType>({
        mode: 'onChange',
        delayError: 500,
        resolver: zodResolver(zodEmployeeFormSchema),
        defaultValues: {
            department_id: undefined,
            avatar: undefined,
            name: '',
            surname: '',
        },
    })

    const toggleBlur = () => {
        setIsBlurActive(!blurActive)
    }

    useEffect(() => {
        if (!blurActive) {
            methods.reset()
        }
    }, [blurActive])

    useEffect(() => {
        const fetchData = async () => {
            setDepartments(await getAllDepartments())
            setStatuses(await getAllStatuses())
        }
        fetchData()
    }, [])

    const navigate = useNavigate()
    return (
        <fullScreenContext.Provider value={{ toggleFullScreen: toggleBlur }}>
            <appContext.Provider
                value={{ departments: departments, statuses: statuses }}
            >
                <NavBar>
                    <HollowButton
                        text="თანამშრომლის შექმნა"
                        onClick={() => setIsBlurActive(true)}
                    />
                    <SolidButton
                        text="შექმენი ახალი დავალება"
                        displayPlus
                        onClick={() => navigate('/create-task')}
                    />
                </NavBar>
                <MainSection>
                    <Routes>
                        <Route path="/" element={<IndexPage />} />
                        <Route
                            path="/create-task"
                            element={<CreateTaskPage />}
                        />
                        <Route path="/task/:taskId" element={<DisplayTask />} />
                    </Routes>
                </MainSection>

                <FormProvider {...methods}>
                    <FullScreenBlur
                        isActive={blurActive}
                        setActiveState={setIsBlurActive}
                    >
                        <FullScreenWrapper
                            toggleActive={() => setIsBlurActive(false)}
                        />
                    </FullScreenBlur>
                </FormProvider>
            </appContext.Provider>
        </fullScreenContext.Provider>
    )
}

export default App
