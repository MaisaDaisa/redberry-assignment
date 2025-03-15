import './App.css'
import MainSection from './layouts/MainSection'
import NavBar from './layouts/NavBar'
import HollowButton from '@/components/Buttons/HollowButton'
import SolidButton from '@/components/Buttons/SolidButton'
import { BrowserRouter, Route, Routes } from 'react-router'
import IndexPage from './pages/IndexPage'
import CreateTaskPage from './pages/CreateTaskPage'

function App() {
    return (
        <>
            <NavBar>
                <HollowButton text="თანამშრომლის შექმნა" onClick={() => {}} />
                <SolidButton
                    text="შექმენი ახალი დავალება"
                    displayPlus
                    onClick={() => {}}
                />
            </NavBar>
            <MainSection>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<IndexPage />} />
                        <Route
                            path="/create-task"
                            element={<CreateTaskPage />}
                        />
                    </Routes>
                </BrowserRouter>
            </MainSection>
        </>
    )
}

export default App
