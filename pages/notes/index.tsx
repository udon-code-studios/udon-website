import type { NextPage } from "next";
import Head from "next/head";

const Notes: NextPage = () => {
  return (
    <>
      <Head>
        <title>Notes</title>
      </Head>

      {/* page */}
      <div className="flex w-full flex-col items-center space-y-6 py-32 font-new-tegomin">
        <h1 className="text-5xl">Notes</h1>
        <p>(hopefully) under construction.</p>
      </div>
    </>
  );
};

export default Notes;
