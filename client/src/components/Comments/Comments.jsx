// Terra Claycamp
import {Link} from 'react-router-dom'


function Comments (props) {
	
	return (
    <div className="comments-section">
      <h3>Comments</h3>


      <div>
        {props.post.comments.map((comment) => (
          <div key={comment._id}>
            <img src={comment.userImgURL.includes('https://') ? `${comment.userImgURL}` : 'https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png'} />
            <div>{comment.user}</div>
            <div>{comment.comment}</div>
          </div>

        ))}
      </div>
    </div>
  );
}

export default Comments