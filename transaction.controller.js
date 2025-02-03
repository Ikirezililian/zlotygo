const db = require("../models");

const UserTransactions = db.UserTransactions;

exports.createTransaction = async (req, res) => {
    const { user_id, trans_type, currency_from, currency_to, amount, exchange_rate } = req.body;

    try {
        const newTransaction = await UserTransactions.create({
            user_id,
            trans_type,
            currency_from,
            currency_to,
            amount,
            exchange_rate,
            amount_in_pln: amount * exchange_rate,
            created_at: new Date(),
        });

        res.status(201).json({ message: "Transaction created successfully", transaction: newTransaction });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getTransactions = async (req, res) => {
    try {
        const transactions = await UserTransactions.findAll();
        res.json(transactions);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
