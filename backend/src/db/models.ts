import { Association, DataTypes, Model } from 'sequelize';
import sequelize from './database'

export class Usuario extends Model {
    public USR_COD!: number;
    public USR_SENHA!: string;
    public USR_EMAIL!: string;
    public USR_FONE!: string;
    public USR_NOME!: string;
    public USR_CPF?: string;
    public USR_RG?: string;
    public USR_DATANASC?: Date;
    public USR_CIDADE?: string;
    public USR_DATACAD?: Date;

    /*public readonly conta?: Conta[];

    public static associations: {
        conta: Association<Usuario, Conta>
    }*/
}

Usuario.init(
    {
        USR_COD: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        USR_SENHA: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        USR_EMAIL: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        USR_FONE: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        USR_NOME: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        USR_CPF: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        USR_RG: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        USR_DATANASC: {
            type: DataTypes.DATE,
            allowNull: true,
        },
        USR_CIDADE: {
            type: DataTypes.STRING,
            allowNull: true,
        }
        /*,
        USR_DATACAD: {
            type: DataTypes.DATE,
            allowNull: false
        }*/
    },
    {
        sequelize,
        tableName: "USUARIO",
        freezeTableName: true,
        timestamps: false
    }
)

export class Conta extends Model {
    public CONTA_COD!: number;
    public CONTA_USRCOD!: number;
    public CONTA_NOME!: string;
    public CONTA_TIPO!: string;
    public CONTA_SALDO!: string;
    public CONTA_DATACAD?: string;

    public readonly usuario?: Usuario;

    public static associations: {
        Usuario: Association<Conta, Usuario>
    }
}

Conta.init({
    USR_COD: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    CONTA_USRCOD: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Usuario,
            key: "USR_COD"
        }
    },
    USR_SENHA: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    USR_EMAIL: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    USR_FONE: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    USR_NOME: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    USR_CPF: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    USR_RG: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    USR_DATANASC: {
        type: DataTypes.DATE,
        allowNull: true,
    },
    USR_CIDADE: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    USR_DATACAD: {
        type: DataTypes.DATE,
        allowNull: false
    }}, 
    {
        sequelize,
        tableName: "CONTA",
        freezeTableName: true,
        timestamps: false
    }
)

export class Categoria extends Model {
    public CATEG_COD!: number;
    public CATEG_NOME!: string;
    public CATEG_TIPO!: string;
}

Categoria.init({
    CATEG_COD: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    CATEG_NOME: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    CATEG_TIPO: {
        type: DataTypes.INTEGER,
        allowNull: false,
    }   
}, {
        sequelize,
        tableName: "CATEGORIA",
        freezeTableName: true,
        timestamps: false
  })


export class Transacoes extends Model {
    public TRSC_COD!: number;
    public TRSC_CONTACOD!: number;
    public TRSC_CATEGCOD!: number;
    public TRSC_VALOR!: number;
    public TRSC_DESCRICAO!: string;
    public TRSC_DATA!: string;

    public readonly conta?: Conta;
    public readonly categoria?: Categoria;

    public static associations: {
        conta: Association<Transacoes, Conta>
        categoria: Association<Transacoes, Categoria>
    }
}

Transacoes.init({
    TRSC_COD: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    TRSC_CONTACOD: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Conta,
            key: "CONTA_COD"
        }
    },
    TRSC_CATEGCOD: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Categoria,
            key: "CATEG_COD"
        }
    },  
    TRSC_VALOR: {
        type: DataTypes.DECIMAL,
        allowNull: false,
    }, 
    TRSC_DESCRICAO: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    TRSC_DATA: {
        type: DataTypes.DATE,
        allowNull: false,
    },
}, {
        sequelize,
        tableName: "CATEGORIA",
        freezeTableName: true,
        timestamps: false
  })

export class Metas extends Model {
    public METAS_COD!: number;
    public METAS_USRCOD!: number;
    public METAS_DESCRICAO!: string;
    public METAS_VALOR!: number;
    public METAS_DATALIMITE!: string;

    public readonly usuario?: Usuario;

    public static associations: {
        usuario: Association<Metas, Usuario >
    }
}

Metas.init({
    METAS_COD: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    METAS_USRCOD: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Usuario,
            key: "USR_COD"
        }
    },
    METAS_DESCRICAO: {
        type: DataTypes.STRING,
        allowNull: false,
    },  
    METAS_VALOR: {
        type: DataTypes.DECIMAL,
        allowNull: false,
    }, 
    METAS_DATALIMITE: {
        type: DataTypes.STRING,
        allowNull: false,
    }
}, {
        sequelize,
        tableName: "CATEGORIA",
        freezeTableName: true,
        timestamps: false
  })

Usuario.hasOne(Conta);
Conta.belongsTo(Usuario);

Transacoes.belongsTo(Conta);
Conta.hasMany(Transacoes);

Transacoes.belongsTo(Categoria);
Categoria.hasMany(Transacoes);

Usuario.hasMany(Metas);
Metas.belongsTo(Usuario);

/*export const Usuario = sequelize.define('USUARIO', {
    USR_COD: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    USR_SENHA: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    USR_EMAIL: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    USR_FONE: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    USR_NOME: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    USR_CPF: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    USR_RG: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    USR_DATANASC: {
        type: DataTypes.DATE,
        allowNull: true,
    },
    USR_CIDADE: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    USR_DATACAD: {
        type: DataTypes.DATE,
        allowNull: false
    }
}, {
    freezeTableName: true,
    timestamps: false
  })

export const Conta = sequelize.define('CONTA', {
    CONTA_COD: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    CONTA_USRCOD: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    CONTA_NOME: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    CONTA_TIPO: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    CONTA_SALDO: {
        type: DataTypes.DECIMAL,
        allowNull: false,
    },
    CONTA_DATACAD: {
        type: DataTypes.DATE,
        allowNull: true,
    }
}, {
    freezeTableName: true,
    timestamps: false
  })

Usuario.hasOne(Conta);
Conta.belongsTo(Usuario);

export const Categoria = sequelize.define('CATEGORIA', {
    CATEG_COD: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    CATEG_NOME: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    CATEG_TIPO: {
        type: DataTypes.INTEGER,
        allowNull: false,
    }   
}, {
    freezeTableName: true,
    timestamps: false
  })

export const Transacoes = sequelize.define('TRANSACOES', {
    TRSC_COD: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    TRSC_CONTACOD: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    TRSC_CATEGCOD: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },  
    TRSC_VALOR: {
        type: DataTypes.DECIMAL,
        allowNull: false,
    }, 
    TRSC_DESCRICAO: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    TRSC_DATA: {
        type: DataTypes.DATE,
        allowNull: false,
    },
}, {
    freezeTableName: true,
    timestamps: false
  })

Transacoes.belongsTo(Conta);
Conta.hasMany(Transacoes);

Transacoes.belongsTo(Categoria);
Categoria.hasMany(Transacoes);

export const Metas = sequelize.define('METAS', {
    METAS_COD: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    METAS_USRCOD: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    METAS_DESCRICAO: {
        type: DataTypes.STRING,
        allowNull: false,
    },  
    METAS_VALOR: {
        type: DataTypes.DECIMAL,
        allowNull: false,
    }, 
    METAS_DATALIMITE: {
        type: DataTypes.STRING,
        allowNull: false,
    }
}, {
    freezeTableName: true,
    timestamps: false
  })

Usuario.hasMany(Metas);
Metas.belongsTo(Usuario);*/