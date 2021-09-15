import React from "react";
import { GetServerSideProps } from "next";
import Router from "next/router";
import { getOneEventById, getClosestEvents } from "../../withDB";
import styled from "styled-components";
import EventCreator from "../../components/EventCreator";
import Comment from "../../components/Comment";
import UpCommingEvents from "../../components/homeComponents/UpCommingEvents";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import HeadContent from "../../components/HeadContent";

interface EventIdProps {
  JData: string;
  JEvents: string;
  user: {};
}

const EventId: React.FC<EventIdProps> = ({ JData, JEvents, user }) => {
  const handleSignUp = async () => {
    await axios.post("/api/signup", {
      user: user,
      eventId: Router.query.eventId,
    });
    window.location.replace("");
  };
  const handleComment = async (formValues: {}) => {
    let comment = { ...formValues, ...user, date: new Date() };
    let { data } = await axios.post("/api/comment", {
      comment: comment,
      eventId: Router.query.eventId,
    });
    if (data.error) toast(data.error);
    else window.location.replace("");
  };

  let event = JSON.parse(JData);
  let events = JSON.parse(JEvents);

  return (
    <>
      <HeadContent pageName={event.title} />
      <Div className="flex-center">
        <ToastContainer />
        <div className="container flex-center">
          <div className="main">
            <h2> {event.title}</h2>
            <p>{event.description}</p>
            <h3>
              ظرفیت : <span>{event.signupLimit}</span> نفر
            </h3>
            {user && (
              <div className="signup flex-center">
                <button onClick={handleSignUp}>ثبت نام </button>
              </div>
            )}
            {!user && (
              <div>
                <h3>
                  برای ثبت نام یا ثبت نظر باید <a href="/login">وارد</a> شوید،
                  اگر حساب ندارید <a href="/signup">اینجا</a> بسازید
                </h3>
              </div>
            )}
            <Comment handleComment={handleComment} comments={event.comments} />
          </div>
          <div className="card">
            <EventCreator events={[event]} moreDetails={true} />
          </div>
        </div>
      </Div>
      <UpCommingEvents closestEvents={events} />
    </>
  );
};

export default EventId;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  let eventId: string = `${ctx.query.eventId}`;
  let events = await getClosestEvents();
  let data = await getOneEventById(eventId);
  let JData = JSON.stringify(data);
  let JEvents = JSON.stringify(events);

  return {
    props: { JData, JEvents },
  };
};

const Div = styled.section`
  margin-bottom: 6rem;

  .container {
    width: clamp(300px, 90%, 1700px);
    justify-content: space-around;
    flex-direction: column-reverse;

    .main {
      width: clamp(300px, 90%, 700px);
      text-align: center;

      span {
        text-decoration: underline;
      }

      h2,
      h3 {
        margin: 1rem 0;
      }

      h3 {
        font-weight: 200;
      }
    }
    .card {
      width: clamp(350px, 90%, 500px);
      position: sticky;
      top: 0;
    }

    @media screen and (min-width: 1000px) {
      flex-direction: row;
      align-items: flex-start;
      justify-content: space-evenly;

      .main {
        width: clamp(300px, 60%, 700px);
        margin-top: 3rem;
        text-align: right;
      }
    }
    @media screen and (min-width: 1700px) {
      width: 1700px;
    }
  }
`;
