import GamesService from "./services/gamesService.js";
import UserService from "./services/userService.js";

new GamesService()
    .getAllGames()
    .then((games) => {
        let userService = new UserService();
        let gamesHTML = document.getElementById("games");
        games.forEach((game, index) => {
            let gameLi = document.createElement("li");

            gameLi.innerHTML = `<a href="playgame.html?id=${index}">${game.name}</a>`;
            gamesHTML.appendChild(gameLi);
            // userService.getUser(game.player1)
            //     .then(user => {
            //         if (game.player2 === undefined) {

            //         }
            //     });
        });
    });