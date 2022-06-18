import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json())

const users = [
    {
	    username: 'bobesponja', 
	    avatar: "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info" 
    },
    {
	    username: 'bobesponja', 
	    avatar: "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info" 
    },
    {
	    username: 'bobesponja', 
	    avatar: "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info" 
    },
    {
	    username: 'bobesponja', 
	    avatar: "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info" 
    }
];
const tweets = [
    {
	    username: "bobesponja1",
        tweet: "eu amo o hub",
    },
    {
	    username: "bobesponja2",
        tweet: "eu amo o hub",
    },
    {
	    username: "bobesponja3",
        tweet: "eu amo o hub",
    },
    {
	    username: "bobesponja4",
        tweet: "eu amo o hub",
    },
    {
	    username: "bobesponja5",
        tweet: "eu amo o hub",
    },
    {
	    username: "bobesponja6",
        tweet: "eu amo o hub",
    },
    {
	    username: "bobesponja7",
        tweet: "eu amo o hub",
    },
    {
	    username: "bobesponja8",
        tweet: "eu amo o hub",
    },
    {
	    username: "bobesponja9",
        tweet: "eu amo o hub",
    },
    {
	    username: "bobesponja10",
        tweet: "eu amo o hub",
    },
    {
	    username: "bobesponja11",
        tweet: "eu amo o hub",
    },
    {
	    username: "bobesponja12",
        tweet: "eu amo o hub",
    },
    {
	    username: "bobesponja13",
        tweet: "eu amo o hub",
    },
    {
	    username: "bobesponja14",
        tweet: "eu amo o hub",
    }
];

app.post("/sign-up", (req, res) => {
    const user = req.body;
    users.push(user);
    res.send("OK");
})

app.get("/tweets", (req, res) => {
    const mainTweets = tweets.reverse().slice(0, 10)
    res.send(mainTweets.reverse());
})

app.post("/tweets", (req, res) => {
    const tweet = req.body;
    tweets.push(tweet);
    res.send("OK");
})

app.listen(5000);
