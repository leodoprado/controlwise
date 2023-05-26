import { createConnection, Connection} from 'mysql2';

let MySQLConnection: Connection;

function InitSQL(): Connection {
    return createConnection({
        host: "localhost",
        user: "root",
        password: "1234",
        database: "Base",
        port: 3306
    })
}

function SQLQuery(query: String, val: String | String[]): Promise<T> {

    MySQLConnection = InitSQL();

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


export function SQLSelect(param: String, val: String): Promise<T> {

    let query: String = "SELECT * FROM Vitimas WHERE " + param + " = ?";
    return SQLQuery(query, [val]);

}

export function SQLInsert(person: any): Promise<T> {
    
    let query: String = "INSERT INTO Vitimas (Nome, TimeTorcedor, Cidade) VALUES ?";
    let val = [[person.Nome, person.TimeTorcedor, person.Cidade]];
    return SQLQuery(query, [val]);

}

export function SQLUpdate(param: String, val: String, person: any): Promise<T> {

    let query: String = "UPDATE Vitimas SET Nome = ?, TimeTorcedor = ?, Cidade = ? WHERE " + param + " = ?";
    let values = [person.Nome, person.TimeTorcedor, person.Cidade, val];
    return SQLQuery(query, values);

}

export function SQLDelete(param: String, val: String): Promise<T> {

    let query: String = "DELETE FROM Vitimas WHERE " + param + " = ?";
    return SQLQuery(query, [val]);

}
