import React from "react";
import useFetch from "../../components/hooks/use-fetch";

const CommentList = () => {
  const { data, loading, error } = useFetch("https://dummyjson.com/comments");
  if (loading) return <h2>Comments are loading! Please Wait</h2>;

  return (
    <div>
      <h1>CommentList</h1>
      <ul>
        {data?.comments.map((commentItem) => (
          <div>
            <label>{commentItem?.body}</label>
            <p>{commentItem?.likes}</p>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default CommentList;
