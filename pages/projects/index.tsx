import type { NextPage } from "next";
import Head from "next/head";

const Projects: NextPage = () => {
  return (
    <>
      <Head>
        <title>Projects</title>
      </Head>

      {/* page */}
      <div className="w-full flex flex-col items-center py-32 font-new-tegomin text-5xl">
        <h1>Projects</h1>
      </div>
    </>
  );
};

export default Projects;
