import mongoose from "mongoose";

const commentSchema = new mongoose.Schema({
  content: {
    type: String,
    required: true,
    trim: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
}, { timestamps: true });

const opportunitySchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  location: {
    type: String,
    default: "Siler City, NC"
  },
  minSalary: {
    type: Number,
    min: [0, 'Salary cannot be negative'],
  },
  maxSalary: {
    type: Number,
    min: [0, 'Salary cannot be negative'],
  },
  salaryType: {
    type: String,
    enum: ['hourly', 'yearly'],
    default: 'hourly'
  },
  jobType: {
    type: String,
    enum: ["full-time", "part-time", "contract", "internship"],
  },
  isVerified: {
    type: Boolean,
    default: false,
  },
  images: {
    type: [String],
    default: [],
  },
  comments: [commentSchema],
}, { timestamps: true });

opportunitySchema.index({ createdAt: -1 });

const Opportunity = mongoose.model("Opportunity", opportunitySchema);

export default Opportunity;