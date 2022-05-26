import type { NextPage } from "next";
import Head from "next/head";

const Custom404: NextPage = () => {
  return (
    <>
      <Head>
        <title>Page Not Found</title>
      </Head>

      {/* page */}
      <div className="flex w-full flex-col items-center py-32 font-new-tegomin text-5xl">
        <h1>{"404 - page not found :("}</h1>
      </div>
    </>
  );
};

export default Custom404;
