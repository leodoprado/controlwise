import express from 'express';
import {Response, Request} from 'express'
import cors from 'cors';
import * as path from 'path';
import * as MySQLConnector from '../src/db/mysql';
import sequelize from './db/database'
import { Usuario, Conta, Categoria, Transacoes, Metas } from './db/models'

const app = express();
const port = 3000;

// parse incoming request body and append data to `req.body`
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// enable all CORS request
app.use(cors());

sequelize.sync();

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
app.post('/:table', async (req: Request, res: Response) => {
    let table = req.params.table;
    let {...register} = req.body;

    let result: any;
    try {
        result = await Usuario.create({
            ...register
        })
    }catch(e) {
        console.error(e);
        res.status(500).send("Erro interno no servidor");
    }
    
    res.send(result);

    //let queryRes = MySQLConnector.SQLInsert(table, register);

    /*queryRes.then((result) => {
        res.send(result);
    })
    .catch((error) => {
        console.error(error);
        res.status(500).send("Interal server issues");
    })*/
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