class APIManager {
    constructor() {
        this.data = {}
    }

    loadData(){
        $.get('https://randomuser.me/api/?results=7', (users) => {
            this.data.users = users
        })

        $.get('https://quotes.rest/qod', (quoteInfo) => {
            this.data.quote = quoteInfo.contents.quotes[0]
        })

        let number = Math.floor(Math.random()*156) + 1
        $.get(`https://pokeapi.co/api/v2/pokemon/${number}/`, (pokemonData) => {
            this.data.pokemon = pokemonData
        })

        $.get('https://baconipsum.com/api/?type=all-meat&paras=2', (meatText) => {
            this.data.meat = meatText[0]
        })
    }
}