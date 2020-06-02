import UserService from "./services/userService.js";
import GamesService from "./services/gamesService.js";

let submit = document.getElementById("submit");
submit.addEventListener("click", (e) => {
    e.preventDefault();
    let username = document.getElementById("username").value;
    new UserService().getAllUsers()
        .then(data => {
            if (data.some((el) => {
                    return el.name === username;
                })) {
                alert("Please dont use gosho");
            }
            let loggedUser = {
                id: data.length,
                username
            }
            new UserService().createNewUser(data.length - 1, username)
                .then((data) => {
                    localStorage.setItem("loggedUser", JSON.stringify(loggedUser));
                    new GamesService().setGame(3, {
                        board: "000000000",
                        name: "test",
                        toMove: 1
                    }).then((data) => {
                        window.location = "/games.html";
                    });
                })
        });

});