import { owl } from "@odoo/owl";
import { App } from "./components/App";

const { utils, mount } = owl

function setup() {
    mount(App, { target: document.body });
}

utils.whenReady(setup);
