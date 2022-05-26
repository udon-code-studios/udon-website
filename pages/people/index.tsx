import type { NextPage } from "next";
import Head from "next/head";

const People: NextPage = () => {
  return (
    <>
      <Head>
        <title>People</title>
      </Head>

      {/* page */}
      <div className="w-full flex flex-col items-center py-32 font-new-tegomin space-y-6">
        <h1 className="text-5xl">People</h1>
        <p>(hopefully) under construction.</p>
      </div>
    </>
  );
};

export default People;
