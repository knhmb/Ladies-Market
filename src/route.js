import { createRouter, createWebHistory } from "vue-router";

import Login from "./pages/Login";
import Register from "./pages/Register";
import RegisterationForm from "./pages/RegisterationForm";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", redirect: "/login" },
    { path: "/login", component: Login },
    { path: "/register", component: Register },
    { path: "/registeration-form", component: RegisterationForm },
  ],
});

export default router;
