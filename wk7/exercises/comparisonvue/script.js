
var compareVue = new Vue ({

    el: '#compareVue',

    data: {
        
        message: 'Llama and Alpaca Comparison',
        currentRoute: "home",
        baseStyle: {
            background: "red",
            border: "1px solid black"
        }
        
    }
})

var alpacaFacts = new Vue ({
    
    el:'#alpacaFacts',

    data:{
        message: 'Alpacas are related to llamas, which are domesticated versions of another wild Andean ruminant, the Guanaco. While llamas are used as pack animals, alpacas are raised mainly for their soft wool. Alpacas are thought to have been domesticated more than 6,000 years ago by the Incas who raised them for their prized fleece. Humming is the most common sound alpacas make. They hum softly when they are curious, content, worried, bored or cautious.'
    }
})
var llamaFacts = new Vue ({

    el: '#llamaFacts',

    data: {
        message: 'Llamas are native to the South American Andes and migrated there from the North American plains around 3 million years ago. Llamas are the national symbol of Peru and appears on many tourist products as well as coins and stamps. Llamas come in a range of solid and spotted colors including black, gray, beige, brown, red, and white. Llamas are sometimes used for protection. Farmers use llamas to guard herds of small animals. Llamas can be trained as professional therapy animals.'
    }

})

var llamaLink = new Vue({
    el: "#llamaLink",
    data: {
        link: "https://en.wikipedia.org/wiki/Llama"
    }
})
    

var alpacaLink = new Vue({
    el:"#alpacaLink",
    data: {
        link: "https://en.wikipedia.org/wiki/Alpaca"
    }
})