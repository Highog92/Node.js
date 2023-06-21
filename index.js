import express from "express";
import { router as SongRouter } from "./Routes/song.router.js";
import dotenv from 'dotenv';



dotenv.config();

console.log(process.env);

import { postRouter } from "./Routes/post.router.js";

const app = express()
const port = process.env.PORT || 4000;

app.use(express.urlenscoded({ extended: true }))


app.get("/", (req, res) => {
    res.send("Velkommen til Node.JS app");

})

app.use(postRouter)

app.use((req, res, next) => {
    res.status(404).send("Siden blev ikke fundet")
})

app.listen(4242, () => {
    console.log(`server kører på port ${port}`);
})
