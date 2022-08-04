import { Component, mount, utils, tags } from '@odoo/owl'
import Props from './src/components/Props';
import PropsValidation from './src/components/PropsValidation';

class App extends Component {
  static template = tags.xml/* xml */`<Props message="'Hello'"/>`;
  static components = { Props, PropsValidation }
}

function setup() {
  mount(App, { target: document.body });
}

utils.whenReady(setup);
