import React, {useEffect, useState} from "react";
import routes from '@/routes/index'
import {Navigate, NavigateFunction, useLocation, useNavigate, useRoutes} from "react-router-dom";

export interface RouteObject {
  path?: string,
  auth?: boolean,
  element?: React.ReactNode,
    children?:RouteObject[],
    index?:boolean,

}
// 查询路由 参数1：查询路径 参数2：完整路径
function searchRouteDetail(path: string, routes: RouteObject[]):RouteObject | null
{
    for(let item of routes){
        if(item.path === path) return item
        if(item.children){
            return searchRouteDetail(path, item.children)
        }
    }
    return null
}

// 全局路由守卫
function guard(location: Location, navigate: NavigateFunction, routes: RouteObject[]){
    const {pathname} = location
    // 找到对应的路由信息，判断有没有权限控制
    const routeDetail = searchRouteDetail(pathname, routes)
    // 没有找到路由， 跳转404
    if(!routeDetail){
        return navigate('/404')
    }
    // 如果需要权限验证
    if(routeDetail.auth){
        const token = localStorage.getItem('blogtoken')
        if(!token){
            return navigate(-1)
        }
    }
}
export const RouterGuard = (routes:any) => {
    // const location = useLocation()
    // const navigate = useNavigate()
    // let [goto, setGoto] = useState()
    // useEffect(()=>{
    //     // @ts-ignore
    //     setGoto(guard(location, navigate, routes))
    // }, [location, navigate, routes])
    // const Route = useRoutes(routes)
    // return goto ? Route : null
    // return routes
    const route = useRoutes(routes)
return route}