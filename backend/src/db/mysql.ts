import { createConnection, Connection} from 'mysql2';

let MySQLConnection: Connection;

function InitSQL(): Connection {
    return createConnection({
        host: "localhost",
        user: "root",
        password: "1234",
        database: "ControlWiseDB",
        port: 3306
    })
}

function SQLQuery(query: String, val: String | String[]): Promise<T[]> {

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


export function SQLSelect(param: String, val: String): Promise<T[]> {

    let query: String = "SELECT * FROM LOGIN WHERE " + param + " = ?";
    return SQLQuery(query, [val]);

}

export function SQLInsert(person: any): Promise<T[]> {
    
    let queryLogin: String = "INSERT INTO LOGIN (LOGIN_EMAIL, LOGIN_SENHA) VALUES ?";
    let queryClient: String = "INSERT INTO CLIENTE (CLI_LOGIN_ID, CLI_CPF, CLI_RG, CLI_DATANASC, CLI_FONE, CLI_CIDADE) VALUES ?";
    let queryGetLogin;
    let valLogin: any[][] = [[person.Email, person.Senha]];
    let valClient: any[][];

    //Ele vai inserir no banco de dados, ai dps faz o SELECT pro queryGetLogin pra pegar o id da tabela do login e inserir no client 
    SQLQuery(queryLogin, [valLogin])
    .then(() => {
        queryGetLogin = SQLSelect("LOGIN_EMAIL", person.Email);
    }).catch((error) => {
        throw error;
    });

    queryGetLogin.then((res) => {
        valClient = [[res[0].LOGIN_COD, "60606", "45435", "1995/03/21", "54 696969", "EREBANGO"]];
    }).catch((error) => {
        throw error;
    });

    //Se deus quiser, isso vai dar certo mas tenho 500% de chances de nao da
    return SQLQuery(queryClient, [valClient]);

}

export function SQLUpdate(param: String, val: String, person: any): Promise<T[]> {

    let query: String = "UPDATE Vitimas SET Nome = ?, TimeTorcedor = ?, Cidade = ? WHERE " + param + " = ?";
    let values = [person.Nome, person.TimeTorcedor, person.Cidade, val];
    return SQLQuery(query, values);

}

export function SQLDelete(param: String, val: String): Promise<T[]> {

    let queryLogin: String = "DELETE FROM LOGIN WHERE " + param + " = ?";
    let queryCliente: String = "DELETE FROM CLIENTE WHERE...";
    return SQLQuery(queryLogin, [val]);

}
