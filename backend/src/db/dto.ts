export interface Login {
    id: number,
    email: "String",
    password: "String"
}

export interface Cliente {
    id: number,
    loginId: number,
    cpf: String,
    rg: String,
    dataNasc: any,
    fone: String,
    cidade: String,
}

export interface Movimentacoes {
    id: number,
    idCli: number,
    data: any,
    valor: number,
    tipo: String, // D - DESPESAS(MOVIMENTAÇÕES COM SALDO POSITIVO), R - RECEITAS(MOVIMENTAÇÕES COM SALDO NEGATIVO)
}