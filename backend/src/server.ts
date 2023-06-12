import express from 'express';
import {Response, Request} from 'express'
import cors from 'cors';
import * as path from 'path';
import * as MySQLConnector from '../src/db/mysql';
import sequelize from './db/database'
//import { Usuario, Conta, Categoria, Transacoes, Metas } from './db/models'
import { Model, ModelCtor } from 'sequelize';
import { Usuario, Conta, Categoria, Transacoes, Metas } from './db/models'
import bodyParser from 'body-parser';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';


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
app.get('/:table', async (req: Request, res: Response) => {

    const table = req.params.table;
    const cond = req.body.data

    let result: any;
    try {
        result = await tableList.get(table.toUpperCase()).findAll({
            where: cond
        })
    }catch(e) {
        console.error(e);
        res.status(500).send("Erro interno no servidor");
    }
    
    res.send(result);    

    /*let queryRes = MySQLConnector.SQLSelect(table, column, val);*/
})

app.get('/emailsenha/:email/:password', async (req: Request, res: Response) => {

    console.log("\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA")
    const email = req.params.email;
    const password = req.params.password;

    //console.log("\n\n\n" + req.params.email + "\n\n\n")
    //console.log(req.params.password)

    let result: any;
    try {
        result = await Usuario.findOne({
            where: {
              USR_EMAIL: email,
              USR_SENHA: password
            }
          })
    }catch(e) {
        console.error(e);
        res.status(500).send("Erro interno no servidor");
    }
    
    res.send("result");    

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

// Rota de autenticação
app.post('/api/login', (req, res) => {
    /*const { username, password } = req.body;
  
    // Verifique se o usuário existe no banco de dados
    const user = users.find((u) => u.username === username);
    if (!user) {
      return res.status(404).json({ message: 'Usuário não encontrado.' });
    }
  
    // Verifique a senha
    if (!bcrypt.compareSync(password, user.password)) {
      return res.status(401).json({ message: 'Credenciais inválidas.' });
    }
  
    // Crie e retorne um token de acesso JWT
    const token = jwt.sign({ userId: user.id }, 'seuSegredoSuperSecreto', { expiresIn: '1h' });
    res.json({ token });*/
});
   
app.listen(port, () => 'server running on port 3333')