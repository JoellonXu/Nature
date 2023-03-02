import React from 'react'
import {Button, Form} from "antd";
import {Routes, Route} from "react-router-dom";
import Login from "@/view/Login/Login";
import NotFound from "@/view/NotFound";
import Home from "@/view/Home";
import GlobalStyled from "./style"
function App() {
    return (
        <div className='APP'>
         <header className='APP-header'>
            <Routes>
                <Route path='/login' element={<Login/>}></Route>
                <Route path='/home' element={<Home/>}></Route>
                <Route path='*' element={<NotFound />}></Route>
            </Routes>
         </header>
        </div>

    )
}
export default App