import { Component, tags } from "@odoo/owl"
import useFetch from "../hooks/useFetch";

const { xml, css } = tags

export default class FetchPage extends Component {
    static template = xml/* xml */`
    <div>
        <t t-if="loading.value">
            <p>Loading...</p>
        </t>
        <t t-else="">
            <p>Fact: <t t-esc="data.value.fact" /></p>
            <p>Length: <t t-esc="data.value.length" /></p>
        </t>
        <button t-on-click.prevent="onClick">Fetch</button>
    </div>`
    static style = css/* css */`
    p {
        font-size: 20px;
    }
    `
    setup() {
        const { fetchUrl, loading, data } = useFetch("https://catfact.ninja/fact");
		this.loading = loading;
		this.data = data;
        this.fetchUrl = fetchUrl
    }
    onClick() {
        this.fetchUrl()
    }
}
