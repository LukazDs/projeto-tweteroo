import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json())

const users = [];
const tweets = [];

app.post("/sign-up", (req, res) => {
    const user = req.body;
    
    ///tratamento do bonus
    if(user.username === "" || user.avatar === "") {
        res.status(400).send("Todos os campos são obrigatórios!");
    }

    users.push(user);
    res.send("OK");
})

app.get("/tweets", (req, res) => {

    let initial = 0;
    let end = 0;

    if (tweets.length <= 10) {
        initial = 0;
        end = tweets.length;
    }
    else {
        initial = tweets.length - 10;
        end = tweets.length;
    }

    const lastTweets = tweets.slice(initial, end);
    const lastUsers = users.slice(initial, end);

    lastTweets.map((v, i) => v.avatar = lastUsers[i].avatar);

    res.send(lastTweets.reverse());
})

app.post("/tweets", (req, res) => {
    const tweet = req.body;
    tweets.push(tweet);
    
    if (tweets.length > 1) {
        users.push(users[users.length - 1])
    }
    res.send("OK");
})

app.listen(5000);
