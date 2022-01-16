import React from 'react'
import Main from './pages/Main';
import {products} from './productData'
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
                        {
                            products.map((item) => 
                                <Route path={`/${item.id}`} key={item.id} element={
                                    <Main item={item} />
                                } />
                            )
                        }
                </Routes>
        </HashRouter>
    )
}

export default RouteSwitch;
