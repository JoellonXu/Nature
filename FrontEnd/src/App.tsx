import React, {Suspense} from 'react'
import {Button, Form, Spin} from "antd";
import {Routes, Route, useRoutes} from "react-router-dom";
import { BrowserRouter } from 'react-router-dom';
import Login from "@/view/Login/Login";
import NotFound from "@/view/NotFound";
import Home from "@/view/Home";
import routes from '../config/routes';
export const lazyLoad = (Comp: React.LazyExoticComponent<any>): React.ReactNode => {
        return  (
            <Suspense
            fallback={
                <Spin
                size='large'
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
                />
            }
            >
               <Comp/>
            </Suspense>
        )
}
function App() {
    // 获取路由
    const getRouter = (routes: object[]) => {
           routes.forEach((item)=>{
            if(Object.hasOwn(item, 'children') && item.children.length){
                
            }
           })
    }
  
    console.log('routes', routes)
 const route =  routes.map(item=>(
        {
           path: item.path,
           name: item.name,
           element: lazyLoad( React.lazy(()=> import(`./${item.component}`)))
        }
 ))
 console.log('route!', route)
 const renderRoute = useRoutes(route)
    return (
        <div className='APP'>
         {renderRoute}
        </div>

    )
}
export default App