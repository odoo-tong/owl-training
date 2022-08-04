import { Component } from "@odoo/owl";

export default class PropsValidation extends Component {
    static props = {
        messageIds: {type: Array, element: Number},  // list of number
        otherArr: {type: Array},   // just array. no validation is made on sub elements
        otherArr2: Array,   // same as otherArr
        someObj: {type: Object},  // just an object, no internal validation
        someObj2: {
            type: Object,
            shape: {
                id: Number,
                name: {type: String, optional: true},
                url: String
            }
        },    // object, with keys id (number), name (string, optional) and url (string)
        someFlag: Boolean,     // a boolean, mandatory (even if `false`)
        someVal: [Boolean, Date],   // either a boolean or a date
        otherValue: true,     // indicates that it is a prop
        kindofsmallnumber: {
            type: Number,
            validate: n => (0 <= n && n <= 10)
        },
        size: {
            validate:  e => ["small", "medium", "large"].includes(e)
        },
    }
}
