import React from "react";
import jwt from "jsonwebtoken";
import Home from "../components/homeComponents/Home";
import TwoSides from "../components/homeComponents/TwoSides";
import UpCommingEvents from "../components/homeComponents/UpCommingEvents";
import { GetServerSideProps } from "next";
import { getClosestEvents } from "../withDB";
import Contact from "../components/homeComponents/Contact";

interface IndexProps {
  jdata: string;
}
const Index: React.FC<IndexProps> = ({ jdata }) => {
  return (
    <div>
      <Home />
      <TwoSides />
      <UpCommingEvents closestEvents={JSON.parse(jdata)} />
      <Contact />
    </div>
  );
};

export default Index;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const data = await getClosestEvents();
  let jdata = JSON.stringify(data);

  return {
    props: { jdata },
  };
};
