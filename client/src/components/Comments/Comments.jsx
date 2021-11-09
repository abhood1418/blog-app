// Terra Claycamp
import {Link} from 'react-router-dom'


function Comments (props) {
	
	return (
    <div className="comments-section">
      <h3>Comments</h3>
<<<<<<< HEAD
      <ul>
        {postMessage.Comments.map((gamePosts) => (
          <Link
            to={`/gamePosts/${gamePosts.id}`}
            key={gamePosts.id}
            className="post-"
          >
            <li>{gamePosts.fields.playerName}</li>
          </Link>
=======
      <div>
        {props.post.comments.map((comment) => (
          <div key={comment._id}>
            <img src={comment.userImgURL.includes('https://') ? `${comment.userImgURL}` : 'https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png'} />
            <div>{comment.user}</div>
            <div>{comment.comment}</div>
          </div>
>>>>>>> 0ce689739c3f2585032a09d7d0a99bdd2bdabc8d
        ))}
      </div>
    </div>
  );
}

export default Comments