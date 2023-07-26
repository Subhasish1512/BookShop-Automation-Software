const Books = require("../model/books")

const changePrice = async(req,res)=>{
    const book = await Books.findOne({"name": req.body.isbn});
    book.price = req.body.price;
    const newbook = await book.save();
    res.status(200).send(newbook);
}

module.exports = changePrice;