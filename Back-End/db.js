//meu arquivo de conexão com o banco de dados
//npm i cors/mysql2

const mysql = require('mysql2/promise')

//pool de conexão

const pool = mysql.createPool({
    //criar as configurações do banco de dados
    //host é o endereço do banco/onde ele ta
    host:"localhost",
    user:"root", //isso td é como se fosse o mysql.exe -u root -p 
    password:"",
    port:3306,
    database:"contate_nos",
    waitForConnections:true, //se passou do limete maximo de pessoas, ele fica esperando pra se conectar
    connectionLimit:10, //esse é o maximo do de cima ai
    queueLimit:0 //limite maximo de requisições 
})

module.exports = pool //pra exportar