import {Router} from "express";

import {userRouter} from "./userRouter";
import teacherRouter from "./teacherRouter";

const router = Router();
router.use('/login',userRouter);
router.use('/teacher', teacherRouter);
export default router;
