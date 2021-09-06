import { GetServerSideProps } from "next";
import styled from "styled-components";
import EventCreator from "../components/EventCreator";
import { getAllData, getPageData } from "../withDB";
import { useState, useEffect } from "react";
import _ from "lodash";
import Router from "next/router";

interface HomeProps {
  JData: string;
  length: number;
  page: number;
  numberInPage: number;
}

const Home: React.FC<HomeProps> = ({ JData, length, page, numberInPage }) => {
  let events = JSON.parse(JData);
  const [currentPage, setCurrentPage] = useState(+page);

  useEffect(() => {
    Router.push(`/?currentPage=${currentPage}`);
  }, [currentPage]);

  let end = Math.ceil(+length / +numberInPage);
  let dataRange = _.range(0, end, 1);

  return (
    <Div>
      <EventCreator events={events} />
      <div className="pagination">
        {dataRange.map((d) => (
          <div
            style={currentPage === d + 1 ? { opacity: 1 } : null}
            onClick={() => setCurrentPage(d + 1)}
            className="pagination-child"
            key={d}
          >
            <h2>{d + 1}</h2>
          </div>
        ))}
      </div>
    </Div>
  );
};
export const getServerSideProps: GetServerSideProps = async (ctx: any) => {
  let page = ctx.query.currentPage || 1;
  let numberInPage = +12;
  let data = await getPageData(page, numberInPage);
  let JData = JSON.stringify(data);
  let allData = await getAllData();
  let length = allData.length;

  return {
    props: { JData, length, page, numberInPage },
  };
};

export default Home;

const Div = styled.main`
  overflow-x: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  .pagination {
    direction: ltr;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 2rem 0;
  }

  .pagination-child {
    width: 40px;
    border-radius: 0.4rem;
    aspect-ratio: 1/1;
    margin: 0 0.2rem;
    display: flex;
    justify-content: center;
    align-items: center;

    background-color: transparent;
    opacity: 0.4;
    border: 1px solid #9b4dca;
    cursor: pointer;

    h2 {
      color: #9b4dca;
    }
  }
`;
