const Purchases = require("../model/purchases")
const Books = require("../model/books")

const purchaseBook = async(req,res) => {
    const bookorders = req.body.bookorders;
    const bookkeys = Object.keys(bookorders);
    bookkeys.map(async(bookkey)=>{
        const book = await Books.findOne({"ISBN": bookkey});
        // console.log(book);
        book.quantity+=bookorders[bookkey];
        const savebook = await book.save();
        // console.log(savebook);
    })
    const newPurchase = new Purchases({
        purchaseId: new Date(),
        content: bookorders,
        totalInvoice: req.body.totalInvoice,
        Delivered: true,
        Paid: true,
    });
    const savepurchase = await newPurchase.save();
    res.status(200).send(savepurchase);
}

module.exports = purchaseBook;