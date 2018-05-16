let app = new Vue({
    el: "#Batches",
    data: {
        batches: []
    },
    methods: {
        getBatches: function () {
            axios.get('http://localhost:3000/batches')
                .then(responce => {
                    this.batches = responce.data
                }).catch(err => {
                    console.log('cannot retrieve batches');
                })
        }
    }
});
app.getBatches();