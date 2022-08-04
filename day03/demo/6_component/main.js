import { Component, mount, utils, tags, useState } from '@odoo/owl'
import Button from "./src/components/Button.js"

class App extends Component {
  static template = tags.xml/* xml */`
    <Button t-on-click_button="onSubmit" />
  `
  ;
  static components = { Button }
  onSubmit() {
    console.log("submit");
  }
}

function setup() {
  mount(App, { target: document.body });
}

utils.whenReady(setup);
