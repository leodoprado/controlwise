import { Association, DataTypes, Model } from 'sequelize';
import sequelize from './database'

/*class Usuario extends Model {
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



/*}*/

/*Usuario.init(
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
        },
        USR_DATACAD: {
            type: DataTypes.DATE,
            allowNull: false
        }
    },
    {
        sequelize,
        tableName: "USUARIO"
    }
)

/*class Conta extends Model {
    public CONTA_COD!: number;
    public CONTA_USRCOD!: number;
    public CONTA_NOME!: string;
    public CONTA_TIPO!: string;
    public CONTA_SALDO!: string;
    public CONTA_DATACAD?: string;
}*/

export const Usuario = sequelize.define('USUARIO', {
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
Metas.belongsTo(Usuario);