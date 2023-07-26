const Sales = require("../model/sales");

const getSales = async(req,res) => {
    const sales = await Sales.find({});
    res.status(200).send(sales);
}

module.exports = getSales;