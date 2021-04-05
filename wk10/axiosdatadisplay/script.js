Vue.component('artwork-departments', {
    template: `<div>{{department.displayName}} </div>`,
    props: ['department']
});

const vm = new Vue ({
    el: "#display",
    data:{ 
        departments: []
    },


    mounted() {
        axios.get("https://collectionapi.metmuseum.org/public/collection/v1/departments").then(function (response) {
            console.log('response', response.data.departments);
            vm.departments = response.data.departments;
        })  
    }
});