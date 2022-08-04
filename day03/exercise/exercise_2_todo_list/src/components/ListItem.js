import { Component, tags } from "@odoo/owl"

const { xml, css } = tags

export default class ListItem extends Component {
    static props = {
        task: {
            type: Object,
            shape: {
                id: Number,
                name: String,
                isDone: Boolean
            }
        },
    }
    onDone(id) {
        this.trigger("done", id)
    }
    onRemove(id) {
        this.trigger("remove", id)
    }
}

ListItem.template = xml/* xml */`
<li class="list-item">
    <span t-att-style="props.task.isDone and 'text-decoration: line-through;'" t-esc="props.task.name" />
    <button t-if="!props.task.isDone" t-on-click.prevent="onDone(props.task.id)">Done</button>
    <button t-else="" t-on-click.prevent="onRemove(props.task.id)">Remove</button>
</li>
`

ListItem.style = css/* css */`
.list-item {
    display: flex;
    align-items: center;
}
.list-item span {
    flex-grow: 1;
}
`
