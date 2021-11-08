import mongoose from 'mongoose'
const Schema = mongoose.Schema

const Post = new Schema(
  {
    username: { type: String, required: true },
    title: { type: String, required: true },
    imgURL: { type: String},
    content: { type: String, required: true },
    hashtags: [{ type: String }],
    comments: [{
      user: { type: String },
      userImgURL: { type: String },
      comment: { type: String },
    },]
  },
  { timestamps: true }
)

export default mongoose.model('posts', Post)
