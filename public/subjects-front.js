let app = new Vue({
    el: "#subjects",
    data: {
        subjectname: "",
        coursename: "",
        subjects: [],
        courses: []
    },
    methods: {
        getSubjects: function () {
            axios.get('http://localhost:3000/subjects')
                .then(responce => {
                    this.subjects = responce.data
                }).catch(err => {
                    console.log('cannot retrieve batches');
                })
        },
        addSubject: function () {
            let Id = this.courses.filter(course => course.name === this.coursename)[0].id
            axios.post('http://localhost:3000/subjects', {
                name: this.subjectname,
                courseId: parseInt(Id)
            }).then(() => {
                this.getSubjects();
                this.subjectname = '';
            })
        },
        getCourses: function () {
            axios.get('http://localhost:3000/courses')
                .then(responce => {
                    this.courses = responce.data
                }).catch(err => {
                    concole.log('cannot retrieve cources')
                })
        }
    }
});
app.getSubjects();
app.getCourses();