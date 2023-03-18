import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import("../views/HomeView.vue")
    },
    {
      path: '/:user',
      name: 'repos',
      component: () => import('../views/ReposView.vue'),
      children: [
        {
        path: "/:user",
        name: "list",
        component: () => import("../components/RepoSection.vue")
      },
      {
        path: "/:user/repos/:repo",
        name: "repo",
        component: () => import("../components/RepoItem.vue")
      }
      ]
    }
  ]
})

export default router
