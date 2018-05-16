let app = new Vue({
    el: "#courses",
    data: {
        coursename: "",
        courses: []
    },
    methods: {
        getCourses: function () {
            axios.get('http://localhost:3000/courses')
                .then(responce => {
                    this.courses = responce.data
                }).catch(err => {
                    console.log('cannot retrieve courses');
                })
        },
        addCourse: function () {
            axios.post('http://localhost:3000/courses', {
                name: this.coursename
            }).then(() => {
                this.getCourses();
                this.coursename = '';
            })
        }
    }
});
app.getCourses();