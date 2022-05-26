import type { NextPage } from "next";
import Head from "next/head";

const People: NextPage = () => {
  return (
    <>
      <Head>
        <title>People</title>
      </Head>

      {/* page */}
      <div className="w-full flex flex-col items-center py-32 font-new-tegomin text-5xl">
        <h1>People</h1>
      </div>
    </>
  );
};

export default People;
