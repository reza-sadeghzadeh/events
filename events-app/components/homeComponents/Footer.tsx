import React from "react";
import styled from "styled-components";

function Footer() {
  return (
    <Div className="flex-center">
      <div className="banner"></div>
      <h4>
        Designed by{" "}
        <a href="https://github.com/reza-sadeghzadeh">Reza Sadeghzadeh</a>
      </h4>
    </Div>
  );
}

export default Footer;

const Div = styled.footer`
  overflow-x: hidden;
  overflow-y: hidden;
  z-index: 3;
  flex-direction: column;
  align-items: flex-start;
  position: relative;
  height: 300px;

  .banner {
    position: absolute;
    border-top: 5px solid #9b4dca;
    width: 100%;
    bottom: -50%;
    height: 300px;
    background-color: #1d1d1d;
    transform: skewY(3deg);
    z-index: 5;
  }
  h4 {
    position: absolute;
    bottom: 15%;
    text-align: center;
    left: 50%;
    font-family: sans-serif;
    transform: translateX(-50%);
    z-index: 10;
    font-weight: 200;
    color: white;
    a {
      display: inline;
      color: white;
      display: inline-block;
      width: 100%;
    }
  }
  @media screen and (min-width: 500px) {
    h2 {
      left: 50%;
      transform: translateX(-50%);
      display: inline;
    }
  }
`;
