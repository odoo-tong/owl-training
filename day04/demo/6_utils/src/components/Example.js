
// loadJS
class MyComponent extends owl.Component {
    willStart() {
        return owl.utils.loadJS("/static/libs/someLib.js");
    }
}

// loadFile (templates)
async function makeEnv() {
    const templates = await owl.utils.loadFile("templates.xml");
    const qweb = new owl.QWeb({ templates });
    return { qweb };
}

// escape
this.divRef.el.innerHTML = owl.utils.escape(this.state.value);


// debounce
// limit the number of times some function/action is perfomed
const debounce = owl.utils.debounce;
window.addEventListener("mousemove", debounce(doSomething, 100));

const isMobile = () => window.innerWidth <= 768;
window.addEventListener(
    "resize",
    owl.utils.debounce(() => {
        const state = deviceContext.state;
        if (state.isMobile !== isMobile()) {
            state.isMobile = !state.isMobile;
        }
    }, 15)
);


// shallowEqual
shallowEqual({ a: 1, b: 2 }, { a: 1, b: 2 }); // true
shallowEqual({ a: 1, b: 2 }, { a: 1, b: 3 }); // false
