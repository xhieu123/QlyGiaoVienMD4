import teacherController from "../controller/teacherController";
import {Router} from "express";
const teacherRouter = Router();
teacherRouter.get('/',teacherController.findAll);
teacherRouter.post('',teacherController.add);
teacherRouter.put('/:id',teacherController.update);
teacherRouter.delete('/:id',teacherController.delete);
export default teacherRouter;