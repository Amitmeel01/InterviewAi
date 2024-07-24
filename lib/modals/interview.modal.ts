import mongoose, { Schema, model, models } from "mongoose";

const interviewSchema = new Schema({
  mockId: {
    type: String,
    required: true,
    unique: true,
  },
 jobPosition: {
    type: String,
    required: true,
   
  },
  Experince: {
    type: Number,
    required: true,
    
  },
  jsonMockRes:{
 type:String,
 required: true,

  },
  jobDes:{
    type:String,
    required: true,
  },

  createdBy:{
         
          type:mongoose.Schema.Types.ObjectId,
          ref:"UserModel"
  },
 
  createdAt:{type:Date,default:Date.now},
  updatedAt:{type:Date,default:Date.now}
  
},{timestamps:true});

const interviewModel = models?.interviewModel || model("interviewModel", interviewSchema);

export default interviewModel;