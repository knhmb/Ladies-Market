import { createRouter, createWebHistory } from "vue-router";

import Login from "./pages/Login";
import Register from "./pages/Register";
import RegisterationForm from "./pages/RegisterationForm";
import RegisterationFormTC from "./pages/RegisterationFormT&C";
import Home from "./pages/Home";
import Eshop from "./pages/Eshop";
import WishProductService from "./pages/WishProductService";
import WishStore from "./pages/WishStore";
import WishBeautyChannel from "./pages/WishBeautyChannel";
import WishLiveRecord from "./pages/WishLiveRecord";
import ForgotPassword from "./pages/ForgotPassword";
import BeautyChannel from "./pages/BeautyChannel";
import Notifications from "./pages/Notifications";
import BeautyChannelSearchResultVideo from "./pages/BeautyChannelSearchResultVideo";

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
    {
      path: "/wish-store",
      component: WishStore,
    },
    {
      path: "/wish-beauty-channel",
      component: WishBeautyChannel,
    },
    {
      path: "/wish-live-record",
      component: WishLiveRecord,
    },
    {
      path: "/forgot-password",
      component: ForgotPassword,
    },
    {
      path: "/beauty-channel",
      component: BeautyChannel,
    },
    {
      path: "/notifications",
      component: Notifications,
    },
    {
      path: "/beauty-channel-search-result-video",
      component: BeautyChannelSearchResultVideo,
    },
  ],
});

export default router;
