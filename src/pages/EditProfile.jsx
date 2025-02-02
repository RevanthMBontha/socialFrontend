import { useState } from "react";
import { FaArrowLeftLong } from "react-icons/fa6";
import { RiPencilFill } from "react-icons/ri";
import Button from "./../components/Button";
import { useNavigate } from "react-router";

const EditProfile = () => {
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));

  const [userDetails, setUserDetails] = useState({
    name: user.name,
    bio: user.bio,
    pfp: user.pfp,
    bgImg: user.bgImg,
  });

  return (
    <div className="relative flex h-full w-screen flex-col">
      {/* Back Button */}
      <div className="absolute left-3 top-3 z-10">
        {/* TODO: Add Proper redirection to the old page here */}
        <Button
          onClick={() => navigate(-1)}
          className="rounded-full bg-white/20 p-3 hover:bg-white/40"
        >
          <FaArrowLeftLong className="text-white" size={24} />
        </Button>
      </div>

      {/* Background and Profile Picture */}
      <div className="relative h-1/4 w-full flex-grow-0">
        {/* Background Image */}
        <div className="relative h-full w-full flex-shrink-0">
          <img
            className="h-full w-full bg-red-300 object-cover"
            src={userDetails.bgImg}
            alt="Background image"
          />
        </div>

        {/* Profile Image */}
        <div className="absolute bottom-0 left-4 z-10 h-32 w-32 translate-y-1/2 rounded-full border-4 border-white bg-red-300">
          <div className="relative h-full w-full rounded-full bg-blue-300">
            <img
              className="h-full w-full rounded-full object-cover"
              src={user.pfp}
              alt={user.name}
            />
            <div className="absolute bottom-0 right-0 z-20 flex h-fit w-fit items-center justify-center rounded-full border border-black bg-neutral-100 p-2 hover:bg-neutral-300">
              <RiPencilFill className="text-black" size={24} />
            </div>
          </div>
        </div>
      </div>

      {/* Edit Profile Button */}
      <div className="flex h-20 w-full justify-end py-2 pr-4"></div>

      {/* Profile Details Section */}
      <div className="flex flex-grow-0 flex-col gap-y-8 p-4">
        <div className="flex flex-col gap-y-1">
          <label className="text-lg font-semibold" htmlFor="name">
            Name
          </label>
          <input
            className="border-b border-gray-400 p-2 pl-0 focus:bg-neutral-50 focus:outline-none"
            type="text"
            value={userDetails.name}
            onChange={(e) =>
              setUserDetails({ ...userDetails, name: e.target.value })
            }
          />
        </div>
        <div className="flex flex-col gap-y-1">
          <label className="text-lg font-semibold" htmlFor="bio">
            Bio
          </label>
          <textarea
            rows={2}
            className="border-b border-gray-400 p-2 pl-0 focus:bg-neutral-50 focus:outline-none"
            type="text"
            value={userDetails.bio}
            onChange={(e) =>
              setUserDetails({ ...userDetails, bio: e.target.value })
            }
          />
        </div>
      </div>

      {/* Save Button */}
      <div className="fixed bottom-4 right-1/2 w-3/4 translate-x-1/2">
        <Button className="w-full rounded-full bg-black p-4 px-8 text-lg text-white">
          Save
        </Button>
      </div>
    </div>
  );
};

export default EditProfile;
