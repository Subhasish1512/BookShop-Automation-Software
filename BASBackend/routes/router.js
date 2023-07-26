const router = require('express').Router();
const addBook = require('../controllers/addBook');
const addUser = require('../controllers/addUser');
const changePrice = require('../controllers/changePrice');
const getBook = require('../controllers/getBook');
const getPurchase = require('../controllers/getPurchase');
const getSales = require('../controllers/getSales');
const getThreshold = require('../controllers/getThreshold');
const loginUser = require('../controllers/loginUser');
const purchaseBook = require('../controllers/purchaseBook');
const saleBook = require('../controllers/saleBook');
const getsaleandpurchase = require('../controllers/getsaleandpurchase')


router.post('/addbook', addBook);
router.get('/getbook', getBook);
router.get('/getthreshold', getThreshold);
router.get('/getpurchase', getPurchase);
router.get('/getsales', getSales);
router.post('/salebook', saleBook);
router.post('/purchasebook', purchaseBook);
router.put('/changeprice', changePrice)
router.post('/adduser', addUser)
router.get('/loginuser', loginUser)
router.get('/getsalepurchase', getsaleandpurchase);

module.exports = router;