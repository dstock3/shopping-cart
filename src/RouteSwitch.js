import React from 'react'
import Main from './pages/Main';
import { HashRouter, Routes, Route } from "react-router-dom"

const RouteSwitch = () => {

    return (
        <HashRouter>
                <Routes>
                        <Route path="/" element={
                            <Main home={true} />
                        } />

                        <Route path="/cart" element={
                            <Main cart={true} />
                        } />
                </Routes>
        </HashRouter>
    )
}

export default RouteSwitch;
