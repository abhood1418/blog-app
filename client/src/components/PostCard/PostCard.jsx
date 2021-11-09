import './PostCard.css';
import { Link } from 'react-router-dom'





const PostCard = (props) => {

    

    function truncateString(str, num) {
        if (str.length <= num) {
          return str
        }
        return str.slice(0, num) + '...'
      }
    
      const content = truncateString(props.content, 300)
    


    return (




        <div className="post-card">
            
            <div>
            <div>{props.username}</div> 
            <Link className="card" to={`/posts/${props._id}`}>
            <div>{props.title}</div> 
            {/* <img  src={props.imgURL} alt={props.title} />  */}
            <div>{content}</div>
            </Link>
            {/* <div>{props.hashtags}</div>  */}
            {/* <div>{props.comments}</div>  */}
            {/* <Commments data={}/> */}
            {/* <img className="post-card-image" src={props.imgURL} alt={props.name} /> */}
            </div>
            
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