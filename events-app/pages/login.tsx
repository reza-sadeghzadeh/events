import React, { useRef } from "react";
import Router from "next/router";
import _ from "lodash";
import styled from "styled-components";
import Link from "next/link";
import { FaUser } from "react-icons/fa";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";

interface LoginProps {
  user: string;
}

const Login: React.FC<LoginProps> = ({ user }) => {
  if (user) Router.replace("/");

  const formRef = useRef<HTMLDivElement>();

  const handleSubmit = async () => {
    let data = formRef.current.getElementsByTagName("input");
    let form: object = _.pick(data, ["email", "password"]);

    let user: {} = {};
    for (let index in form) {
      user[index] = form[index].value;
    }
    let { data: newData } = await axios.post("/api/users/login", user);
    if (newData.error) toast(newData.error);
    else {
      document.cookie = `X-token=${newData.jwt};`;
      if (document.referrer !== "http://localhost:3000/login")
        window.location.replace(document.referrer);
      else {
        if (document.referrer.match(/login$/)) window.location.replace("/");
        else window.location.replace(document.referrer);
      }
    }
  };

  return (
    <Div className="flex-center">
      <ToastContainer />
      <div className="container flex-center">
        <FaUser />
        <div ref={formRef} className="form">
          <input
            type="text"
            name="email"
            id="email"
            placeholder="ایمیل"
            autoComplete="off"
          />
          <input
            type="password"
            name="password"
            id="password"
            placeholder="رمز عبور"
            autoComplete="off"
          />
        </div>
        <button onClick={handleSubmit}>ورود</button>
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
};

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
