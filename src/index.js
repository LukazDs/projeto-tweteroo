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
	    username: "bobesponja",
        tweet: "eu amo o hub",
    },
    {
	    username: "bobesponja",
        tweet: "eu amo o hub",
    },
    {
	    username: "bobesponja",
        tweet: "eu amo o hub",
    },
];

app.post("/sign-up", (req, res) => {
    const user = req.body;
    users.push(user);
    res.send("OK");
})

app.post("/tweets", (req, res) => {
    const tweet = req.body;
})

app.listen(5000);
