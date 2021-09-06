import { GetServerSideProps } from "next";
import styled from "styled-components";
import EventCreator from "../components/EventCreator";
import { getAllData } from "../withDB";

interface HomeProps {
  JData: string;
}

const Home: React.FC<HomeProps> = ({ JData }) => {
  let events = JSON.parse(JData);

  return (
    <Div>
      <EventCreator events={events} />
    </Div>
  );
};

export default Home;

const Div = styled.main`
  overflow-x: hidden;
`;

export const getServerSideProps: GetServerSideProps = async () => {
  let data = await getAllData();
  let JData = JSON.stringify(data);
  return {
    props: { JData },
  };
};
