import { Sequelize } from 'sequelize';

// Option 3: Passing parameters separately (other dialects)
const db = new Sequelize('marketApp', 'root','ODC1',{
  host: 'localhost',
  dialect: 'mysql'
});

export default db;