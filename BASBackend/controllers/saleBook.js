const Books = require("../model/books");
const Sales = require("../model/sales");

const saleBook = async(req,res)=>{
    const bookorders = req.body.bookorders;
    const bookkeys = Object.keys(bookorders);
    const newsale = new Sales({
        salesID: new Date(),
        content: bookorders,
        totalBill: req.body.totalBill
    })
    bookkeys.map(async(bookkey)=>{
        const book = await Books.findOne({"ISBN": bookkey});
        if(book.quantity>=bookorders[bookkey]){
            book.quantity-=bookorders[bookkey];
            book.currentusage+=bookorders[bookkey];
        };
        const savebook = await book.save();
        // console.log(savebook);
    });
    const savesale = await newsale.save();
    // console.log(savesale);
    res.status(200).send(savesale);
}

module.exports = saleBook;