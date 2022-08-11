import { Store } from "@odoo/owl"

function delay(t, v) {
    return new Promise(function(resolve) {
        setTimeout(resolve.bind(null, v), t)
    });
}

const actions = {
    async login({state}, info) {
        console.log(info);
        if (state.user === null){
            try {
                await delay(500);
                state.user = {
                    id: 1,
                    username: "Test",
                    email: 'test@test.com',
                };
            } catch (e) {
                console.error(e);
            }
        }
    }
}

const state = {
    user: null,
    posts: [
        {
            id: 1,
            author: 1,
            content: "This is a testing post",
        },
        {
            id: 2,
            author: 2,
            content: "Post from other users 2",
        },
        {
            id: 3,
            author: 3,
            content: "Post from other users 3",
        },
        {
            id: 4,
            author: 4,
            content: "Post from other users 4",
        },
        {
            id: 5,
            author: 1,
            content: "This is a testing post 2",
        },
        {
            id: 6,
            author: 1,
            content: "This is a testing post 3",
        },
    ]
}

const getters = {
    getOwnPosts({state}) {
        if (!state.user) return null
        return state.posts.filter((post) => post.author === state.user.id)
    }
}

const store = new Store({
    state,
    actions,
    getters
})

export default store
