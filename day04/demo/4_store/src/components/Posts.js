import { Component, tags, hooks, useState } from "@odoo/owl"

const { xml } = tags
const { useGetters, useStore } = hooks

export default class Posts extends Component {
    static template = xml/* xml */`
    <div>
        <button t-on-click.prevent="onClick('all')">All Post</button>
        <button t-on-click.prevent="onClick('own')">Own Post</button>
        <ol>
            <t t-foreach="state.posts" t-as="post" t-key="post.id">
                <li><t t-esc="post.content" /></li>
            </t>
        </ol>
    </div>`
    setup() {
        this.store = useStore((state) => state, { store: this.env.store.user })
        this.getters = useGetters(this.env.store.user)
        this.state = useState({
            posts: this.store.posts
        })
    }
    onClick(filter) {
        if (filter === 'own') {
            this.state.posts = this.getters.getOwnPosts()
        } else {
            this.state.posts = this.store.posts
        }
    }
}
