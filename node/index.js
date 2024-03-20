const express = require('express')
const app = express()
const port = 3000
const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database: 'nodedb'

};
const mysql = require('mysql')
const connection = mysql.createConnection(config)

const sql = `DROP TABLE IF EXISTS people;`
connection.query(sql)

const createTable = `CREATE TABLE people(id int not null auto_increment, name varchar(255), primary key(id));`
connection.query(createTable)

const names = ['Fernando', 'Morais', 'Peixoto']

for (let i = 0; i < names.length; i++) {
    connection.query('INSERT INTO people(name) values(?);', [names[i]])
}
connection.end(
    function (err) {
        if (err) throw err;
        else console.log('Closing connection.')
    });
app.get('/', (req, res) => {
    readData(res)
})

function readData(res) {
    const connect = mysql.createConnection(config)
    connect.query('SELECT * FROM people',
        function (err, results, fields) {
            if (err) throw err;
            else console.log('Selected ' + results.length + ' row(s).');
            var html = '<h1>Full Cycle Rocks!</h1><br/>'
            for (i = 0; i < results.length; i++) {
                html += results[i].name + '<br/>';
            }
            res.send(html);
        })
    connect.end(
        function (err) {
            if (err) throw err;
            else console.log('Closing connection.')
        });
};

app.listen(port, () => {
    console.log('rodando na porta' + port)
})