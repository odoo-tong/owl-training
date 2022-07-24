odoo.define("day01.OdooModule", function (require) {
    const { printCurrentTime, printNotDefault } = require("day01.NativeModule")
    console.log("Odoo Module");
    printCurrentTime()
    printNotDefault()
})

// printCurrentTime();
// printNotDefault();
