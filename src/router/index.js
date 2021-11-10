import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";
import productsRouter from "./products";

const routes = [
  productsRouter,
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/products",
    name: "Products",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import( "../components/products/Products.vue"),
  },
  {
    path: "/aboutus",
    name: "Aboutus",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import( "../components/Aboutus.vue"),
  },
  {
    path: "/news",
    name: "News",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import( "../components/News.vue"),
  },
  {
    path: "/book",
    name: "Book",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import( "../components/Book.vue"),
  },
   
  {
    path: "/contactus",
    name: "Contactus",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import( "../components/Contactus.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
