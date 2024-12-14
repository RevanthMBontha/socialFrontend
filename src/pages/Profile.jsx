import { FaArrowLeftLong } from "react-icons/fa6";
import { TiPlus } from "react-icons/ti";
import Button from "./../components/Button";
import { useNavigate } from "react-router";
import Posts from "../components/Posts";

const Profile = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div className="relative flex h-full w-screen flex-col">
      {/* Back Button */}
      <div className="absolute left-3 top-3 z-10">
        <Button
          onClick={() => navigate(-1)}
          className="rounded-full bg-white/20 p-3 hover:bg-white/40"
        >
          <FaArrowLeftLong className="text-white" size={24} />
        </Button>
      </div>

      {/* Background and Profile Picture */}
      <div className="relative h-1/4 w-full flex-grow-0 bg-blue-300">
        {/* Background Image */}
        <img
          loading="lazy"
          className="h-full w-full object-cover"
          src={user.bgImg}
          alt="Background Image"
        />
        {/* Profile Image */}
        <img
          className="absolute bottom-0 left-4 z-10 h-32 w-32 translate-y-1/2 rounded-full border-4 border-white"
          src={user.pfp}
          alt={user.name}
        />
      </div>

      {/* TODO: Add the correct path here to navigate to edit page */}
      {/* Edit Profile Button */}
      <div className="flex w-full justify-end py-2 pr-4">
        <Button
          onClick={() => navigate("/profile/:id/edit")}
          className="rounded-full border border-black px-16 text-lg hover:bg-neutral-300"
        >
          Edit Profile
        </Button>
      </div>

      {/* Profile Details Section */}
      <div className="flex flex-grow-0 flex-col gap-y-1 p-4">
        <h1 className="text-xl font-bold">{user.name}</h1>
        <p>{user.bio}</p>
      </div>

      {/* Posts Section */}
      <Posts />
      {/* Create New Post Button */}
      <div className="fixed bottom-3 right-3">
        <Button
          onClick={() => navigate("/create")}
          className="rounded-full bg-black p-3"
        >
          <TiPlus className="text-white" size={36} />
        </Button>
      </div>
    </div>
  );
};

export default Profile;
