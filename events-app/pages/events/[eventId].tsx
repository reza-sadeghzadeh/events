import React from "react";
import { GetServerSideProps } from "next";
import { getOneEventById } from "../../withDB";
import SingleEventCreator from "../../components/SingleEventCreator";

interface EventIdProps {
  JData: string;
}

const EventId: React.FC<EventIdProps> = ({ JData }) => {
  let event = JSON.parse(JData);
  return (
    <>
      <SingleEventCreator event={event} />
    </>
  );
};

export default EventId;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  let eventId: string = `${ctx.query.eventId}`;
  let data = await getOneEventById(eventId);
  let JData = JSON.stringify(data);

  return {
    props: { JData },
  };
};
