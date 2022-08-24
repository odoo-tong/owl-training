/** @odoo-module **/

import DashboardPage from "./pages/DashboardPage";
import DashboardDetailPage from "./pages/DashboardDetailPage";

const { router } = owl

const { Router } = router

export const ROUTES = [
    { name: "DASHBOARD", path: "/dashboard", component: DashboardPage},
    { name: "DASHBOARD_DETAIL", path: "/dashboard/detail", component: DashboardDetailPage},
    { name: "UNKNOWN", path: "*", redirect: { to: "DASHBOARD" } }
];

export async function makeEnvironment() {
    const env = {};
    env.router = new Router(env, ROUTES, { mode: "history" });
    await env.router.start();
    return env;
}
