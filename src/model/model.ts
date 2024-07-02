import mongoose, { Schema, Document } from "mongoose";

export interface Rating extends Document {
  email: string;
  ratingCount1: number;
  ratingCount2: number;
  ratingCount3: number;
  ratingCount4: number;
  ratingCount5: number;
}

const RatingSchema: Schema<Rating> = new Schema({
  email: {
    type: String,
    default: "arnabbabon2002@gmail.com",
    required: true,
    unique: true,
    lowercase: true,
  },
  ratingCount1: {
    type: Number,
    default: 0,
    required: true,
  },
  ratingCount2: {
    type: Number,
    default: 0,
    required: true,
  },
  ratingCount3: {
    type: Number,
    default: 0,
    required: true,
  },
  ratingCount4: {
    type: Number,
    default: 0,
    required: true,
  },
  ratingCount5: {
    type: Number,
    default: 0,
    required: true,
  },
});

const RatingModel =
  (mongoose.models.User as mongoose.Model<Rating>) ||
  mongoose.model<Rating>("Rating", RatingSchema);

export default RatingModel;
