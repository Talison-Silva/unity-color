import modules from './modules/index'

export default [
    {
        path:'/',
        component:()=>import('@/views/home.vue')
    }
].concat(modules())