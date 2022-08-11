import { Component, mount, utils, tags, Context } from '@odoo/owl'
import Text from './src/components/Text.js';
import Button from './src/components/Button.js';

class App extends Component {
  static template = tags.xml/* xml */`
    <div>
      <Text />
      <Button />
    </div>
  `
  ;
  static components = { Button, Text }
}

function setup() {
  const userContext = new Context({
    username: 'Test',
    email: 'test@test.com',
  })
  mount(App, {
    target: document.body,
    env: {
      userContext
    }
  });
}

utils.whenReady(setup);
