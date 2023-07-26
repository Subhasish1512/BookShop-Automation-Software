const Books = require("../model/books")

const getThreshold = async(req,res) => {
    const books = await Books.find({});
    const threshold = await [];
    books.map(async(book)=>{
        book.threshold=Math.round((book.threshold+book.currentusage)/2);
        book.currentusage=0;
        if(book.threshold+1>book.quantity){
            threshold.push({
                "name": book.name,
                "publisher": book.publisher,
                "publisherAddress": book.publisherAddress,
                "quantity": book.threshold-book.quantity+1,
            });
        }
        const newbook = await book.save();
    })
    res.status(200).send(threshold);
}

module.exports = getThreshold;