import React from "react";
import Head from "next/head";

interface Props {
  pageName: string;
}

const HeadContent = ({ pageName }: Props) => {
  return (
    <Head>
      <title>رویدادها | {pageName} </title>
    </Head>
  );
};

export default HeadContent;
