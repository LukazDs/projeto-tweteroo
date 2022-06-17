import express from "express";

const app = express();

app.get("/ola", (req, res) => {
    res.send("TESTE: OLÁ")
})

app.listen(5000);
