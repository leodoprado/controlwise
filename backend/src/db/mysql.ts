import { createConnection, Connection} from 'mysql2';
import {Usuario} from './dto';

//let MySQLConnection: Connection;

function InitSQL(): Connection {
    return createConnection({
        host: "localhost",
        user: "root",
        password: "1234",
        database: "ControlWiseDB",
        port: 3306
    })
}


function SQLQuery(query: String, val: String | String[]): Promise<T> {

    let MySQLConnection = InitSQL();

    return new Promise<T>((resolve, reject) => {

        MySQLConnection.connect((error) => {
            
            if(error) {
                reject(error);
                return;
            }

            MySQLConnection.query(query, val /*[val]*/, (error, results) => {
                if (error) reject(error);
                resolve(results);
              });
            MySQLConnection.end();
        })
      });
}


export function SQLSelect(table: String, param: String, val: String): Promise<T> {

    let query: String = "SELECT * FROM " + table.toUpperCase() + " WHERE " + param.toUpperCase() + " = ?";
    return SQLQuery(query, [val]);

}

export function SQLInsert(table: String, register: any): Promise<T> {
    
    let val: any[] = [];
    let columnParams: String = "";
    for(const column in register) {
        columnParams += column;
        columnParams += ", ";

        val.push(register[column]);
    }
    columnParams = columnParams.slice(0, columnParams.length-2);
    let query: String = "INSERT INTO "+ table.toUpperCase() +" ("+ columnParams +") VALUES ?";

    //Se deus quiser, isso vai dar certo
    return SQLQuery(query, [[val]]);
    
    //Backups
    //let valBackup: any[] = [person.USR_SENHA, person.USR_EMAIL, person.USR_FONE, person.USR_NOME, person.USR_CPF, person.USR_RG, person.USR_DATANASC, person.USR_CIDADE, person.USR_DATACAD];
    //let queryUserBackup: String = "INSERT INTO USUARIO (USR_SENHA, USR_EMAIL, USR_FONE, USR_NOME, USR_CPF, USR_RG, USR_DATANASC, USR_CIDADE, USR_DATACAD) VALUES ?";

}

export function SQLUpdate(table: String, register: any, column: String, cond: any): Promise<T> {

    let columnParams: String = "";
    let values: any[] = [];

    for(const column in register) {
        columnParams += column + " = ?, ";
        values.push(register[column]);
    }

    columnParams = columnParams.slice(0, columnParams.length-2)

    values.push(cond);

    let query: String = "UPDATE " + table.toUpperCase() + " SET " + columnParams.toUpperCase() + " WHERE " + column.toString() + " = ?";

    //let values = [person.Nome, person.TimeTorcedor, person.Cidade, val];
    return SQLQuery(query, values);

}

export function SQLDelete(table: String, column: String, cond: any): Promise<T[]> {

    let query: String = "DELETE FROM " + table.toUpperCase() + " WHERE " + column.toUpperCase() + " = ?";
    return SQLQuery(query, [cond]);

}
