import express from 'express';
import { createStudyPlan, deleteStudyPlan, getStudyPlans , editStudyPlan} from '../controllers/studyPlanController.js'


const router = express.Router();


router.post('/studyplan', createStudyPlan);
router.get('/studyplan', getStudyPlans);

router.put('/studyplan/:id',editStudyPlan);//Assuming update is handled by the same controllers function
router.delete('/studyplan/:id',deleteStudyPlan);//Assuming delete is handled by the same controllers function

export default router;
