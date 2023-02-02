import { lazy } from "react";
import {Navigate, RouteObject} from "react-router-dom";
const Home = lazy(()=>import('@/pages/Home'))
const Login = lazy(()=> import('@/pages/Login'))
const NotFound = lazy(()=> import('@/pages/NotFound'))

const routes: RouteObject[] = [
    {path: '/home', element: <Home/>},
    {path: '/Login', element: <Login/>},
    {path: '/404', element: <NotFound/>}
]

export  default  routes