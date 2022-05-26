import type { NextPage } from "next";
import Head from "next/head";

const Notes: NextPage = () => {
  return (
    <>
      <Head>
        <title>Notes</title>
      </Head>

      {/* page */}
      <div className="w-full flex flex-col items-center py-32 font-new-tegomin text-5xl">
        <h1>Notes</h1>
      </div>
    </>
  );
};

export default Notes;
