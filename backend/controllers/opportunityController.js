import Opportunity from "../models/opportunityModel.js";
import mongoose from "mongoose";


export const getAllOpportunities = async (req, res) => {
  try {
    const opportunities = await Opportunity.find().
    populate("author", "name email")
    .sort({ createdAt: -1 });
    res.json(opportunities);
  } catch (error) {
    console.error("Error fetching opportunities:", error);
    res.status(500).json({ message: "Server error" });
  }
};

export const createOpportunity = async (req, res) => {
  const { title, description, location, minSalary, maxSalary, salaryType, jobType } = req.body;
  const userId = req.user._id;
  try {    const newOpportunity = new Opportunity({
      title,
      description,
      location,
      minSalary,
      maxSalary,
      salaryType,
      jobType,
      author: userId
    });
    const savedOpportunity = await newOpportunity.save();
    res.status(201).json(savedOpportunity);
  } catch (error) {
    console.error("Error creating opportunity:", error);
    res.status(500).json({ message: "Server error" });
  }
};

export const getOpportunityById = async (req, res) => {
  const { id } = req.params;
  try {
    const opportunity = await Opportunity.findById(id).populate("author", "name email");
    if (!opportunity) {
      return res.status(404).json({ message: "Opportunity not found" });
    }
    res.json(opportunity);
  } catch (error) {
    console.error("Error fetching opportunity:", error);
    res.status(500).json({ message: "Server error" });
  }
};

export const deleteOpportunity = async (req, res) => {
  const { id } = req.params;
  const userId = req.user._id;
  try {
    const opportunity = await Opportunity.findById(id);
    if (!opportunity) {
      return res.status(404).json({ message: "Opportunity not found" });
    }
    if (opportunity.author.toString() !== userId.toString() && req.user.role !== 'admin') {
      return res.status(403).json({ message: "Unauthorized" });
    }
    await opportunity.deleteOne();
    res.json({ message: "Opportunity deleted" });
  } catch (error) {
    console.error("Error deleting opportunity:", error);
    res.status(500).json({ message: "Server error" });
  }
};

export const updateOpportunity = async (req, res) => {
  const { id } = req.params;
  const userId = req.user._id;
  const { title, description, location, minSalary, maxSalary, salaryType, jobType } = req.body;
  try {
    const opportunity = await Opportunity.findById(id);
    if (!opportunity) {
      return res.status(404).json({ message: "Opportunity not found" });
    }
    if (opportunity.author.toString() !== userId.toString() && req.user.role !== 'admin') {
      return res.status(403).json({ message: "Unauthorized" });
    }
    opportunity.title = title || opportunity.title;
    opportunity.description = description || opportunity.description;
    opportunity.location = location || opportunity.location;
    opportunity.minSalary = minSalary !== undefined ? minSalary : opportunity.minSalary;
    opportunity.maxSalary = maxSalary !== undefined ? maxSalary : opportunity.maxSalary;
    opportunity.salaryType = salaryType || opportunity.salaryType;
    opportunity.jobType = jobType || opportunity.jobType;
    opportunity.isVerified = false; 
    const updatedOpportunity = await opportunity.save();
    res.json(updatedOpportunity);
  } catch (error) {
    console.error("Error updating opportunity:", error);
    res.status(500).json({ message: "Server error" });
  }
};


export default {
  getAllOpportunities,
  createOpportunity,
  getOpportunityById,
  deleteOpportunity,
  updateOpportunity
};
