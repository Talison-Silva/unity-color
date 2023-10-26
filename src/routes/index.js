import { createWebHistory,createRouter } from "vue-router";
import routes from '@/routes/base';

console.log(routes)

const router=createRouter({
    history:createWebHistory(),
    routes:routes
})

export default router;