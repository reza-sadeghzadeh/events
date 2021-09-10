import Router from "next/router";
import React, { useState } from "react";
import { FaUser } from "react-icons/fa";

interface HeaderProps {
  thisUser: {};
}

import styled from "styled-components";

const Header: React.FC<HeaderProps> = ({ thisUser }) => {
  const [dropDown, setDropDown] = useState(false);

  return (
    <Div className="flex-center">
      <div className="container flex-center">
        <img
          onClick={() => Router.push("/")}
          src="/images/Asset-logo.svg"
          alt=""
        />
        <div className="content flex-center">
          <h3 onClick={() => Router.push("/events?currentPage=1")}>رویدادها</h3>
          {!thisUser && (
            <button onClick={() => Router.push("/login")}>ورود</button>
          )}
          {thisUser && (
            <div
              onMouseEnter={() => setDropDown(true)}
              onMouseLeave={() => setDropDown(false)}
              className="profile flex-center"
            >
              <FaUser />
              <h3>{thisUser.name}</h3>
              <ul className={dropDown ? "" : "hide"}>
                <li>پروفایل</li>
                <li
                  onClick={() => {
                    document.cookie = "X-token=;";
                    window.location.reload();
                  }}
                >
                  خروج
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </Div>
  );
};

export default Header;

const Div = styled.nav`
  background-color: #fff;
  width: 100%;
  border-bottom: 1px solid #d1d1d1;
  position: fixed;
  top: 0;
  z-index: 10;

  .profile {
    margin-right: 2rem;
    justify-content: space-between;
    width: 50px;
    cursor: pointer;
    position: relative;

    ul.hide {
      display: none;
    }

    ul {
      list-style: none;
      position: absolute;
      left: 0;
      top: 100%;
      border: 1px solid #f0f0f0;

      li {
        padding: 0.5rem 5rem;

        background-color: #fff;
        :hover {
          background-color: #f0f0f0;
        }
      }
    }
  }

  .container {
    width: 100%;
    padding: 0 2rem;
    justify-content: space-between;
    height: 80px;

    img {
      cursor: pointer;
      width: 70px;
      margin-top: 0.4rem;
      padding: 0;
      /* background-color: red; */
      aspect-ratio: 1/1;
    }

    .content {
      h3 {
        cursor: pointer;
        font-weight: 200;
      }
      button {
        border: 1px solid #9b4dca;
        margin-right: 1rem;
        font-weight: 100;
        padding: 0;
        line-height: 2.5rem;
        transition: 0.3s ease all;
        background-color: white;
        color: #9b4dca;

        :hover {
          background-color: #9b4dca;
          color: white;
        }
      }
    }
    @media screen and (min-width: 600px) {
      justify-content: space-around;
      padding: 0;

      ul {
        left: -150%;
      }

      .content {
        button {
          margin-right: 2rem;
          padding: 0rem 2rem;
        }
      }
    }
    @media screen and (min-width: 1700px) {
      width: 1700px;
    }
  }
`;
