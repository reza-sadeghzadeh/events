import React from "react";
import styled from "styled-components";

function Contact() {
  return (
    <Div className="flex-center">
      <div className="holder flex-center">
        <h2>هیچ رویدادی رو از دست نده</h2>
      </div>
      <div className="input-holder flex-center">
        <input type="text" placeholder="ایمیل ..." />
        <button>ثبت</button>
      </div>
    </Div>
  );
}

export default Contact;

const Div = styled.section`
  flex-direction: column;
  margin-top: 6rem;
  margin-bottom: 3rem;

  .holder {
    position: relative;
    font-weight: 100;

    h2 {
      font-weight: 200;
    }

    ::after {
      content: "";
      position: absolute;
      height: 1px;
      width: 100vw;
      background-color: #9b4dca;
      top: 50%;
      right: 103%;
    }
    ::before {
      content: "";
      position: absolute;
      height: 1px;
      width: 100vw;
      background-color: #9b4dca;
      top: 50%;
      left: 105%;
    }
  }

  .input-holder {
    width: clamp(300px, 80%, 600px);
    flex-direction: column;
    margin-top: 4rem;

    input {
      margin: 0 0.5rem;
    }

    button {
      border: 1px solid #9b4dca;
      font-weight: 100;
      transition: 0.3s ease all;
      background-color: white;
      color: #9b4dca;
      margin-top: 2rem;

      :hover {
        background-color: #9b4dca;
        color: white;
      }
    }
  }

  @media screen and (min-width: 700px) {
    .input-holder {
      flex-direction: row;

      button {
        margin: 0;
      }
    }
  }
`;
