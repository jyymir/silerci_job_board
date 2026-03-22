import opportunityController from "../controllers/opportunityController.js";
import express from "express";
const router = express.Router();

router.post("/add", opportunityController.createOpportunity);
router.get("/getAll", opportunityController.getAllOpportunities);
router.get("/getById/:id", opportunityController.getOpportunityById);
router.put("/update/:id", opportunityController.updateOpportunity);
router.delete("/delete/:id", opportunityController.deleteOpportunity);

export default router;