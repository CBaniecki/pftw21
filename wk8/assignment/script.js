var vm = new Vue ({
    el:"#demo",

    data: {

        newCameraObj: {
            name: '',
            type: '', 
            year: '', 
            film: ''

        },
        cameras: [
            {name: "Lomography Belair Trailblaizer", type: "Medium Format", year: "2012", film: "Yes"},
            {name: "Nikon D3100", type: "Digitial SLR", year: "2010", film:"No"},
            {name: "Nikon N75", type: "35mm SLR", year: "2003", film: "Yes"},
            {name: "Polaroid Land Camera", type: "Self-developing film", year: "1948", film: "Yes"},
            {name: "Rolleiflex Medium Format TLR", type:"Twin Lens Reflex", year: "1920", film: "Yes"},
        ]
    },
    methods: {
        submitHandler: () => {
            console.log('submitted');
            vm.cameras = vm.cameras.concat(vm.newCameraObj);
            vm.resetForm();
        },
        resetForm: () =>{
            vm.newCameraObj = {
                name: '',
                type: '', 
                year: '', 
                film: ''
            };

        },

        deleteItem: item => {
            vm.cameras = vm.cameras.filter(camera => {
                return camera !== item;
            });
        }



    }
});