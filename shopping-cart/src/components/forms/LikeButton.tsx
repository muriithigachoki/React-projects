import { useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";

const likeButton = () => {
  const handleClick = () => {
    setStatus(!status);
    console.log("clicked");
  };
  const [status, setStatus] = useState(false);
  if (status) return <FaHeart color="red" size={40} onClick={handleClick} />;
  return <FaRegHeart color="white" size={40} onClick={handleClick} />;
};

export default likeButton;
