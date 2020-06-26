const express = require('express');
const router = express.Router();

const { create, categoryId, read, update, remove, list } = require('../controllers/category');
const { requireSignin, isAuth, isAdmin } = require('../controllers/auth');
const { userById } = require('../controllers/user');



router.put("/category/:categoryId/:userId" , requireSignin, isAuth, isAdmin, update );
router.delete("/category/:categoryId/:userId" , requireSignin, isAuth, isAdmin, remove );
router.post('/category/create/:userId', requireSignin, isAuth, isAdmin ,create);
router.get('/category/:categoryId', read);


router.param("userId", userById);
router.param("categoryId", categoryId);
//list categoryes
router.get('/categories', list);
module.exports = router;