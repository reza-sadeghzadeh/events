import React from "react";
import styled from "styled-components";
import SwiperComponent from "../SwiperComponent";

interface UpCommingEventsProps {
  closestEvents: [];
}

const UpCommingEvents: React.FC<UpCommingEventsProps> = ({
  closestEvents: events,
}) => {
  return (
    <>
      <Div>
        <div className="holder">
          <h1>رویدادهای نزدیک</h1>
        </div>
      </Div>
      <SwiperComponent events={events} />
    </>
  );
};

export default UpCommingEvents;

const Div = styled.section`
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  .holder {
    position: relative;
    margin-right: 5rem;
    font-weight: 100;

    ::after {
      content: "";
      position: absolute;
      height: 1px;
      width: 100vw;
      background-color: #9b4dca;
      top: 50%;
      right: 110%;
    }
  }
  display: flex;
`;
