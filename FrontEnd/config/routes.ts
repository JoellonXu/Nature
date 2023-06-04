export default [
    {
        path: '/',
        component: 'view/Home'
    },
    {
        path: '/home',
        name: 'home',
        component: 'view/Home',
        children: [
            {
                path: '/home/test1',
                name: 'test1',
                component: 'view/Test1'
            },
            {
                path: '/home/test2',
                name: 'test2',
                component: 'view/Test2'
            }
        ]
    },
    {
        path: '/login',
        name: 'login',
        component: 'view/Login/Login'
    },
    {
        path: '*',
        name: 'NotFound',
        component: 'view/NotFound'
    }
]