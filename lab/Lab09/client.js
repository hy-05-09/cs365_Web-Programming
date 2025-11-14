
Vue.createApp({
    data() {
        return {
            posts:[], title:"", body:"", waitingOnPost:false
        };
    },
    methods: {
        listAll(){
            fetch('https://jsonplaceholder.typicode.com/posts') 
            .then((response) => response.json()) 
            .then((json) => this.posts = json)
        },
        createResource(){
            this.waitingOnPost = true;
            fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify({
                title: this.title,
                body: this.body,
                userId: 1,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
            })
            .then((response) => {
                if(response.ok) return response.json();
                else throw new Error("status" + response.status);
            })
            .then((json) => {
                this.posts.push(json);
                this.title = "";
                this.body = ""
            }).finally(()=>{
                this.waitingOnPost = false;
            });
        },
        updateResource(id){
            fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
            method: 'PUT',
            body: JSON.stringify({
                id: id,
                title: 'foo',
                body: 'bar',
                userId: 1,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
            })
            .then((response) => {
                if(response.ok) return response.json();
                else throw new Error("status" + response.status);
            })
            .then((json) => {
                let i = this.posts.findIndex(post => post.id == json.id); //finds the index where the array element's id matches json.id
                if (i == -1) throw new Error("Couldn't find post index " + i);
                this.posts[i] = json;
            });
        },
        patchResource(id){
            fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
            method: 'PATCH',
            body: JSON.stringify({
                title: 'foo',
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
            })
            .then((response) => {
                if(response.ok) return response.json();
                else throw new Error("status" + response.status);
            })
            .then((json) => {
                let i = this.posts.findIndex(post => post.id == json.id); 
                if (i == -1) throw new Error("Couldn't find post index " + i);
                this.posts[i] = { ...this.posts[i], ...json };
            });
        },
        deleteResource(id){
            fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
            method: 'DELETE',
        })
        .then((response) => {
                if(response.ok) return response.json();
                else throw new Error("status" + response.status);
            })
        .then((json) => {
            let i = this.posts.findIndex(post => post.id == id); 
            if (i == -1) throw new Error("Couldn't find post index " + i);
            this.posts.splice(i, 1);
        });
        }
    },
    computed: {
    }
}).mount('#app');