/** @odoo-module alias=day01N.ativeModule default=0 **/

console.log("Native Module");
// console.log(test.data);

export function printCurrentTime() {
    console.log(new Date());
}

export function printNotDefault() {
    console.log("Not Default");
}

// odoo.define(`web.someName`, function(require) {
//     return require('@web/file_a')[Symbol.for("default")];
// });
