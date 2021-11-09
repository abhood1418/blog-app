// Terra Claycamp

function Comments(props) {
	
	return (
    <div className="comments-section">
      <h3>Comments</h3>
      <ul>
        {gamePosts.map((gamePosts) => (
          <Link
            to={`/gamePosts/${gamePosts.id}`}
            key={gamePosts.id}
            className="post-Links"
          >
            <li>{gamePosts.fields.playerName}</li>
          </Link>
        ))}
      </ul>
    </div>
  );
}
