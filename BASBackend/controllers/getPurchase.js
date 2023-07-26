const Purchases = require("../model/purchases")

const getPurchase = async(req,res) => {
    const purchase = await Purchases.find({})
    res.send(200).status(purchase);
}   

module.exports = getPurchase;