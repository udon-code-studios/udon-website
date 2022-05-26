import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>udon_</title>
      </Head>

      {/* page */}
      <div className="w-full flex flex-col items-center py-32 font-new-tegomin text-5xl">
        <h1>Home</h1>
      </div>
    </>
  );
};

export default Home;

/* <div className="w-40">
            <Image src="/assets/udon-logo-full-text-square.svg" layout="responsive" width="300" height="300" />
          </div>
          <div className="w-40">
            <Image src="/assets/udon-logo-full-text-square.svg" layout="responsive" width="300" height="300" />
          </div>
          <div className="w-40">
            <Image src="/assets/udon-logo-full-text-square.svg" layout="responsive" width="300" height="300" />
          </div> */
