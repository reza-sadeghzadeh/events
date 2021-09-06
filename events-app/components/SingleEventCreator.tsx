import React from "react";

interface SingleEventCreatorProps {
  event: object;
}

const SingleEventCreator: React.FC<SingleEventCreatorProps> = ({ event }) => {
  return (
    <>
      <h1>hello events</h1>
    </>
  );
};

export default SingleEventCreator;
