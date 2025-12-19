import { useEffect, useState } from "react";

function FetchPosts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => {
        setPosts(data.slice(0, 10)); 
      });
  }, []);

  return (
    <div>
      <h3>First 10 Posts</h3>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default FetchPosts;
