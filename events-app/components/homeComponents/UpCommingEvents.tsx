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
          <h2>رویدادهای نزدیک</h2>
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
  margin: 0;

  .holder {
    width: 180px;
    position: relative;
    margin-right: 1rem;
    font-weight: 100;

    ::after {
      content: "";
      position: absolute;
      height: 1px;
      width: 100vw;
      background-color: #9b4dca;
      top: 50%;
      right: 100%;
    }
  }
  @media screen and (min-width: 1000px) {
    .holder {
      margin-right: 5rem;
    }
  }
`;
