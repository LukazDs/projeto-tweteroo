import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json())

const users = [];
const tweets = [];
const user = 
    {
	    username: 'bobesponja', 
	    avatar: "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info" 
    };

app.get("/sign-up", (req, res) => {
    res.send("TESTE: OLÁ")
})

app.listen(5000);
