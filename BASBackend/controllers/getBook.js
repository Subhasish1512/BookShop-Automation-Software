const Books = require("../model/books");

const getBook = async(req,res)=>{
    const searchparam = req.headers.params;
    // console.log(searchparam);
    let getbook;
    if(searchparam=="ISBN"){
        getbook = await Books.find({ISBN: {"$regex":req.headers.query, "$options": "i"}});
    }else if(searchparam=="name"){
        getbook = await Books.find({name: {"$regex":req.headers.query, "$options": "i"}});
    }else{
        getbook = await Books.find({author: {"$regex":req.headers.query, "$options": "i"}});
    }
    res.status(200).send(getbook)
}

module.exports = getBook;