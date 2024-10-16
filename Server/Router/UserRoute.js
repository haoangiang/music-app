const express = require('express');
const router = express.Router();
const userController = require("../Controllers/UserController");
const authMiddleware = require('../Middleware/AuthMiddleware');

router.get('/user', [
    authMiddleware.isAuthentication
], userController.getListUser);
router.post('/user/create', userController.postUser);

module.exports = router;