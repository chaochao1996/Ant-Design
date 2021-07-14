import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
// import RenderRouterView from "../components/RenderRouterView.vue";
//sss
Vue.use(VueRouter);

const routes = [
  // 1.user------------
  {
    path: "/user",
    // component: RenderRouterView,
    // component: { render: h => h("router-view") },
    component: () =>
      import(/* webpackChunkName: "layout" */ "../layouts/UserLayout.vue"),
    children: [
      {
        path: "/user",
        redirect: "/user/login"
      },
      {
        path: "/user/login",
        name: "login",
        component: () =>
          import(/* webpackChunkName: "user" */ "../views/User/Login"),
      },
      {
        path: "/user/register",
        name: "register",
        component: () =>
          import(/* webpackChunkName: "user" */ "../views/User/Register"),
      },
    ],
  },

  // 2.dashboard------------
  {
    path: "/",
    component: () =>
      import(/* webpackChunkName: "layout" */ "../layouts/BasicLayout.vue"),
    children: [
      {
        path: "/",
        redirect: "/dashboard/analysis"
      },
      {
        path: "/dashboard",
        name: "dashboard",
        component: { render: h => h("router-view") },

        // 2.dashboard-analysis--------------
        children: [
          {
            path: "/dashboard/analysis",
            name: "analysis",
            component: () =>
              import(/* webpackChunkName: "dashboard" */ "../views/Dashboard/Analysis.vue")
          }
        ]
      },
    ],
  },

  // 3.form------------
  {
    path: "/form",
    name: "form",
    component: { render: h => h("router-view") },
    children: [
      {
        path: "/form/basic-form",
        name: "basicform",
        component: () =>
          import(/* webpackChunkName: "form" */ "../views/Forms/BasicForm.vue")
      },
      {
        path: "/form/step-form",
        name: "step-form",
        component: () =>
          import(/* webpackChunkName: "form" */ "../views/Forms/StepForm.vue"),

        // 3.form-stepform--------------
        children: [
          {
            path: "/form/step-form",
            redirect: "/form/step-form/info"
          },
          {
            path: "/form/step-form/info",
            name: "info",
            component: () =>
              import(/* webpackChunkName: "form" */ "../views/Forms/StepForm/Step1"),
          },
          {
            path: "/form/step-form/confirm",
            name: "confirm",
            component: () =>
              import(/* webpackChunkName: "form" */ "../views/Forms/StepForm/Step2"),
          },
          {
            path: "/form/step-form/result",
            name: "result",
            component: () =>
              import(/* webpackChunkName: "form" */ "../views/Forms/StepForm/Step3"),
          },
        ]
      },
    ],
  },
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
