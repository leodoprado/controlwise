export interface Usuario {
    id: number,
    USR_SENHA: number,
    USR_EMAIL: String,
    USR_FONE: String,
    USR_NOME: any,
    USR_CPF: String,
    USR_RG: String,
    USR_DATANASC: String,
    USR_CIDADE: String,
    USR_DATACAD: String
}

export interface Conta {
    id: number,
    idCli: number,
    data: any,
    valor: number,
    tipo: String, // D - DESPESAS(MOVIMENTAÇÕES COM SALDO POSITIVO), R - RECEITAS(MOVIMENTAÇÕES COM SALDO NEGATIVO)
}