import express from 'express';
import {Response, Request} from 'express'
import cors from 'cors';
import * as path from 'path';
import * as MySQLConnector from '../src/db/mysql';

const app = express();
const port = 3000;

// parse incoming request body and append data to `req.body`
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// enable all CORS request
app.use(cors());

//These are endpoints for SQL queries 
//SELECT
app.get('/cli/:param/:val', (req: Request, res: Response) => {

    const param = req.params.param;
    const val = req.params.val;
    let queryRes = MySQLConnector.SQLSelect(param, val);

    queryRes.then((result) => {
        res.send(result);
    })
    .catch((error) => {
        console.error(error);
        res.status(500).send("Interal server issues");
    })
})

//INSERT
app.post('/cli', (req: Request, res: Response) => {

    let queryRes = MySQLConnector.SQLInsert(req.body);

    queryRes.then((result) => {
        res.send(result);
    })
    .catch((error) => {
        console.error(error);
        res.status(500).send("Interal server issues");
    })
})



//UPDATE 
app.put('/cli/:param/:val', (req: Request, res: Response) => {

    const param = req.params.param;
    const val = req.params.val;

    let queryRes = MySQLConnector.SQLUpdate(param, val, req.body);

    queryRes.then((result) => {
        res.send(result);
    })
    .catch((error) => {
        console.error(error);
        res.status(500).send("Interal server issues");
    })
})

//DELETE
app.delete('/cli/:param/:val', (req: Request, res: Response) => {

    const param = req.params.param;
    const val = req.params.val;

    let queryRes = MySQLConnector.SQLDelete(param, val);

    queryRes.then((result) => {
        res.send(result);
    })
    .catch((error) => {
        console.error(error);
        res.status(500).send("Interal server issues");
    })
})
   
app.listen(port, () => 'server running on port 3333')