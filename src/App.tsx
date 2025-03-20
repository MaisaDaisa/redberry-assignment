import './App.css'
import MainSection from './layouts/MainSection'
import NavBar from './layouts/NavBar'
import HollowButton from '@/components/Buttons/HollowButton'
import SolidButton from '@/components/Buttons/SolidButton'
import { Route, Routes, useNavigate } from 'react-router'
import IndexPage from './pages/IndexPage'
import CreateTaskPage from './pages/CreateTaskPage'
import DisplayTask from './pages/DisplayTask'
import FullScreenBlur from './layouts/FullScreenBlur/FullScreenBlur'
import { useEffect, useState } from 'react'
import FullScreenWrapper from './layouts/FullScreenBlur/FullScreenWrapper'
import { departmentSchema, statusSchema } from './api/schemas/apiSchemas'
import { appContext } from './contexts/AllPages/appContext'
import { getAllDepartments, getAllStatuses } from './api/getRequest'

function App() {
    const [blurActive, setIsBlurActive] = useState(false)
    const [departments, setDepartments] = useState<departmentSchema[]>([])
    const [statuses, setStatuses] = useState<statusSchema[]>([])

    useEffect(() => {
        const fetchData = async () => {
            setDepartments(await getAllDepartments())
            setStatuses(await getAllStatuses())
        }
        fetchData()
    }, [])

    const navigate = useNavigate()
    return (
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
                    <Route path="/create-task" element={<CreateTaskPage />} />
                    <Route path="/task/:taskId" element={<DisplayTask />} />
                </Routes>
            </MainSection>
            <FullScreenBlur
                isActive={blurActive}
                setActiveState={setIsBlurActive}
            >
                <FullScreenWrapper
                    toggleActive={() => setIsBlurActive(false)}
                />
            </FullScreenBlur>
        </appContext.Provider>
    )
}

export default App
