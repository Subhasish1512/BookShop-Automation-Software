const Books = require("../model/books");

const addBook = async(req,res)=>{
    const newBook = new Books({
        name: req.body.name,
        ISBN: req.body.ISBN,
        quantity: req.body.quantity,
        shelf: req.body.shelf,
        publisher: req.body.publisher,
        author: req.body.author,
        price: req.body.price,
        publisherAddress: req.body.publisherAddress,
    });

    const savenew = await newBook.save();
    res.status(200).send(savenew);
}

module.exports = addBook;