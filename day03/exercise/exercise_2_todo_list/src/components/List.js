import { Component, tags, useState } from "@odoo/owl"
import ListItem from "./ListItem"

const { xml, css } = tags


export default class List extends Component {
    static components = { ListItem }
    setup() {
        this.state = useState({
            tasks: [{
                id: 1,
                name: "Task 1",
                isDone: false,
            }],
            nextId: 2,
            text: "",
        })
    }
    onDone(ev) {
        const id = ev.detail
        this.state.tasks.forEach(task => {
            if (task.id === id) [
                task.isDone = true
            ]
        })
    }
    onRemove(ev) {
        const id = ev.detail
        this.state.tasks = this.state.tasks.filter(task => task.id !== id)
    }
    onAddTask() {
        if(!this.state.text) return;
        this.state.tasks.push({
            id: this.state.nextId,
            name: this.state.text,
            isDone: false,
        })
        this.state.nextId++
        this.state.text = ""
    }
}

List.template = xml/* xml */`
<div class="list">
    <h2>TO DO LIST</h2>
    <ul>
        <t t-foreach="state.tasks" t-as="task" t-key="task.id">
            <ListItem task="task" t-on-done="onDone" t-on-remove="onRemove" />
        </t>
    </ul>
    <form class="input" t-on-submit.prevent="onAddTask">
        <input type="text" t-model.trim="state.text" />
        <button type="submit">Add</button>
    </form>
</div>
`

List.style = css/* css */`
.list {
    display: flex;
    justify-content: center;
    flex-direction: column;
    height: 500px;
    width: 500px;
    background-color: white;
    padding: 16px;
    border-radius: 16px;
}
.list h2 {
    text-align: center;
}
.list ul {
    width: 100%;
    flex-grow: 1;
}
.list .input {
    display: flex;
}
.list .input input {
    flex-grow: 1;
}
.list .input button {
    margin-left: 16px;
}
`
