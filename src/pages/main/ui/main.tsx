import React, { useEffect, useState, FC } from "react";
import { useInView } from "react-intersection-observer";
import { Routes, Route, Navigate } from "react-router-dom";

import { Posts } from "../../posts/ui/posts";

import { useGetPostsQuery } from "../../../shared/api";
import { PostInfoPage } from "../../post-info-page/ui/post-info-page";

export const Main: FC = () => {
  const limitPosts: number = 5;
  const [postStart, setPostStart] = useState(0);

  const { data = [], isLoading } = useGetPostsQuery({
    limit: limitPosts,
    start: postStart,
  });

  return (
    <Routes>
      <Route
        path="*"
        element={
          <Posts
            data={data}
            isLoading={isLoading}
            setPostStart={setPostStart}
          />
        }
      />
      <Route path="post/:id" element={<PostInfoPage />} />
    </Routes>
  );
};
