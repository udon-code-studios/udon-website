import type { NextPage } from "next";
import Head from "next/head";

const People: NextPage = () => {
  return (
    <>
      <Head>
        <title>People</title>
      </Head>

      {/* page */}
      <div className="flex w-full flex-col items-center space-y-6 py-32 font-new-tegomin">
        <h1 className="text-5xl">People</h1>
        <p>(hopefully) under construction.</p>
      </div>
    </>
  );
};

export default People;
