import React from "react";
import styled from "styled-components";

interface CommentsProps {
  comments: [];
}
const Comment: React.FC<CommentsProps> = ({ comments }) => {
  return (
    <Div>
      <div className="container">
        <h2>نظرات</h2>
        <ul>
          {comments.map((c: object) => (
            <li>{c}</li>
          ))}
        </ul>
        <input type="text" placeholder="نام" />
        <input type="text" placeholder="ایمیل" />
        <textarea
          name="comment"
          id="comment"
          placeholder="نظر خود را در این قسمت بنویسید..."
        ></textarea>
        <button>ثبت نظر </button>
      </div>
    </Div>
  );
};

export default Comment;

const Div = styled.div`
  .container {
    margin-top: 6rem;
    margin-bottom: 2rem;
  }
`;
