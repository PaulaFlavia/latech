const express = require('express');
const router = express.Router();
const AdminController = require('../controllers/AdminController');
const validationsAdminSignUp = require('../middlewares/validationsAdminSignUpMiddleware');

router.get('/main', AdminController.main);


router.get('/', AdminController.signUp);
router.post('/create', validationsAdminSignUp, AdminController.createAdmin);

router.get('/login', AdminController.adminLogin);
router.post('/login', AdminController.adminLoginProcess);

router.get('/panel', AdminController.showAdminPanel);

router.get('/adminEditUser/:id', AdminController.adminEditUser);
router.post('/adminEditUser/:id', AdminController.updateUserData);

router.get('/adminProduct', AdminController.adminShowProduct);

router.get('/adminEditProduct/:id', AdminController.adminShowOneProduct);
router.post('/adminEditProduct/:id/update', AdminController.adminEditProduct);

router.get('/adminSearchProduct', AdminController.adminSearchProduct);

router.post('/adminDeleteProduct/:id', AdminController.adminDeleteProduct)

router.get('/logout', AdminController.logoutAdmin);



module.exports = router;
