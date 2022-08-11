import { Component, mount, utils, tags, router, Store } from '@odoo/owl'
import { makeEnvironment } from "./router"
import config from './store'

const { RouteComponent } = router

class App extends Component {
  static template = tags.xml/* xml */`
  <div class="container">
    <RouteComponent t-on-error="onError" />
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
  static components = { RouteComponent }
}

async function setup() {
  const env = await makeEnvironment()
  env.store = new Store({...config, env})
  mount(App, { target: document.body, env });
}

utils.whenReady(setup);
