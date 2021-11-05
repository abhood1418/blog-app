import mongoose from 'mongoose'
const Schema = mongoose.Schema

const User = new Schema(
  {
    username: { type: String, required: true },
    imgURL: { type: String},
    password: {type: String, required: true }
  },
  { timestamps: true }
)

export default mongoose.model('users', User)
