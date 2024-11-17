import express from "express"
import { checkUserAssessmentStatus, fetchUserAssessmentHistory, fetchUserLatestAssessment, getAssessmentById, startNewRound, submitCatgegoryTest } from "../controllers/assessment.js"
import { isAuthenticated } from "../middlewares/authMiddleware.js"

const router = express.Router();

router.get("/status", isAuthenticated, checkUserAssessmentStatus);
router.post("/start-new-round", isAuthenticated, startNewRound);
router.patch("/submit", isAuthenticated, submitCatgegoryTest);
router.get("/latest-attempt",isAuthenticated, fetchUserLatestAssessment);
router.get("/all-attempts",isAuthenticated, fetchUserAssessmentHistory);
router.get("/:assessmentId", isAuthenticated, getAssessmentById);

export default router;