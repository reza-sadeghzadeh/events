import _ from "lodash";
import React, { useRef } from "react";
import styled from "styled-components";

interface CommentsProps {
  comments: [];
}
const Comment: React.FC<CommentsProps> = ({ comments }) => {
  const formRef = useRef<HTMLDivElement>(null);

  const handleSumbit = () => {
    let form: {} = _.pick(formRef.current.children, [
      "name",
      "email",
      "comment",
    ]);

    let formValues = {};
    for (const i in form) {
      formValues[i] = form[i].value;
    }
    console.log(formValues);
  };

  return (
    <Div>
      <div className="container ">
        <h2>نظرات</h2>
        {/* {!comments.length && <h3>اولین کسی باشید که نظری ثبت میکند</h3>} */}
        <ul>
          {comments.map((c: object) => (
            <li>{c}</li>
          ))}
        </ul>
        <div ref={formRef} className="form flex-center">
          <input type="text" id="name" placeholder="نام" />
          <input type="text" id="email" placeholder="ایمیل" />
          <textarea
            name="comment"
            id="comment"
            placeholder="نظر خود را در این قسمت بنویسید..."
          ></textarea>
          <button onClick={handleSumbit}>ثبت نظر </button>
        </div>
      </div>
    </Div>
  );
};

export default Comment;
const Div = styled.div`
  width: 100%;

  .container {
    margin-top: 6rem;
    width: 100%;
    margin-bottom: 2rem;

    .form {
      width: 100%;
      flex-direction: column;
      align-items: flex-start;
      input,
      textarea {
        /* width: 100%; */
        margin: 0.5rem 0;
        max-width: 700px;
      }
      button {
        margin-top: 1rem;
      }
    }
  }
`;
