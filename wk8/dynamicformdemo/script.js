var vm = new Vue({
    el: "#more-forms",
    data:{
        cats :[
            {
                name:"Garfield",
                comic:"Garfield"
            },
            {
                name: "Hobbes",
                comic: "Calvin and Hobbes"
            },
            {
                name: "Wiley Catt",
                comic: "Pogo"
            },
        ],
        selectedCat: {name: null, comic: null}

    }
})