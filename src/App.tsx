import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from './pages/Home.tsx';
import Page1 from './pages/Page1.tsx';
import Page2 from './pages/Page2.tsx';
import About from "./pages/About.tsx";
import Email from "./pages/Email.tsx";


const App: React.FC = () => {

    console.log(123)
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='*' element={<Home/>}/>
                    <Route path='/page1' element={<Page1/>}/>
                    <Route path='/page2' element={<Page2/>}/>
                    <Route path='/about' element={<About/>}/>
                    <Route path='/email' element={<Email/>}/>
                </Routes>
            </BrowserRouter>
        </>
    )
};

export default App;


