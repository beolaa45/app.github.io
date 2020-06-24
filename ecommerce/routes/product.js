const express = require('express');
const router = express.Router();

const { create, productById, read, remove, update, list, litsRelated, listCategories, listBySearch } = require('../controllers/product');
const { requireSignin, isAuth, isAdmin } = require('../controllers/auth');
const { userById } = require('../controllers/user');



router.get("/product/:productId", read)
router.put('/product/:productId/:userId', requireSignin, isAuth, isAdmin, update );
router.delete('/product/:productId/:userId', requireSignin, isAuth, isAdmin, remove );
router.post('/product/create/:userId', requireSignin, isAuth, isAdmin ,create);

router.get('/products', list);
router.get('/products/related/:productId', litsRelated)
//find on Product has categories dif nhau
router.get('/products/categories', listCategories);
router.post('/products/by/seacrh', listBySearch)
router.param("userId", userById);
router.param("productId", productById)
module.exports = router