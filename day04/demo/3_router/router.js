import { router } from "@odoo/owl"
import DashboardPage from "./src/pages/DashboardPage";
import LoginPage from "./src/pages/LoginPage";

const { Router } = router

async function protectRoute({ env, to }) {
    const isLogin = true
    if (isLogin && to.name === "LOGIN") {
        return { to: "DASHBOARD" };
    }
    if (!isLogin && to.name !== "LOGIN") {
        return { to: "LOGIN" };
    }
    return true;
}

export const ROUTES = [
    { name: "LOGIN", path: "/login", component: LoginPage},
    { name: "DASHBOARD", path: "/dashboard", component: DashboardPage},
    { name: "DASHBOARD_DETAIL", path: "/dashboard/{{id}}", component: DashboardPage, beforeRouteEnter: protectRoute },
    { name: "UNKNOWN", path: "*", redirect: { to: "LOGIN" } }
];

export async function makeEnvironment() {
    const env = {};
    env.router = new Router(env, ROUTES, { mode: "history" });
    await env.router.start();
    return env;
}
