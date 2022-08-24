/** @odoo-module **/

import { makeEnvironment } from "./router"

const { Component, mount, utils, tags, router } = owl
const { xml, css } = tags
const  { RouteComponent, Link } = router

class App extends Component {
  static components = { RouteComponent, Link }
}

App.template = xml/* xml */`
<div class="container">
  <h1>Dashboard</h1>
  <a href="/web/session/logout?redirect=/">Logout</a>
  <RouteComponent />
  <Link to="'DASHBOARD'">Dashboard</Link>
  <Link to="'DASHBOARD_DETAIL'">Detail</Link>
</div>`

App.style = css/* css */`
.container {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
h1 {
  margin-bottom: 0;
}
`

async function setup() {
  const env = await makeEnvironment()
  mount(App, { target: document.body, env });
}

utils.whenReady(setup);
