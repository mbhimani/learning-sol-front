let app = new Vue({
    el: "#batches",
    data: {
        batchname: "",
        batchyear: "",
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
        },
        addBatch: function () {
            axios.post('http://localhost:3000/batches', {
                name: this.batchname,
                year: this.batchyear
            }).then(() => {
                this.getBatches();
                this.batchname = '';
                this.batchyear = '';
            })
        }
    }
});
app.getBatches();