// Dayanna
import { useState } from "react";
import { Navigate } from "react-router-dom";
import { createPost } from "../../services/posts";
import Layout from "../../components/Layout/Layout";

const PostCreate = (props) => {
  const [post, setPost] = useState({
    'username': `${props.user.username}`,
    'title': '',
    'imgURL': '',
    'content': '',
    'hashtags': [],
    'comments': []
  })

  const [isCreated, setCreated] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setPost({
      ...post,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const created = await createPost(post);
    setCreated({ created });
  };

  if (isCreated) {
    return <Navigate to={`/posts`} />;
  }

  return (
    // <h1>This is PostCreate</h1>
    <Layout>
      <form className="create-form" onSubmit={handleSubmit}>
        {/* <input
            className="input-name"
            placeholder='Name'
            value={product.name}
            name='name'
            required
            autoFocus
            onChange={handleChange}
        /> */}
        <input
          className="input-title"
          placeholder="Title"
          value={post.title}
          name="title"
          required
          onChange={handleChange}
        />
        <textarea
          className="textarea-content"
          rows={10}
          placeholder="content"
          value={post.content}
          name="content"
          required
          onChange={handleChange}
        />
        <input
          className="input-image-link"
          placeholder="Image Link"
          value={post.imgURL}
          name="imgURL"
          required
          onChange={handleChange}
        />

        {/* <input
            className="input-hashtags"
            placeholder='Hashtag'
            value={post.hashtags}
            name='hashtags'
            required
            onChange={handleChange}
        /> */}
        <button type='submit' className="submit-button">Submit</button>
    </form>
</Layout>
  )
}

export default PostCreate;
