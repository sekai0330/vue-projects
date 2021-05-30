import { createRouter, createWebHistory } from "vue-router";
import { projectAuth } from "../firebase/init";
import Welcome from "../views/Welcome.vue";
import Chatroom from "../views/Chatroom.vue";

// auth guard
const requireAuth = (to, from, next) => {
  let user = projectAuth.currentUser;
  // console.log("current user in auth guard: ", user);
  if (!user) {
    next({ name: "Welcome" });
  } else {
    next();
  }
};

const routes = [
  {
    path: "/",
    name: "Welcome",
    component: Welcome,
  },
  {
    path: "/chatroom",
    name: "Chatroom",
    component: Chatroom,
    beforeEnter: requireAuth,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
