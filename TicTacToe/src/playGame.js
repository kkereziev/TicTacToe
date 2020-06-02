import GamesService from "./services/gamesService.js";
import UserService from "./services/userService.js";
let gameServ = new GamesService();
const urlParams = new URLSearchParams(window.location.search);
const gameId = urlParams.get('id');
gameServ.getGame(gameId)
    .then(game => {
        window.game = game;
        let board = game.board;
        Array.from(board).forEach((square, index) => {
            let squareHTML = document.getElementById(index);
            if (square === '1') {
                squareHTML.innerHTML = "O";
            }
            if (square === '2') {
                squareHTML.innerHTML = "X";
            }
        });
    });

for (let i = 0; i < 9; i++) {
    document.getElementById(i).addEventListener("click", (e) => {
        let index = e.currentTarget.id;
        console.log(e.currentTarget);
        let board = Array.from(window.game.board);
        if (window.game.toMove === 1) {
            board[index] = '2';
            window.game.toMove = 2;
        } else if (window.game.toMove === 2) {
            board[index] = '1';
            window.game.toMove = 1;
        }
        window.game.board = board.join("");

        gameServ.setGame(gameId, window.game)
            .then(data => {
                window.location.reload(true);
            })
    });
}