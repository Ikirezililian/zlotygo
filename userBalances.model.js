const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    return sequelize.define("UserBalances", {
        user_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
        },
        currency: {
            type: DataTypes.STRING(10),
            primaryKey: true,
            allowNull: false,
        },
        balance: {
            type: DataTypes.DECIMAL(15, 2),
        },
    }, {
        tableName: "user_balances",
        timestamps: false,
    });
};
