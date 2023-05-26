import express from 'express';
import {Router} from 'express';
import cors from 'cors';
import * as path from 'path';
import * as MySQLConnector from '../src/mysql.connector';

const app = express();
const port = 3000;

// create database pool
MySQLConnector.init();

// parse incoming request body and append data to `req.body`
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// enable all CORS request
app.use(cors());


//Begin backend
const route = Router()

app.use(express.json())

//@ts-ignore
route.get('/', (req, res) => {
  res.send("easd")
})

app.use(route)


app.listen(port, () => 'server running on port 3333')
