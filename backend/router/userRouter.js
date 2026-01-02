import express from 'express'
import { adduser, deleteUser, getAll, getById, updateUser } from '../controller/userController.js';



const router = express.Router();


router.post("/add" , adduser);
router.get("/get" , getAll);
router.get("/get/:id" , getById);
router.put("/update/:id" , updateUser);
router.delete("/delete/:id" , deleteUser);





export default router;