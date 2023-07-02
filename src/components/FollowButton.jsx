import React, { useState } from "react";
import { handleFollowUser, handleUnfollowUser } from "../pages/Home/usersSlice";
import { useDispatch, useSelector } from "react-redux";
import { handleUserUpdate } from "../pages/Auth/authSlice";

const FollowButton = ({ currentUser }) => {
  const [isFollowing, setIsFollowing] = useState(false);
  const { token } = useSelector((store) => store.auth);
  const dispatch = useDispatch();

  const handleFollow = () => {
    dispatch(
      handleFollowUser({
        followerId: currentUser?._id,
        token,
        dispatch,
        handleUserUpdate,
      })
    );
    setIsFollowing(true);
  };

  const handleUnfollow = () => {
    dispatch(
      handleUnfollowUser({
        followerId: currentUser?._id,
        token,
        dispatch,
        handleUserUpdate,
      })
    );
    setIsFollowing(false);
  };
  return (
    <div className="follow-btn">
      <button
        onClick={isFollowing ? handleUnfollow : handleFollow}
        className="btn btn-primary"
      >
        {isFollowing ? "Following" : "Follow"}
      </button>
    </div>
  );
};

export default FollowButton;
