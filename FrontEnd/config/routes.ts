export default [
    {
        path: '/',
        component: 'pages/Home',
        access: 'HOME'
    },
    {
        path: '/home',
        name: 'home',
        component: 'pages/Home',
        access: 'HOME',
        children: [
            {
                path: '/home/test1',
                name: 'test1',
                component: 'pages/Test1',
                access: 'TEST1'
            },
            {
                path: '/home/test2',
                name: 'test2',
                component: 'pages/Test2',
                access: 'TEST2'
            }
        ]
    },
    {
        path: '/login',
        name: 'login',
        component: 'pages/Login/Login',
        access: 'LOGIN'
    },
    {
        path: '*',
        name: 'NotFound',
        component: 'pages/NotFound',
        access: 'DEFAULT'
    }
]