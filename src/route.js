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
import BeautyChannelSearchResultLiveRecord from "./pages/BeautyChannelSearchResultLiveRecord";
import Product from "./pages/Product";
import SearchProduct from "./pages/SearchProduct";
import AdvancedSearchProductResult from "./pages/AdvancedSearchProductResult";
import AdvancedSearchShopResult from "./pages/AdvancedSearchShopResult";
import SearchShop from "./pages/SearchShop";
import Shop from "./pages/Shop";
import ShoppingCart from "./pages/ShoppingCart";
import Checkout from "./pages/Checkout";
import Profile from "./pages/Profile";
import EditMember from "./pages/EditMember";
import ChangePassword from "./pages/ChangePassword";
import Comment from "./pages/BeautyLogComment";
import Photo from "./pages/BeautyLogPhoto";
import BeautyLogOrderRecord from "./pages/BeautyLogOrderRecord";

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
    {
      path: "/beauty-channel-search-result-live-record",
      component: BeautyChannelSearchResultLiveRecord,
    },
    {
      path: "/product",
      component: Product,
    },
    {
      path: "/search-product",
      component: SearchProduct,
    },
    {
      path: "/advanced-search-product-result",
      component: AdvancedSearchProductResult,
    },
    {
      path: "/advanced-search-shop-result",
      component: AdvancedSearchShopResult,
    },
    {
      path: "/search-shop",
      component: SearchShop,
    },
    {
      path: "/shop",
      component: Shop,
    },
    {
      path: "/shopping-cart",
      component: ShoppingCart,
    },
    {
      path: "/checkout",
      component: Checkout,
    },
    {
      path: "/profile",
      component: Profile,
      children: [
        { path: "edit-member", component: EditMember },
        { path: "edit-password", component: ChangePassword },
        { path: "beauty-log-comment", component: Comment },
        { path: "beauty-log-photo", component: Photo },
        { path: "beauty-log-order-record", component: BeautyLogOrderRecord },
      ],
    },
  ],
});

export default router;
