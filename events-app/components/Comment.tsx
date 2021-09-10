import _ from "lodash";
import React, { useRef } from "react";
import styled from "styled-components";

interface CommentsProps {
  comments: [];
  handleComment: Function;
}
const Comment: React.FC<CommentsProps> = ({ comments, handleComment }) => {
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

    handleComment(formValues);
  };

  return (
    <Div>
      <div className="container ">
        <h2>نظرات</h2>
        <ul>
          {comments.length === 0 && <h3> هنوز نظری ثبت نشده است</h3>}
          {comments.map((c: object, index: number) => (
            <li key={index}>
              <div className="comment">
                <div className="info flex-center">
                  <h3>{c.name}</h3>
                  <h4>
                    {new Date(c.date).toLocaleDateString("fa-ir", {
                      day: "2-digit",
                      year: "numeric",
                      month: "long",
                    })}
                  </h4>
                </div>
                <div className="text">
                  <h3>{c.comment}</h3>
                </div>
              </div>
            </li>
          ))}
        </ul>
        <div ref={formRef} className="form flex-center">
          <h2>ثبت نظر</h2>
          <input type="text" id="name" placeholder="نام" autoComplete="off" />
          <input
            type="text"
            id="email"
            placeholder="ایمیل (منتشر نخواهد شد)"
            autoComplete="off"
          />
          <textarea
            name="comment"
            autoComplete="off"
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

    ul {
      text-align: right;
      width: 500px;
      list-style: none;
      margin-bottom: 2rem;

      li {
        margin: 3rem 0;

        .comment {
          .info {
            justify-content: flex-start;

            h3,
            h4 {
              font-weight: 200;
              margin: 0rem 0.5rem 0 1rem;
            }
          }
        }
      }
    }

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
