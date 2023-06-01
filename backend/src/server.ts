import express from 'express';
import {Response, Request} from 'express'
import cors from 'cors';
import * as path from 'path';
import * as MySQLConnector from '../src/db/mysql';
import {Usuario} from '../src/db/dto';

const app = express();
const port = 3000;

// parse incoming request body and append data to `req.body`
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// enable all CORS request
app.use(cors());

//These are endpoints for SQL queries 
//SELECT
app.get('/:table/:column/:val', (req: Request, res: Response) => {

    const table = req.params.table;
    const column = req.params.column;
    const val = req.params.val;

    let queryRes = MySQLConnector.SQLSelect(table, column, val);

    queryRes.then((result) => {
        res.send(result);
    })
    .catch((error) => {
        console.error(error);
        res.status(500).send("Interal server issues");
    })
})

//INSERT
app.post('/:table', (req: Request, res: Response) => {

    //console.log(req.body);

    let table = req.params.table;
    let register = req.body;

    let queryRes = MySQLConnector.SQLInsert(table, register);

    queryRes.then((result) => {
        res.send(result);
    })
    .catch((error) => {
        console.error(error);
        res.status(500).send("Interal server issues");
    })
})



//UPDATE 
app.put('/:table/:column/:val', (req: Request, res: Response) => {

    const table = req.params.table;
    const column = req.params.column;
    const val = req.params.val;


    const registry = req.body;

    let queryRes = MySQLConnector.SQLUpdate(table, registry, column, val);

    queryRes.then((result) => {
        res.send(result);
    })
    .catch((error) => {
        console.error(error);
        res.status(500).send("Interal server issues");
    })
})

//DELETE
app.delete('/:table/:column/:val', (req: Request, res: Response) => {

    const table = req.params.table;
    const column = req.params.column;
    const val = req.params.val;

    let queryRes = MySQLConnector.SQLDelete(table, column, val);

    queryRes.then((result) => {
        res.send(result);
    })
    .catch((error) => {
        console.error(error);
        res.status(500).send("Interal server issues");
    })
})
   
app.listen(port, () => 'server running on port 3333')