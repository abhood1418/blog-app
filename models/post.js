import mongoose from 'mongoose'
const Schema = mongoose.Schema

const Post = new Schema(
  {
    username: { type: String, required: true },
    imgURL: { type: String},
    content: { type: String, required: true },
    hastags: { type: String }
  },
  { timestamps: true }
)

export default mongoose.model('posts', Post)
