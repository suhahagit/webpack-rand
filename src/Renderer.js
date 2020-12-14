class Renderer {
    renderUsers(users) {
        let source = $("#user-template").html()
        let template = Handlebars.compile(source)
        let newHTML = template(users.results[0]);
        $(".user-container").empty().append(newHTML);
    }

    renderFriends(users) {
        let sourceFriends = $("#user-friends-template").html()
        let templateFriends = Handlebars.compile(sourceFriends)
        let friendsHTML = templateFriends({friends: users.results.splice(1)})
        $(".friends-container").empty().append(friendsHTML)
    }

    renderQuote(quoteInfo) {
        let sourceQuote = $("#quote-template").html()
        let templateQuote = Handlebars.compile(sourceQuote)
        let quoteHTML = templateQuote(quoteInfo)
        $(".quote-container").empty().append(quoteHTML)
    }

    renderPokemon(pokemonInfo) {
        let sourcePokemon = $("#pokemon-template").html()
        let templatePokemon = Handlebars.compile(sourcePokemon)
        let pokemonHTML = templatePokemon(pokemonInfo)
        $(".pokemon-container").empty().append(pokemonHTML)
    }

    renderMeat(meatText) {
        let sourceMeat = $("#meat-template").html()
        let templateMeat = Handlebars.compile(sourceMeat)
        let meatHTML = templateMeat({text: meatText})
        $(".meat-container").empty().append(meatHTML)
    }

    render(data){
        this.renderFriends(data.users)
        this.renderUsers(data.users)
        this.renderQuote(data.quote)
        this.renderPokemon(data.pokemon)
        this.renderMeat(data.meat)
    }
}
