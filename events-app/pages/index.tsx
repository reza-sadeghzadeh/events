import React from "react";
import Home from "../components/homeComponents/Home";
import TwoSides from "../components/homeComponents/TwoSides";
import UpCommingEvents from "../components/homeComponents/UpCommingEvents";
import { GetStaticProps } from "next";
import { getClosestEvents } from "../withDB";
import Contact from "../components/homeComponents/Contact";
import Footer from "../components/homeComponents/Footer";

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
      <Footer />
    </div>
  );
};

export default Index;

export const getStaticProps: GetStaticProps = async () => {
  const data = await getClosestEvents();
  let jdata = JSON.stringify(data);
  return {
    props: { jdata },
    revalidate: 60,
  };
};
