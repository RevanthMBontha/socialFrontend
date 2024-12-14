import { useNavigate } from "react-router";
import {
  FaRegHeart,
  FaHeart,
  FaTwitter,
  FaFacebook,
  FaRedditAlien,
  FaDiscord,
  FaFacebookMessenger,
  FaSquareInstagram,
} from "react-icons/fa6";
import { IoLogoWhatsapp, IoIosCopy } from "react-icons/io";
import { AiOutlineSend } from "react-icons/ai";
import { RiTelegram2Fill } from "react-icons/ri";
import Button from "./Button";
import Modal from "./Modal";

import { useState } from "react";

const FeedHeader = ({
  userId = "test",
  userPfp = "/images/temp/pfp.jpg",
  userName = "Aaron Doe",
  createdAt = "2 hours ago",
}) => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-grow-0 items-center gap-x-2 p-2">
      <img
        onClick={() => navigate(`/profile/${userId}`)}
        className="h-14 w-14 rounded-full bg-blue-300"
        src={userPfp}
        alt={userName}
      />
      <div className="flex flex-col">
        <span className="text-lg">{userName}</span>
        <span className="text-xs text-neutral-500">{createdAt}</span>
      </div>
    </div>
  );
};

const FeedBody = ({
  description = "Description goes here!",
  media = [
    "/images/login/01.jpg",
    "/images/login/04.jpg",
    "/images/login/09.jpg",
  ],
  postId = "test",
}) => {
  return (
    <div className="relative flex flex-col gap-y-1">
      {/* Description */}
      <p>{description}</p>

      {/* Images slider */}
      <div className="hide-scrollbar flex flex-grow items-center justify-start gap-x-2 overflow-x-auto rounded-xl">
        {/* Media Element */}
        {media.map((el, idx) => (
          <div key={`${postId}-${idx}`} className="relative flex-shrink-0">
            <img
              loading="lazy"
              className="h-48 w-auto rounded-xl object-cover"
              src={el}
            />
            <span className="absolute right-2 top-2 rounded-full bg-white p-1 text-xs">
              {idx + 1}/{media.length}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

const FeedFooter = ({ postId = "wergbewrw345gq4f", likes }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLiked, setIsLiked] = useState(false);

  return (
    <div className="flex flex-grow-0 items-center justify-between p-2">
      {isLiked ? (
        <span
          onClick={() => setIsLiked(false)}
          className="flex items-center gap-x-1"
        >
          <FaHeart className="text-red-500" size={24} />{" "}
          <p className="text-lg text-red-500">{likes?.length}</p>
        </span>
      ) : (
        <span
          onClick={() => setIsLiked(true)}
          className="flex items-center gap-x-1"
        >
          <FaRegHeart className="text-gray-500" size={24} />{" "}
          <p className="text-lg text-gray-500">{likes?.length}</p>
        </span>
      )}
      <Button
        onClick={() => setIsModalOpen(true)}
        className="flex items-center gap-x-1 rounded-full bg-black bg-opacity-10 hover:bg-opacity-20"
      >
        Share <AiOutlineSend />
      </Button>
      <PostModal
        postId={postId}
        isModalOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
};

const PostModal = ({ isModalOpen, onClose, postId }) => {
  // TODO: Add onClick Event Listeners to all the buttons to share to the concerned app
  return (
    <Modal isOpen={isModalOpen} onClose={onClose} title="Share Post">
      <div className="flex flex-col gap-y-6">
        {/* First Row */}
        <div className="flex items-center justify-between">
          {/* Twitter */}
          <Button className="flex flex-col items-center gap-y-1 p-0">
            <div className="flex items-center justify-center rounded-full bg-[#26a7de]/20 p-3">
              <FaTwitter className="text-[#26a7de]" size={36} />
            </div>
            <p className="text-sm text-neutral-500">Twitter</p>
          </Button>

          {/* Facebook */}
          <Button className="flex flex-col items-center gap-y-1 p-0">
            <div className="flex items-center justify-center rounded-full bg-[#4267b2]/20 p-3">
              <FaFacebook className="text-[#4267b2]" size={36} />
            </div>
            <p className="text-sm text-neutral-500">Facebook</p>
          </Button>

          {/* Reddit */}
          <Button className="flex flex-col items-center gap-y-1 p-0">
            <div className="flex items-center justify-center rounded-full bg-[#FF4301]/20 p-3">
              <FaRedditAlien className="text-[#FF4301]" size={36} />
            </div>
            <p className="text-sm text-neutral-500">Reddit</p>
          </Button>

          {/* Discord */}
          <Button className="flex flex-col items-center gap-y-1 p-0">
            <div className="flex items-center justify-center rounded-full bg-[#738ADB]/20 p-3">
              <FaDiscord className="text-[#738ADB]" size={36} />
            </div>
            <p className="text-sm text-neutral-500">Discord</p>
          </Button>
        </div>

        {/* Second Row */}
        <div className="flex items-center justify-between">
          {/* Whatsapp */}
          <Button className="flex flex-col items-center gap-y-1 p-0">
            <div className="flex items-center justify-center rounded-full bg-[#25D366]/20 p-3">
              <IoLogoWhatsapp className="text-[#25D366]" size={36} />
            </div>
            <p className="text-sm text-neutral-500">Whatsapp</p>
          </Button>

          {/* Messenger */}
          <Button className="flex flex-col items-center gap-y-1 p-0">
            <div className="flex items-center justify-center rounded-full bg-[#0695FF]/20 p-3">
              <FaFacebookMessenger className="text-[#0695FF]" size={36} />
            </div>
            <p className="text-sm text-neutral-500">Messenger</p>
          </Button>

          {/* Telegram */}
          <Button className="flex flex-col items-center gap-y-1 p-0">
            <div className="flex items-center justify-center rounded-full bg-[#229ED9]/20 p-3">
              <RiTelegram2Fill className="text-[#229ED9]" size={36} />
            </div>
            <p className="text-sm text-neutral-500">Telegram</p>
          </Button>

          {/* Instagram */}
          <Button className="flex flex-col items-center gap-y-1 p-0">
            <div className="flex items-center justify-center rounded-full bg-[#E1306C]/20 p-3">
              <FaSquareInstagram className="text-[#E1306C]" size={36} />
            </div>
            <p className="text-sm text-neutral-500">Instagram</p>
          </Button>
        </div>
        <div className="flex flex-col gap-y-1">
          <p className="text-xl">Post Link</p>
          <div className="flex h-12 items-center justify-between rounded-lg bg-gray-100 p-2">
            <p className="text-xs text-gray-400">
              {`https://testapplication.com/${postId}`.slice(0, 30)}...
            </p>
            <Button className="p-1">
              <IoIosCopy
                className="text-gray-400 hover:text-blue-400"
                size={24}
              />
            </Button>
          </div>
        </div>
      </div>
    </Modal>
  );
};

const Post = ({ index, isLiked, children }) => {
  const bgColors = [
    "#F8E9E2",
    "#E6D9F8",
    "#bbd1ea",
    "#F8F2D9",
    "#DCEFE2",
    "#D9D9F4",
    "#e1ecf7",
  ];
  return (
    <div
      style={{
        backgroundColor: bgColors[index % bgColors.length],
      }}
      className="flex aspect-square w-full flex-col justify-between rounded-3xl p-2 text-black shadow-md"
    >
      {children}
    </div>
  );
};

export default Post;

Post.FeedHeader = FeedHeader;
Post.FeedBody = FeedBody;
Post.FeedFooter = FeedFooter;
