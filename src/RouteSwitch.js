import React from 'react'
import Main from './pages/Main';
import { BrowserRouter, Routes, Route } from "react-router-dom"

const RouteSwitch = () => {

    return (
        <BrowserRouter>
                <Routes>
                        <Route path="/" element={
                            <Main home={true} />
                        } />

                        <Route path="/cart" element={
                            <Main cart={true} />
                        } />
                </Routes>
        </BrowserRouter>
    )
}

export default RouteSwitch;
