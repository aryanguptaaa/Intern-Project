import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
    {
    firstName: {
        type: String,
        required: true,
        min: 2,
        max: 50,
    },
    lastName: {
        type: String,
        required: true,
        min: 2,
        max: 50,
    },
    email: {
        type: String,
        required: true,
        max: 50,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        min: 5,
    },
    avtarIndex: {
        type: Number,
        default: 0,
    },
    about: {type: String },
    tags: {type: [String] }, // tags means tech stack
    noOfQuestionsAsked: {
        type: Number,
        default: 0,
    },
    noOfAnswersGiven: {
        type: Number,
        default: 0,
    },
    savedQuestions: {
        type: [String],
        default: [],
    },
    myQuestions: {
        type: [String],
        default: [],
    },
    myAnsweredQuestions: {
        type: [String],
        default: [],
    },
},
{ timestamps: true }
);

const User = mongoose.model("User", UserSchema);
export default User;