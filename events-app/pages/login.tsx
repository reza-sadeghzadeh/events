import React from "react";
import styled from "styled-components";
import Link from "next/link";
import { FaUser } from "react-icons/fa";

function Login() {
  const handleSubmit = () => {
    //validate user
  };

  return (
    <Div className="flex-center">
      <div className="container flex-center">
        <FaUser />
        <div className="form">
          <input
            type="text"
            name="email"
            id="email"
            placeholder="ایمیل"
            autoComplete="off"
          />
          <input
            type="text"
            name="password"
            id="password"
            placeholder="رمز عبور"
            autoComplete="off"
          />
        </div>
        <button onSubmit={() => handleSubmit()}>ورود</button>
        <h4>
          حساب کاربری ندارید؟
          <span>
            {" "}
            <Link href="/signup">اینجا</Link>{" "}
          </span>
          یکی بسازید
        </h4>
      </div>
    </Div>
  );
}

export default Login;

const Div = styled.div`
  flex-direction: column;
  height: clamp(500px, calc(100vh - 80px - 300px), 100vh);
  width: 100vw;
  background: linear-gradient(to bottom, #f0f0f0, white);

  .container {
    width: clamp(300px, 90%, 500px);
    padding: 2rem 1rem;
    background-color: white;
    border: 1px solid #d1d1d1;
    box-shadow: 0 0 5px #d1d1d1;
    margin-top: 3rem;
    border-radius: 0.4rem;
    flex-direction: column;

    button {
      padding: 0rem 2rem;
    }
    .form {
      margin-bottom: 1rem;

      input {
        margin: 0;
        margin-top: 0.6rem;
      }
    }

    svg {
      font-size: 5rem;
      margin-bottom: 2rem;
      opacity: 0.8;
    }

    span {
      color: blue;
      a {
        text-decoration: underline;
      }
    }
    h4 {
      margin-top: 2.5rem;
    }
  }
`;
