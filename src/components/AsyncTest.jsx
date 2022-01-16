import { useEffect, useState } from 'react';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const AsyncTest = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // eslint-disable-next-line no-undef
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((data) => {
        setPosts(data);
      });
  }, []);

  return (
    <div>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default AsyncTest;
