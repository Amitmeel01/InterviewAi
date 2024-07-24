import mongoose, { Schema, model, models } from "mongoose";

const UserAnswerSchema = new Schema({
  mockIdRef: {
    type: String,
    ref: "interviewModel",
    required: true,
  },
  question: {
    type: String,
    required: true,
  },
  correctAnswer: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
  },
  userAns: {
    type: String,
    required: true,
  },
  feedback: {
    type: String,
    required: true,
  },
  userEmail: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "UserModel",
    required: true,
  },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
}, { timestamps: true });

const UserAnswerModel = models?.UserAnswerModel || model("UserAnswerModel", UserAnswerSchema);

export default UserAnswerModel;
