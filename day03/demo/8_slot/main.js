import { Component, mount, utils, tags, useState } from '@odoo/owl'
import Slot from './src/components/Slot';

class App extends Component {
  static template = tags.xml/* xml */`
    <div>
      <t t-foreach="state.array" t-as="number" t-key="number">
        <p t-esc="number" />
      </t>
    </div>
  `;
  setup() {
    this.state = useState({
      array: [1, 2 ,3 ,4 ,5]
    })
  }
}

function setup() {
  mount(App, { target: document.body });
}

utils.whenReady(setup);
