import { Sequelize } from 'sequelize';
const sequelize = new Sequelize('controlwise', 'root', 'senha123', {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306
})




export default sequelize;