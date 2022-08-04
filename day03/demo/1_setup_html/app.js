const { Component, mount } = owl;
const { xml } = owl.tags;
const { whenReady } = owl.utils;

// Owl Components
class App extends Component {
  static template = xml`<div>Hello Owl</div>`;
}

// Setup code
function setup() {
    mount(App, { target: document.body })
}

whenReady(setup);
