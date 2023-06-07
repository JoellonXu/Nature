import React, {Suspense} from 'react'
import {Button, Form, Spin} from "antd";
import {Routes, Route, useRoutes} from "react-router-dom";
import { BrowserRouter } from 'react-router-dom';
import Login from "@/pages/Login/Login";
import NotFound from "@/pages/NotFound";
import Home from "@/pages/Home";
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
interface routerType  {
    path: string,
    component: string,
    name: string,
    children?: routerType
}
function App() {
    // 获取路由
    const router: any[] = []
    const getRouter = (routes: routerType[]) => {
      for(let i = 0; i< routes.length; i++){
         router[i] = {
            path: routes[i].path,
            name: routes[i].name || '',
            element: lazyLoad(React.lazy(()=> import(`./${routes[i].component}`))),
            childrem: routes[i].children || []
         }
         if(Object.hasOwn(routes[i], 'children')){
          // @ts-ignore
            getRouter(routes[i].children)
         }
      }
      return router
    }
          // @ts-ignore
 const renderRoute = useRoutes(getRouter(routes))
    return (
        <div className='APP'>
         {renderRoute}
        </div>

    )
}
export default App