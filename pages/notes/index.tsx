import type { NextPage } from "next";
import Head from "next/head";

const Notes: NextPage = () => {
  return (
    <>
      <Head>
        <title>Notes</title>
      </Head>

      {/* page */}
      <div className="w-full flex flex-col items-center py-32 font-new-tegomin space-y-6">
        <h1 className="text-5xl">Notes</h1>
        <p>(hopefully) under construction.</p>
      </div>
    </>
  );
};

export default Notes;
