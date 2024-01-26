import { FC } from "react";
import { useDispatch } from "react-redux";

import styles from "./styles.module.css";
import { useNavigate } from "react-router-dom";
import { Props } from "./types";
import { setPost } from "../../posts";
import { Post } from "../../../shared";

export const PostItem: FC<Props> = ({ post }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleViewClick = (post: Post) => {
    navigate(`post/${post.id}`);
    dispatch(setPost(post));
    console.log("test");
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.post_id}>№ {post.id}</h2>
      <h3 className={styles.title}>{post.title}</h3>
      <p>
        {post.body.length > 50 ? post.body.substring(0, 50) + "..." : post.body}
      </p>
      <button onClick={() => handleViewClick(post)} className={styles.button}>
        Просмотр
      </button>
    </div>
  );
};
