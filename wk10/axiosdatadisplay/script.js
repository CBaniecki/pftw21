Vue.component('artwork-departments', {
    template: `<div> {{displayName}} </div>`,
    props: ['displayName']
})


const vm = new Vue ({
    el: "#display",
    data:{ 
        results: []
    },


    mounted () {
        axios.get('https://collectionapi.metmuseum.org/public/collection/v1/departments').then(response => {
            console.log('response', response);
            vm.results = response.data;
        })  
    }
});