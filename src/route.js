import { createRouter, createWebHistory } from "vue-router";

import Login from "./pages/Login";
import Register from "./pages/Register";
import RegisterationForm from "./pages/RegisterationForm";
import RegisterationFormTC from "./pages/RegisterationFormT&C";
import Home from "./pages/Home";
import Eshop from "./pages/Eshop";
import WishProductService from "./pages/WishProductService";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", redirect: "/home" },
    { path: "/home", component: Home },
    { path: "/login", component: Login },
    { path: "/register", component: Register },
    { path: "/registeration-form", component: RegisterationForm },
    {
      path: "/registeration-form-terms-and-conditions",
      component: RegisterationFormTC,
    },
    {
      path: "/e-shop",
      component: Eshop,
    },
    {
      path: "/wish-product-and-service",
      component: WishProductService,
    },
  ],
});

export default router;
