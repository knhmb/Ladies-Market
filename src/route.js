import { createRouter, createWebHistory } from "vue-router";

import Login from "./pages/Login";
import Register from "./pages/Register";
import RegisterationForm from "./pages/RegisterationForm";
import RegisterationFormTC from "./pages/RegisterationFormT&C";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", redirect: "/login" },
    { path: "/login", component: Login },
    { path: "/register", component: Register },
    { path: "/registeration-form", component: RegisterationForm },
    {
      path: "/registeration-form-terms-and-conditions",
      component: RegisterationFormTC,
    },
  ],
});

export default router;
