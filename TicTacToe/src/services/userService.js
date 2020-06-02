export default class UserService {
    async getAllUsers() {
        let res = await fetch("https://tictactoe-a197b.firebaseio.com/Users.json");
        return res.json();
    }

    async getUser(id) {
        let res = await fetch(`https://tictactoe-a197b.firebaseio.com/Users/${id}.json`);
        return res.json();
    }

    async createNewUser(id, username) {
        let data = {
            name: username,
            games: []
        };
        return await fetch(`https://tictactoe-a197b.firebaseio.com/Users/${id}.json`, {
            method: "PUT",
            headers: {
                contentType: "application/json"
            },
            body: JSON.stringify(data)
        });
    }
};