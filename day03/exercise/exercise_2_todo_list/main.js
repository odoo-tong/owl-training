import { Component, mount, utils, tags } from '@odoo/owl'
import MainPage from './src/pages/MainPage';

const { xml } = tags

class App extends Component {
  static components = { MainPage }
  static template = xml/* xml */`<MainPage />`;
}

function setup() {
  mount(App, { target: document.body });
}

utils.whenReady(setup);
