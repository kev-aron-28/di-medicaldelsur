import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routerOptions = [
  { path: "/", name: "Home" },
  {path: "/acerca", name:"Acerca"},
  {path: "/contacto", name:"Contact"},
  { path: "*", redirect: { name: "Home" } }
]

const routes = routerOptions.map(r => {
  return {
    ...r,
    component: () => import(`@/views/${r.name}/index.vue`)
  };
});

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
