import { Component, mount, utils, tags, useState } from '@odoo/owl'
import Card from './src/components/Card.js';

class App extends Component {
  static template = tags.xml/* xml */`
  <div class="container">
    <Card t-if="state.active" t-transition="fade">
      <p>Animation Box</p>
    </Card>
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
    .card {
      margin-bottom: 12px;
    }
    .fade-enter-active,
    .fade-leave-active {
      transition: opacity 1s;
    }
    .fade-enter,
    .fade-leave-to {
      opacity: 0;
    }
  `
  static components = { Card }
  setup() {
    this.state = useState({
      active: false
    })
  }
  onClick() {
    this.state.active = !this.state.active
  }
}

function setup() {
  mount(App, { target: document.body });
}

utils.whenReady(setup);
