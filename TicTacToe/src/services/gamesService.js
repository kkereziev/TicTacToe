export default class GamesService {
    async getAllGames() {
        let res = await fetch("https://tictactoe-a197b.firebaseio.com/Games.json");
        return res.json();
    }

    async getGame(id) {
        let res = await fetch(`https://tictactoe-a197b.firebaseio.com/Games/${id}.json`);
        return res.json();
    }

    async setGame(id, game) {
        return await fetch(`https://tictactoe-a197b.firebaseio.com/Games/${id}.json`, {
            method: "PUT",
            headers: {
                contentType: "application/json"
            },
            body: JSON.stringify(game)
        });
    }

}