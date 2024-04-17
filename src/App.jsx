import './App.css'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import LoanApplication from "./components/LoanApplication.jsx";
import LoanConfirmation from "./components/LoanConfirmation.jsx";

function App() {

    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<LoanApplication/>}/>
                    <Route path='/your-application' element={<LoanConfirmation/>}/>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App
