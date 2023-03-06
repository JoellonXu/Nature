import React, {Suspense} from "react";
import type { RouteObject } from "react-router-dom";
import { Spin } from "antd";

function lazyLoad(Comp: React.LazyExoticComponent<any>): React.ReactNode {

    return (
       <Suspense
        fallback={
            <Spin
              size='large'
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}/>
        } >
            <Comp />
        </Suspense>
    )
}

const routes: RouteObject[] = [
    {
        path: '/',
        element: lazyLoad(React.lazy(()=> import('@/view/Home'))),
        children: []
    },
    {
        path: '/login',
        element: lazyLoad(React.lazy(()=> import('@/view/Login/Login'))),
    },
    {
        path: '*',
        element: lazyLoad(React.lazy(()=> import('@/view/NotFound')))
    }

]
export default routes