const express = require('express')
const cors = require('cors')
const mysql = require('mysql2/promise')
const porta = 3000
const server = express()
server.use(cors())
server.use(express.json())
const pool = require("./db.js") //importar o banco de dados
//no console de npm i para voltar node_modules

server.listen(porta,() =>{
    console.log("Servidor rodando")
})

server.post("/fale_conosco", async(req,res)=>{
    try {
        const {nome,email,telefone,assunto,mensagem} = req.body

        if(email == ""){
            return res.json(
                {"resposta": "Preencha um e-mail"})
        }else if(email.length < 8){
            return res.json(
                {"resposta": "Preencha um e-mail com mais de 8 caracteres"})
        } else if(nome.length < 8){
            return res.json(
                {"resposta": "Preencha um nome com mais de 8 caracteres"})
        } else if(assunto == ""){
            return res.json(
                {"resposta":"Preencha um assunto"})
        } else if(mensagem == ""){
            return res.json(
                {"resposta":"Preencha uma mensagem"})
        }

        let sql = `insert into fale_conosco (nome,email,telefone,assunto,mensagem) values (?,?,?,?,?)`
        let [resultado] = await pool.query(sql,[nome,email,telefone,assunto,mensagem])

        if(resultado.affectedRows == 1){
            return res.json(
                {"resposta": "Mensagem enviada!"})
        } else{
            return res.json(
                {"resposta":"Erro ao enviar a mensagem!"})
        }

    } catch (error) {
        console.log(error)
    }
})