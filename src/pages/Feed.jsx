import { useNavigate } from "react-router";
import { RiLogoutCircleRLine } from "react-icons/ri";
import Post from "../components/Post";
import Button from "../components/Button";
import { useEffect, useState } from "react";
import axios from "axios";
import { POSTS_ENDPOINT } from "../api-routes";

const Feed = () => {
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));

  const [posts, setPosts] = useState([]);

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  const getPosts = async () => {
    const response = await axios.get(`${POSTS_ENDPOINT}`);
    console.log(response.data);
    setPosts(response.data.posts);
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div className="flex h-screen w-screen flex-col overflow-y-auto">
      <div className="flex h-fit w-full items-center justify-between gap-y-2 p-2 shadow-md">
        <div className="flex items-center gap-x-3">
          <img
            onClick={() => navigate(`/profile/${user._id}`)}
            className="h-16 w-16 rounded-full bg-violet-300"
            src={user.pfp}
            alt={user.name}
          />
          <div>
            <p className="text-sm text-neutral-400">Welcome back,</p>
            <p className="text-xl font-bold">{user.name}</p>
          </div>
        </div>
        <div className="h-fit w-fit">
          <Button
            onClick={handleLogout}
            className="rounded-full bg-red-300/20 p-2 hover:bg-red-300/40"
          >
            <RiLogoutCircleRLine size={28} className="text-red-300" />
          </Button>
        </div>
      </div>
      <div className="hide-scrollbar flex h-full w-full flex-col gap-y-4 overflow-y-auto p-4">
        {posts.map((item, index) => (
          <Post key={index} index={index}>
            <Post.FeedHeader userName={item.createdBy.name} />
            <Post.FeedBody
              description={item.caption}
              media={item.urls}
              postId={item._id}
            />
            <Post.FeedFooter postId={item._id} likes={item.likes} />
          </Post>
        ))}
        <p className="w-full text-center">No more posts to show</p>
      </div>
    </div>
  );
};

export default Feed;
