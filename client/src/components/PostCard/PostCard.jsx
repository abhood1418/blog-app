import './PostCard.css';
import { Link } from 'react-router-dom'

const PostCard = (props) => {
    return (
        <div className="post-card">
            <Link className="card" to={`/posts/${props._id}`}>
            
            <div>{props.username}</div> 
            <div>{props.title}</div> 
            {/* <img  src={props.imgURL} alt={props.title} />  */}
            {/* <div>{props.content}</div>  */}
            {/* <div>{props.hashtags}</div>  */}
            {/* <div>{props.comments}</div>  */}


             {/* <Commments data={}/> */}


                {/* <img className="post-card-image" src={props.imgURL} alt={props.name} /> */}
            </Link>
        </div>
    )
}

// {
//     username: { type: String, required: true },
//     title: { type: String, required: true },
//     imgURL: { type: String},
//     content: { type: String, required: true },
//     hashtags: [{ type: String }],
//     comments: [{
//       user: { type: String },
//       userImgURL: { type: String },
//       comment: { type: String },
//     },]
//   },
//   { timestamps: true }
// )



export default PostCard