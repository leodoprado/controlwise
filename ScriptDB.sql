/*
TABELAS:
	LOGIN;
    CLIENTES;
    MOVIMENTACOES(DESPESAS E RECEITAS);
*/

CREATE TABLE LOGIN (
	LOGIN_COD INT NOT NULL AUTO_INCREMENT,
    LOGIN_EMAIL VARCHAR(60),
    LOGIN_SENHA VARCHAR(50),
    PRIMARY KEY(LOGIN_COD)
);

CREATE TABLE CLIENTE (
	CLI_COD INT NOT NULL AUTO_INCREMENT,
    CLI_LOGIN_ID INT NOT NULL,
    CLI_CPF VARCHAR(16) NOT NULL,
    CLI_RG VARCHAR(20),
    CLI_DATANASC DATE,
    CLI_IDADE INT AS (TIMESTAMPDIFF(YEAR, CLIENTE_DATANASC, NOW())),
    CLI_FONE VARCHAR(20),
    CLI_CIDADE VARCHAR(50),
    PRIMARY KEY(CLI_COD),
    FOREIGN KEY (CLI_LOGIN_ID) REFERENCES LOGIN(LOGIN_COD)
);

CREATE TABLE MOVIMENTACOES (
	MOV_COD INT NOT NULL AUTO_INCREMENT,
    MOV_CLICOD INT NOT NULL,
    MOV_DATA DATETIME NOT NULL,
    MOV_VALOR DECIMAL(6,2),
    MOV_TIPO VARCHAR(1) NOT NULL, /*D - DESPESAS(MOVIMENTAÇÕES COM SALDO POSITIVO), 
                                    R - RECEITAS(MOVIMENTAÇÕES COM SALDO NEGATIVO)*/
    PRIMARY KEY(MOV_COD),
    FOREIGN KEY(MOV_CLICOD) REFERENCES CLIENTE(CLI_COD)
);