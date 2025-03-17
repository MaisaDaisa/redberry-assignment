import './App.css'
import MainSection from './layouts/MainSection'
import NavBar from './layouts/NavBar'
import HollowButton from '@/components/Buttons/HollowButton'
import SolidButton from '@/components/Buttons/SolidButton'
import { Route, Routes, useNavigate } from 'react-router'
import IndexPage from './pages/IndexPage'
import CreateTaskPage from './pages/CreateTaskPage'
import FullScreenBlur from './layouts/FullScreenBlur/FullScreenBlur'
import { useEffect, useState } from 'react'
import FullScreenWrapper from './layouts/FullScreenBlur/FullScreenWrapper'
import { departmentSchema } from './api/apiSchemas'
import { mainContext } from './contexts/mainContext'
import { getAllDepartments } from './api/getRequest'

function App() {
    const [blurActive, setIsBlurActive] = useState(false)
    const [departments, setDepartments] = useState<departmentSchema[]>([])

    useEffect(() => {
        const fetchData = async () => {
            setDepartments(await getAllDepartments())
        }
        fetchData()
    }, [])

    const navigate = useNavigate()
    return (
        <mainContext.Provider value={departments}>
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
                </Routes>
            </MainSection>
            <FullScreenBlur
                isActive={blurActive}
                setActiveState={setIsBlurActive}
            >
                <FullScreenWrapper />
            </FullScreenBlur>
        </mainContext.Provider>
    )
}

export default App
