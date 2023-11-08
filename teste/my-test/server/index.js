const express = require("express");
const app = express();
const mysql = require("mysql2");
const cors = require("cors");

const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "MySQL23+",
    database: "crudsaude",
});

app.use(cors());
app.use(express.json());

app.post("/register",  (req,res) => {
    const {nome} = req.body;
    const {email} = req.body;
    const {contato} = req.body;
    const {consulta} = req.body;
    const {horario} = req.body;
    console.log(nome, email, contato, consulta, horario)

    let SQL = "INSERT INTO new_table (name, email, contato, consulta, horario) VALUES (?,?,?,?,?)";

    db.query(SQL, [ nome, email, contato, consulta, horario ], (err, result) => {
        console.log(result)
    })
})

app.post("/search", (req, res) => {
    const {nome} = req.body;
    const {email} = req.body;
    const {contato} = req.body;
    const {consulta} = req.body;
    const {horario} = req.body;

    let mysql =
    "SELECT * from games WHERE nome = ? AND email = ? AND contato = ? AND consulta = ? AND horario = ?";
    db.query(mysql, [nome, email, contato, consulta, horario], (err, result) => {
    if (err) res.send(err);
    res.send(result);
    });
});

app.get("/getCards", (req, res) => {
    let SQL = "SELECT * from new_table";

    db.query(SQL, (err, result) => {
        if(err) {
            console.log(err)
        } else {
            res.send(result);
        }
    })
})

app.put("/edit", (req, res) => {
    const {id} = req.body;
    const {nome} = req.body;
    const {email} = req.body;
    const {contato} = req.body;
    const {consulta} = req.body;
    const {horario} = req.body;

    let mysql = "UPDATE new_table SET name = ?, email = ?, contato = ?, consulta = ?, horario = ? WHERE id = ?";

    db.query(mysql,[nome, email, contato, consulta, horario, id], (err, result) => {
        if(err) {
            console.log(err);
        } else {
            res.send(result);
        }
    })
})


app.delete("/delete/:id", (req, res) => {
    const { id } = req.params;
    let mysql = "DELETE FROM new_table WHERE id = ?";
    db.query(mysql, id, (err, result) => {
    if (err) {
        console.log(err);
    } else {
        res.send(result);
    }
    });
});

app.listen(3001, () => {
    console.log(`rodando servidor na porta http://localhost:3001s`)
})
