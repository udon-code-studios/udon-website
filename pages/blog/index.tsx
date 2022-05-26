import type { NextPage } from "next";
import Head from "next/head";

const Blog: NextPage = () => {
  return (
    <>
      <Head>
        <title>Blog</title>
      </Head>

      {/* page */}
      <div className="w-full flex flex-col items-center py-32 font-new-tegomin text-5xl">
        <h1>Blog</h1>
      </div>
    </>
  );
};

export default Blog;
