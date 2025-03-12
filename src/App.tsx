import './App.css'
import MainSection from './layouts/MainSection'
import NavBar from './layouts/NavBar'
import HollowButton from '@/components/Buttons/HollowButton'
import SolidButton from '@/components/Buttons/SolidButton'
import { BrowserRouter, Route, Routes } from 'react-router'
import IndexPage from './pages/IndexPage'

function App() {
    return (
        <>
            <NavBar>
                <HollowButton text="თანამშრომლის შექმნა" />
                <SolidButton text="შექმენი ახალი დავალება" />
            </NavBar>
            <MainSection>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<IndexPage />} />
                    </Routes>
                </BrowserRouter>
            </MainSection>
        </>
    )
}

export default App
