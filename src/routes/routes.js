export const routes = [{
    path: '/',
},
{
    path: "/user/:id",
},
{
    path: "/user/:id/key-data",
    component: 'Welcome'
},
{
    path: "/user/:id/activity",
    component: 'welcome'
},
{
    path: "/user/:id/average-sessions",
    component: 'Welcome'
},
{
    path: "/user/:id/today-score",
    component: 'welcome'
},
{
    path: "/user/:id/performance",
    component: 'welcome'
},
{
    path: '*', // 404
    component: 'Error404',
    noExact: true, // all route "exact" by default
}
]
