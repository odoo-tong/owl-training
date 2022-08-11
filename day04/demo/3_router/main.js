import { Component, mount, utils, tags, router } from '@odoo/owl'
import { makeEnvironment } from "./router"

const { RouteComponent, Link } = router

class App extends Component {
  static template = tags.xml/* xml */`
  <div class="container">
    <RouteComponent />
    <Link to="'LOGIN'">Login</Link>
    <Link to="'DASHBOARD'">Dashboard</Link>
    <button t-on-click.prevent="onClick">Click Me</button>
  </div>`
  static style = tags.css/* css */`
    .container {
      height: 100vh;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  `
  static components = { RouteComponent, Link }
  onClick() {
    this.env.router.navigate({ to: "DASHBOARD" })
  }
}

async function setup() {
  const env = await makeEnvironment()
  mount(App, { target: document.body, env });
}

utils.whenReady(setup);
