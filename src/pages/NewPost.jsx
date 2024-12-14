import { useNavigate } from "react-router";
import { FaArrowLeftLong, FaFolderOpen, FaCamera } from "react-icons/fa6";
import Button from "../components/Button";

const NewPost = () => {
  const navigate = useNavigate();
  return (
    <div className="flex h-screen w-screen flex-col gap-y-8 p-4">
      {/* Back Button and Title */}
      <div className="flex items-center gap-x-4">
        <Button
          onClick={() => navigate(-1)}
          className="rounded-full bg-black/20 p-3 hover:bg-black/40"
        >
          <FaArrowLeftLong className="text-black" size={24} />
        </Button>
        <p className="text-2xl font-bold">New Post </p>
      </div>

      {/* Caption*/}
      <div>
        <label htmlFor="caption">Caption</label>
        <textarea
          className="w-full rounded-md border-b border-black p-1"
          placeholder="What's on your mind?"
          rows={1}
        />
      </div>

      {/* Buttons for  choosing the files */}
      <div className="flex w-full flex-col items-start gap-y-1">
        <div className="flex gap-x-1">
          <Button
            onClick={() => document.getElementById("fileInput").click()}
            className="flex flex-grow-0 items-center gap-x-1"
          >
            <FaFolderOpen className="text-red-400" />
            Choose the files
          </Button>
          <input
            className="hidden flex-grow"
            id="fileInput"
            type="file"
            multiple
            accept="image/*,video/*"
          />
        </div>
        <Button
          onClick={() => navigate("/capture")}
          className="disabled: flex items-center gap-x-1 rounded-lg disabled:cursor-not-allowed disabled:line-through"
          disabled={
            !(navigator.mediaDevices && navigator.mediaDevices.getUserMedia)
          }
        >
          <FaCamera className="text-blue-400" />
          Camera
        </Button>
      </div>

      {/* Button to create the new post */}
      <div className="fixed bottom-8 right-1/2 w-3/4 translate-x-1/2">
        <Button className="w-full rounded-full bg-black text-lg text-white">
          Create Post
        </Button>
      </div>
    </div>
  );
};

export default NewPost;
