const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    return sequelize.define("UserTransactions", {
        trans_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        trans_type: {
            type: DataTypes.ENUM("Currency Exchange", "Money Transfer"),
            allowNull: false,
        },
        currency_from: {
            type: DataTypes.STRING(12),
        },
        currency_to: {
            type: DataTypes.STRING(12),
        },
        amount: {
            type: DataTypes.DECIMAL(12, 3),
            allowNull: false,
        },
        exchange_rate: {
            type: DataTypes.DECIMAL(10, 6),
        },
        amount_in_pln: {
            type: DataTypes.DECIMAL(10, 2),
        },
        recipient_id: {
            type: DataTypes.INTEGER,
        },
        recipient_gets: {
            type: DataTypes.DECIMAL(10, 2),
        },
        user_pays: {
            type: DataTypes.DECIMAL(10, 2),
        },
        total: {
            type: DataTypes.DECIMAL(10, 2),
        },
        created_at: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW,
        },
    }, {
        tableName: "user_transactions",
        timestamps: false,
    });
};
