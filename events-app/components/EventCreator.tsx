import React from "react";
import styled from "styled-components";
import Link from "next/link";
import { FaRegClock, FaMapMarkerAlt, FaUserAlt } from "react-icons/fa";
import Image from "next/image";

interface EventCreatorProps {
  events: object[];
  moreDetails: boolean;
}

const EventCreator: React.FC<EventCreatorProps> = ({ events, moreDetails }) => {
  return (
    <Div>
      <ul>
        {events.map((e: any) => (
          <li key={e.id}>
            {0 < new Date(e.date).getTime() - Date.now() &&
            new Date(e.date).getTime() - Date.now() < 3600 * 24 * 30 * 1000 ? (
              <div className="badge">
                <h3>رویداد نزدیک</h3>
              </div>
            ) : null}
            <div>
              <Image src={e.path} alt={e.title} width={400} height={100} />
              <h2>{e.title}</h2>
              <div className="date-holder">
                <FaRegClock />
                <div>
                  <h3>
                    {new Date(e.date).toLocaleDateString("fa-ir", {
                      day: "2-digit",
                      year: "numeric",
                      month: "long",
                    })}
                  </h3>
                </div>
              </div>
              <div className="address-holder">
                <FaMapMarkerAlt />
                <address>
                  <h3>{e.address}</h3>
                </address>
              </div>
              <p>{e.summary} </p>
              {!moreDetails && (
                <Link href={`/events/${e.id}`}>صفحه رویداد</Link>
              )}
              {moreDetails && (
                <div>
                  <h2>
                    <h3>تعداد ثبت نام</h3>
                    {e.signups.length} <FaUserAlt />
                  </h2>
                </div>
              )}
              {e.signupLimit - e.signups.length <= 5 && (
                <div className="warning flex-center">
                  تنها {e.signupLimit - e.signups.length} ظرفیت باقی مانده
                </div>
              )}
            </div>
          </li>
        ))}
      </ul>
    </Div>
  );
};

export default EventCreator;

const Div = styled.div`
  width: 100%;
  overflow: hidden;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;
  margin-bottom: 2rem;

  .warning {
    height: 25px;
    position: absolute;
    bottom: 0;
    color: white;
    left: 0;
    width: 100%;
    background-color: lightcoral;
  }

  ul {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    overflow-x: hidden;
    margin-top: 2rem;
    width: clamp(350px, 95%, 1700px);

    @media screen and (min-width: 600px) {
      width: clamp(350px, 90%, 1700px);
      li {
        margin: 0.75rem;
      }
    }
    @media screen and (min-width: 1400px) {
      width: 1400px;
    }
  }
  li {
    margin: 0.75rem;
    width: clamp(30ch, 400px, 500px);
    padding: 2.5rem 1.5rem;
    border: #d1d1d1 1px solid;
    background-color: transparent;
    transition: 0.3s ease box-shadow;
    text-align: center;
    list-style: none;
    position: relative;
    border-radius: 10px;
    overflow: hidden;

    :hover {
      box-shadow: 0px 0px 10px 0 #d1d1d1;
    }

    .badge {
      background-color: #9b4dca;
      width: 100px;
      outline: 5px solid white;
      height: 100px;
      transform: skewX(60deg) translateX(30px);
      position: absolute;
      top: 0;
      z-index: 5;
      right: 0;

      h3 {
        transform: skewX(-60deg) rotate(30deg) translateX(35px);
        color: white;
        opacity: 1;
      }
    }

    .date-holder,
    .address-holder {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 0;
      margin: 0;
    }

    h2 {
      font-size: 1.6rem;
      font-weight: 300;
      margin-bottom: 1rem;
      margin-top: 0.5rem;
      font-style: normal;
      /* height: 3rem;
      text-overflow: ellipsis; */
    }
    h3 {
      font-weight: 200;
      font-style: normal;
      opacity: 0.7;
      font-size: 1.1rem;
      padding: 0.1rem 0;
    }

    p {
      font-weight: 100;
      /* font-size: 1.2rem; */
      padding: 1rem 0;
      margin-top: 0.5rem;
      height: 100px;
      /* text-align: right; */
      overflow-y: hidden;
      text-overflow: ellipsis;
    }

    svg {
      font-size: 1rem;
      margin: 0 0.4rem;
    }

    img {
      /* width: 100%; */
      height: 200px;
      border-radius: 10px;
      object-fit: cover;
      pointer-events: none;
    }

    a {
      cursor: pointer;
      display: inline-block;
      text-transform: capitalize;
      display: inline-block;
      background-color: transparent;
      border: 1px #9b4dca solid;
      padding: 0.5rem 1rem;
      margin: 1.5rem 0 0 0;
      transition: 0.2s ease all;
      border-radius: 5px;
      text-decoration: none;
      color: #9b4dca;

      :hover {
        background-color: #9b4dca;
        color: white;
      }
    }
  }
`;
