//Create a Netflix TV Show class with a constructor that makes Netflix TV Shows with 4 properties and 3 methods

class NetflixShow{
    constructor(showName,showGenre,showRated,showLanguage){
        this.name = showName
        this.genre = showGenre
        this.rated = showRated
        this.language = showLanguage
    }
    play(){
        alert('Enjoy the show!!!')
    }
    pause(){
        alert(`We'll be here when you get back!`)
    }
    areYouStillThere(){
        alert('Are you still there?')
    }
}

let lastOfUs = new NetflixShow('Last of Us','zombie suspense', 'R', 'English / English with Subtitles')