// Terra Claycamp

function Comments(props) {
	
	return (
    <div className="comments-section">
      <h3>Comments</h3>
      <ul>
        {postMessage.Comments.map((gamePosts) => (
          <Link
            to={`/gamePosts/${gamePosts.id}`}
            key={gamePosts.id}
            className="post-"
          >
            <li>{gamePosts.fields.playerName}</li>
          </Link>
        ))}
      </ul>
    </div>
  );
}
