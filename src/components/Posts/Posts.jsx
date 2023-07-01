import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./posts.css";

import PostCard from "./PostCard";
import { handleGetAllPosts, setIsPostLoading, setPage } from "./postsSlice";
import Loader from "../Loader/Loader";

const Posts = ({ posts, homePosts }) => {


  const dispatch = useDispatch();
  const { isPostLoading, page } = useSelector((store) => store.posts);
  const bottomRef = useRef(null);

  const displayedPosts = posts.slice(0, page * 5);

  useEffect(() => {
    dispatch(handleGetAllPosts());
  }, []);


  const handleObserver = (entries) => {
    const entry = entries[0];
    if (entry.isIntersecting) {
      dispatch(setIsPostLoading(true));
      dispatch(setPage(page + 1));
    }
  };



  useEffect(() => {
    if (
      displayedPosts?.length > 0 &&
      displayedPosts?.length !== homePosts?.length
     ) {

      const elementRef = bottomRef?.current;
      const observer = new IntersectionObserver(handleObserver);
      if (elementRef) observer?.observe(elementRef);

      return () => {
        observer?.unobserve(elementRef);
      };
    }
  }, [page, displayedPosts]);

  useEffect(() => {
    let timeoutId;

    if (isPostLoading) {
      timeoutId = setTimeout(() => {
        dispatch(setIsPostLoading(false));
      }, 1500);
    } else {
      clearTimeout(timeoutId);
    }

    return () => {
      clearTimeout(timeoutId);
    };
  }, [isPostLoading, displayedPosts]);


  return (
    <section>
      <div className="feeds">
        {displayedPosts?.map((post, index) => {
          return (
            <React.Fragment key={post._id}>
              <PostCard post={post} />
              {index === displayedPosts?.length - 1 && (
                <div
                  ref={bottomRef}
                  style={{ height: 0, paddingBottom: "3.5rem" }}
                ></div>
              )}

            {isPostLoading && <Loader />}
            </React.Fragment>
          );
        })}
     {
      displayedPosts?.length !== homePosts?.length ||
      isPostLoading && <Loader />
     }
      </div>
    </section>
  );
};

export default Posts;
