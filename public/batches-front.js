let app = new Vue({
    el: "#batches",
    data: {
        batchname: "",
        batchyear: "",
        batches: [],
        courseId:"",
        courses: []
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
                year: this.batchyear,
                courseId: this.courseId
            }).then(() => {
                this.getBatches();
                this.batchname = '';
                this.batchyear = '';
            })
        },

        getCourses: function() {
            axios.get('http://localhost:3000/courses')
            .then(courses => {
                this.courses = courses.data
            })
        }
    }
});
app.getBatches();
app.getCourses();