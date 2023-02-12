import React, { useState } from 'react'
import {Route, Router, Routes, useRoutes} from 'react-router-dom'
import './App.css'
import {RouterGuard} from '@/routes/routerGuard'
import Home from "@/pages/Home";
import Login from "@/pages/Login";


function App() {
    const GetRoutes = () => {
        const routes = useRoutes([{
            path:'/home',
            element: <Home/>,
            auth: false
        },{
            path:'/login',
            element: <Login/>
        }])
        return routes
    }

return (
            <GetRoutes />
)
}

export default App
