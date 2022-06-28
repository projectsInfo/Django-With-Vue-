const routes=[
    {path:'/home',component:home},
    {path:'/employee',component:employee},
    {path:'/department',component:department}
]

const router = VueRouter.createRouter({

    history: VueRouter.createWebHashHistory(),
    routes
})

// const app = new Vue({
//     router
// }).$mount('#app')


const app = Vue.createApp({})
// Make sure to _use_ the router instance to make the
// whole app router-aware.
app.use(router)

app.mount('#app')