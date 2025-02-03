const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    return sequelize.define("UserDetails", {
        user_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        first_name: {
            type: DataTypes.STRING(50),
            allowNull: false,
        },
        last_name: {
            type: DataTypes.STRING(50),
            allowNull: false,
        },
        dob: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        gender: {
            type: DataTypes.ENUM("male", "female", "non-binary"),
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING(100),
            unique: true,
            allowNull: false,
        },
        address: {
            type: DataTypes.STRING(255),
        },
        postal_code: {
            type: DataTypes.STRING(12),
        },
        city: {
            type: DataTypes.STRING(50),
        },
        country: {
            type: DataTypes.STRING(50),
        },
        phone_number: {
            type: DataTypes.BIGINT,
        },
        nationality: {
            type: DataTypes.STRING(50),
        },
        national_id: {
            type: DataTypes.BIGINT,
        },
    }, {
        tableName: "user_details",
        timestamps: false,
    });
};
