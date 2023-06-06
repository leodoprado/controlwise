import express from 'express';
import {Response, Request} from 'express'
import cors from 'cors';
import * as path from 'path';
import * as MySQLConnector from '../src/db/mysql';
import sequelize from './db/database'
//import { Usuario, Conta, Categoria, Transacoes, Metas } from './db/models'
import { Model, ModelCtor } from 'sequelize';
import { Usuario, Conta, Categoria, Transacoes, Metas } from './db/models'


const app = express();
const port = 3000;

// parse incoming request body and append data to `req.body`
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// enable all CORS request
app.use(cors());

//Connect to DB
sequelize.sync();

let tableList = new Map<string, any> 
tableList.set("USUARIO", Usuario);
tableList.set("CONTA", Conta);
tableList.set("CATEGORIA", Categoria);
tableList.set("TRANSACOES", Transacoes);
tableList.set("METAS", Metas);

//These are endpoints for SQL queries 
//SELECT
app.get('/:table/:column/:val', async (req: Request, res: Response) => {

    const table = req.params.table;
    const column = req.params.column;
    const val = req.params.val;

    let result: any;
    try {
        result = await tableList.get(table.toUpperCase()).findAll({
            where: sequelize.where(sequelize.col(column), val)
        })
    }catch(e) {
        console.error(e);
        res.status(500).send("Erro interno no servidor");
    }
    
    res.send(result);    

    /*let queryRes = MySQLConnector.SQLSelect(table, column, val);*/
})

//INSERT
app.post('/:table', async (req: Request, res: Response) => {
    let table = req.params.table;

    let {...register} = req.body;

    let result: any;
    try {
        result = await tableList.get(table.toUpperCase()).create({
            ...register
        })
    }catch(e) {
        console.error(e);
        res.status(500).send("Erro interno no servidor");
    }
    
    res.send(result);

    //let queryRes = MySQLConnector.SQLInsert(table, register);*/
})



//UPDATE 
app.put('/:table/:column/:val', async (req: Request, res: Response) => {

    const table = req.params.table;
    const column = req.params.column;
    const val = req.params.val;

    const registry = req.body;

    let result: any;
    try {

        result = await tableList.get(table.toUpperCase()).findAll({
            where: sequelize.where(sequelize.col(column), val)
        });

        result = result[0];

        console.log(registry);
        console.log(result);

        for(let col in registry) {

            if(col in result) {
                result[col] = registry[col];
            }
        }

        console.log(result);
        result.save();
        res.send(result[0]);

    }catch(e) {
        console.error(e);
        res.status(500).send("Erro interno no servidor");
    }

    /*let queryRes = MySQLConnector.SQLUpdate(table, registry, column, val);*/
})

//DELETE
app.delete('/:table/:column/:val', async (req: Request, res: Response) => {

    const table = req.params.table;
    const column = req.params.column;
    const val = req.params.val;

    let result: any;
    try {
        result = await tableList.get(table.toUpperCase()).findAll({
            where: sequelize.where(sequelize.col(column), val)
        })

        if (!result) {
            return res.status(404).json({ error: 'Tabela não encontrada!' });
          }

        await result[0].destroy();

    }catch(e) {
        console.error(e);
        res.status(500).send("Erro interno no servidor" + e);
    }
    
    res.send(result);    

    /*let queryRes = MySQLConnector.SQLDelete(table, column, val);*/
})
   
app.listen(port, () => 'server running on port 3333')