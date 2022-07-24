(function() {
    console.log("Plain Module");
})();

// (function(exports) {
//     const test = 1;
//     console.log("Plain Module");
//     exports.data = test;

//     Object.defineProperty(exports, '__esModule', { value: true });

// })(this.test = this.test || {});
