import { Component, mount, utils, tags } from '@odoo/owl'

class App extends Component {
  static template = tags.xml/* xml */`
    <div>
    </div>`
}

function setup() {
  mount(App, { target: document.body });
}

utils.whenReady(setup);
