// import components
import Home from "../pages/Home.vue";
import Messages from "../pages/messages.vue";
import Calls from "../pages/Calls.vue";
import Contatcs from "../pages/Contacts.vue";
const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/messages/:id",
    component: Messages,
    props: true,
    params: {},
  },
  {
    path: "/contacts",
    component: Contatcs,
  },
  {
    path: "/calls",
    component: Calls,
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/Error404.vue"),
  },
];

export default routes;
