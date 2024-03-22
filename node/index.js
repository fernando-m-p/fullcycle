const express = require('express')
const mysql = require('mysql')

const app = express()
const port = 3000
const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database: 'nodedb'

};

app.get('/', (req, res) => {
    readData(res)
})

app.get('/add', (req, res) => {
    console.log(req.query);
    if(req.query.nome){
        add(req.query.nome)
    }else{
        add("Peixoto");
    }
    res.redirect('/')
})

app.get('/dell', (req, res) => {
    console.log(req.query);
    if(req.query.nome){
        del(req.query.nome)
    }
    res.redirect('/')
})
createTable();


function readData(res) {
    const connect = mysql.createConnection(config)
    connect.query('SELECT * FROM people',
        function (err, results, fields) {
            if (err) throw err;
            else console.log('Selected ' + results.length + ' row(s).');
            html = "<html><header></header><body>"
            
            var html = html+ '<h1>Full Cycle Rocks!</h1><br/>' +
                '<p><input type="text" name="nome" id="name">'+
                '<a class="btn btn-primary" onclick="nome = document.getElementById(\'name\').value;  const response = fetch(\'/add?nome=\'+nome);" href="/" role="button">Adicionar</a></p> <br/>';
            for (i = 0; i < results.length; i++) {
                html += results[i].name + '<a href="/dell?nome='+results[i].id+'" role="button"> X </a> <br/>';
            }

            res.send(html+"</body>");
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

function createTable() {
    const connection = mysql.createConnection(config)

    const createTable = `CREATE TABLE IF NOT EXISTS people(id int not null auto_increment, name varchar(255), primary key(id));`
    connection.query(createTable)

    connection.end(
        function (err) {
            if (err) throw err;
            else console.log('Closing connection.')
        });
}

function add(...names) {
    const connection = mysql.createConnection(config)


    for (let i = 0; i < names.length; i++) {
        connection.query('INSERT INTO people(name) values(?);', [names[i]])
    }
    connection.end(
        function (err) {
            if (err) throw err;
            else console.log('Closing connection.')
        });
}


function del(name) {
    const connection = mysql.createConnection(config)
    connection.query('DELETE FROM nodedb.people WHERE id=?', [name])
    connection.end(
        function (err) {
            if (err) throw err;
            else console.log('Closing connection.')
        });
}