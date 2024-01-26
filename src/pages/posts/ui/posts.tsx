import { FC, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useInView } from "react-intersection-observer";

import { Props } from "./types";
import { setPost } from "../model";
import { Post } from "../../../shared";
import { PostItem } from "../../post-item";

export const Posts: FC<Props> = ({ data, isLoading, setPostStart }) => {
  const { ref: firstCard, inView: inViewFirstCard } = useInView({
    threshold: 0.5,
  });

  const { ref: lastCard, inView: inViewLastCard } = useInView({
    threshold: 0.5,
  });

  useEffect(() => {
    if (inViewFirstCard) {
      setPostStart((prev) => (prev > 0 ? prev - 1 : prev));
    }
  }, [inViewFirstCard]);

  useEffect(() => {
    if (inViewLastCard) {
      setPostStart((prev) => prev + 1);
    }
  }, [inViewLastCard]);

  return (
    <div>
      <ul>
        {data?.map((post, index, arr) =>
          index === 0 ? (
            <li key={post.id} ref={firstCard}>
              <PostItem post={post} />
            </li>
          ) : index === arr.length - 1 ? (
            <li key={post.id} ref={lastCard}>
              <PostItem post={post} />
            </li>
          ) : (
            <li key={post.id}>
              <PostItem post={post} />
            </li>
          )
        )}
      </ul>
      {isLoading && <p>Loading...</p>}
    </div>
  );
};
