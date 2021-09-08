import React from "react";
import { GetServerSideProps } from "next";
import { getOneEventById, getClosestEvents } from "../../withDB";
import styled from "styled-components";
import EventCreator from "../../components/EventCreator";
import Comment from "../../components/Comment";
import UpCommingEvents from "../../components/homeComponents/UpCommingEvents";

interface EventIdProps {
  JData: string;
  JEvents: string;
}

const EventId: React.FC<EventIdProps> = ({ JData, JEvents }) => {
  let event = JSON.parse(JData);
  let events = JSON.parse(JEvents);

  return (
    <>
      <Div className="flex-center">
        <div className="container flex-center">
          <div className="main">
            <h2> {event.title}</h2>
            <p>{event.description}</p>
            <h3>
              ظرفیت : <span>{event.signupLimit}</span> نفر
            </h3>

            <div className="signup flex-center">
              <button>ثبت نام </button>
            </div>
            <Comment comments={event.comments} />
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
      width: clamp(400px, 20%, 400px);
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
  }
`;
