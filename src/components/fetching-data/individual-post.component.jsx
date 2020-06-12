import React, { useState, useEffect } from "react";
import axios from "axios";

const FetchDataHookIndividual = () => {
  const [post, setPost] = useState({});
  const [id, setId] = useState("");
  const [idFromButtonCLick, setIdFromButtonClick] = useState("");

  const handleClick = () => {
    setIdFromButtonClick(id);
  };

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${idFromButtonCLick}`)
      .then((res) => {
        console.log(res);
        setPost(res.data);
      })
      .catch((err) => console.log(err));
  }, [idFromButtonCLick]);

  return (
    <div>
      <h3>Fetching Data</h3>
      <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
      <button type="button" onClick={handleClick}>
        Search
      </button>
      {post.title}
      <ul>
        {/* {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))} */}
      </ul>
    </div>
  );
};
export default FetchDataHookIndividual;
