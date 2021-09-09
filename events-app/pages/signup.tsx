import React, { useRef } from "react";
import styled from "styled-components";
import _ from "lodash";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import Router from "next/router";

function Login() {
  const formRef = useRef<HTMLInputElement>(null);

  const handleSignupSubmit = async () => {
    let data = formRef.current.getElementsByTagName("input");
    let form: object = _.pick(data, [
      "name",
      "email",
      "password",
      "lastname",
      "repeatedPassword",
      "phoneNumber",
    ]);

    let user: {} = {};
    for (let index in form) {
      user[index] = form[index].value;
    }

    if (user.password !== user.repeatedPassword)
      toast("پسورد و تکرار پسور برابر نیستند");
    let { data: newData } = await axios.post("/api/users", user);
    if (newData.error) toast(newData.error);
    else {
      document.cookie = `X-token=${newData}`;
      Router.replace("/");
    }
  };

  return (
    <Div className="flex-center ">
      <ToastContainer />
      <div className="container flex-center">
        <h2>ثبت نام</h2>
        <div ref={formRef} className="form">
          <label htmlFor="name">نام</label>
          <input autoComplete="off" type="text" name="name" id="name" />
          <label htmlFor="lastname">نام خانوادگی</label>
          <input autoComplete="off" type="text" name="lastname" id="lastname" />
          <label htmlFor="phoneNumber">شماره موبایل</label>
          <input
            autoComplete="off"
            type="text"
            name="phoneNumber"
            id="phoneNumber"
          />
          <label htmlFor="email">ایمیل</label>
          <input autoComplete="off" type="email" name="email" id="email" />

          <label htmlFor="password">رمز عبور</label>
          <input autoComplete="off" type="text" name="password" id="password" />
          <label htmlFor="repeat-password">تکرار رمز عبور</label>
          <input
            autoComplete="off"
            type="text"
            name="repeatedPassword"
            id="repeatedPassword"
          />
        </div>
        <button onClick={handleSignupSubmit}>ثبت نام</button>
      </div>
    </Div>
  );
}

export default Login;

const Div = styled.section`
  .container {
    h2 {
      margin-bottom: 2rem;
      opacity: 0.7;
    }
    flex-direction: column;
    /* align-items: flex-start; */
    margin-top: 3rem;
    width: clamp(300px, 50%, 700px);

    .form {
      width: 100%;
      label {
        font-weight: 200;
      }
    }
    button {
      margin-top: 1rem;
    }
  }
`;
