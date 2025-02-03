const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    return sequelize.define("ExchangeRates", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        currency_from: {
            type: DataTypes.STRING(10),
            allowNull: false,
        },
        currency_to: {
            type: DataTypes.STRING(10),
            allowNull: false,
        },
        rate: {
            type: DataTypes.DECIMAL(10, 6),
            allowNull: false,
        },
        last_updated: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW,
        },
    }, {
        tableName: "exchange_rates",
        timestamps: false,
    });
};
