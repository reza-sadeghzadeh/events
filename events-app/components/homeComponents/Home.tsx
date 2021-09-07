import React from "react";
import styled from "styled-components";
import Image from "next/image";
import Router from "next/router";

function Home() {
  return (
    <Div className=" flex-center">
      <div className="container flex-center">
        <div className="hero"></div>
        <div className="content flex-center">
          <h1>رویدادها</h1>
          <h2>شرکت در بهترین رویداد ها</h2>
          <button onClick={() => Router.push("/events?currentPage=1")}>
            مشاهده رویداد ها
          </button>
        </div>
        <div className="box flex-center">
          <Image
            src="/images/Asset-hero.png"
            quality="100"
            width="360"
            height="312"
          ></Image>
        </div>
      </div>
    </Div>
  );
}

export default Home;

const Div = styled.main`
  width: 100%;
  overflow-y: visible;

  .container {
    overflow-y: visible;
    width: 100%;
    color: white;
    position: relative;
    flex-direction: column;

    .hero {
      border-bottom: 5px solid #1d1d1d;
      transform: skewY(-8deg) translateY(-30%);
      overflow-y: visible;
      height: 1300px;
      width: 100vw;
      top: 0;
      background-color: #9b4dca;
      position: absolute;
      z-index: -1;
    }
    .content {
      flex-direction: column;
      margin-top: 7rem;
      h1 {
        font-size: 90px;
        font-weight: 900;
        font-family: vazir-black;
        margin: 0;
        padding: 0;
      }
      h2 {
        margin: 0;
        font-size: 30px;
        font-weight: 200;
      }
      button {
        margin-top: 2.5rem;
        border: 1px solid white;
        font-weight: 100;
        padding: 0.2rem 0.6rem;
        transition: 0.3s ease all;
        background-color: transparent;
        color: white;

        :hover {
          background-color: white;
          color: #9b4dca;
        }
      }
    }
    .box {
      border: 1px solid #1d1d1d;
      position: relative;
      width: clamp(300px, 80%, 450px);
      height: 500px;
      border-radius: 38px;
      margin-top: 5rem;
      background-color: white;
    }

    @media screen and (min-width: 1000px) {
      flex-direction: row;
      justify-content: space-evenly;
      align-items: flex-start;

      .content {
        align-items: flex-start;
      }

      .hero {
        height: 810px;
      }

      .box {
        margin-top: 8rem;
      }
    }
    @media screen and (min-width: 1700px) {
      width: 1700px;
    }
  }
`;
