const { Sequelize } = require("sequelize");
const dbConfig = require("../config/db.config");

const sequelize = new Sequelize(
    dbConfig.DB,
    dbConfig.USER,
    dbConfig.PASSWORD,
    { host: dbConfig.HOST, dialect: dbConfig.dialect }
);

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.User = require("./user.model")(sequelize);
db.UserDetails = require("./userDetails.model")(sequelize);
db.UserTransactions = require("./userTransactions.model")(sequelize);
db.ExchangeRates = require("./exchangeRates.model")(sequelize);
db.TransactionFees = require("./transactionFees.model")(sequelize);
db.UserBalances = require("./userBalances.model")(sequelize);

module.exports = db;
