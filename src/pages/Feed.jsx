import { useNavigate } from "react-router";
import Post from "../components/Post";

const Feed = () => {
  const navigate = useNavigate();

  return (
    <div className="flex h-screen w-screen flex-col overflow-y-auto">
      <div className="flex h-fit w-full flex-col items-start gap-y-2 p-2 shadow-md">
        <div className="flex items-center gap-x-3">
          <img
            onClick={() => navigate(`/profile/${"idToGo"}`)}
            className="h-16 w-16 rounded-full bg-violet-300"
            src="/images/temp/pfp.jpg"
            alt=""
          />
          <div>
            <p className="text-sm text-neutral-400">Welcome back,</p>
            <p className="text-xl font-bold">Johnathan Doe</p>
          </div>
        </div>
      </div>
      <div className="hide-scrollbar flex h-full w-full flex-col gap-y-4 overflow-y-auto p-4">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map(
          (item, index) => (
            <Post key={index} index={index}>
              <Post.FeedHeader />
              <Post.FeedBody />
              <Post.FeedFooter />
            </Post>
          ),
        )}
        <p className="w-full text-center">No more posts to show</p>
      </div>
    </div>
  );
};

export default Feed;
