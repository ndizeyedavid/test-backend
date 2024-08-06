import express from 'express';
import cors from 'cors';
import mysql from 'mysql2'
const port = 9090; // now don't judge me, i was just testing lol😁
const app = express();
app.use(cors());

app.use(express.json());

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "esp"
})


app.listen(port, ()=>{
    console.log("App running on port ", port);
});