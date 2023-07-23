import Main from "@/pages/Main";
import PostPage from "@/pages/PostPage";
import AboutPage from "@/pages/AboutPage";
import PostIdPage from "@/pages/PostIdPage";

import { createRouter, createWebHashHistory } from "vue-router";
const routes = [
   {
      path: "/",
      component: Main,
   },
   {
      path: "/posts",
      component: PostPage,
   },
   {
      path: "/about",
      component: AboutPage,
   },
   {
      path: "/posts/:id",
      component: PostIdPage,
   },
];

const router = createRouter({
   history: createWebHashHistory(),
   routes,
});

export default router;
