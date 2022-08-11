import { Component, mount, utils, tags, Context } from '@odoo/owl'
// import Ref from './src/components/Ref';
// import Parent from './src/components/Parent';
import Listener from './src/components/Listener';
// import FetchPage from './src/pages/FetchPage';

class App extends Component {
  static template = tags.xml/* xml */`
    <div>
      <Listener />
    </div>
  `
  ;
  static components = { Listener }
}

function setup() {
  mount(App, { target: document.body });
}

utils.whenReady(setup);
