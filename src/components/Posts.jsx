import { useState, useEffect } from "react";
import axios from "axios";
import { USERS_ENDPOINT } from "../api-routes";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const user = JSON.parse(localStorage.getItem("user"));

  const getData = async () => {
    const response = await axios.get(`${USERS_ENDPOINT}/${user._id}/posts`);
    const data = response.data;
    setPosts(data);
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="flex flex-grow flex-col gap-y-3">
      {posts.length > 0 && (
        <div className="grid h-full w-full grid-cols-3 flex-wrap gap-1">
          {/* First Element to use map on */}
          {posts.map((post, index) => (
            <div key={index} className="aspect-square">
              <img
                className="aspect-square object-cover"
                src={post?.urls[0]}
                alt=""
              />
            </div>
          ))}
        </div>
      )}

      {posts.length === 0 && (
        <div className="flex h-full w-full items-center justify-center">
          <p>No posts yet!</p>
        </div>
      )}
    </div>
  );
};

export default Posts;
