import { Component, mount, utils, tags } from '@odoo/owl'

import Form from './src/components/Form';
import UserDetail from './src/components/UserDetail';
import userStore from "./src/store/user"

class App extends Component {
  static template = tags.xml/* xml */`
    <main>
      <Form />
      <UserDetail />
    </main>`
  static components = { Form, UserDetail }
}

function setup() {
  const env = {
    store: {
      user: userStore
    }
  }
  mount(App, { target: document.body, env });
}

utils.whenReady(setup);
