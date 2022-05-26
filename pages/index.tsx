import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>udon_</title>
      </Head>

      {/* page */}
      <div className="w-full max-w-screen-sm flex flex-col py-12 mx-auto space-y-4 px-4">
        <h1 className="font-bold text-4xl pb-3">What is this?</h1>
        <p>
          Udon Code Studios (UCS) is a fake software company which provides a neutral ground for Leo and his friends to
          dream up and implement our software fantasies.
        </p>
        <p>
          Our philosophy is centered on producing software of the highest quality. That means that even the parts you
          don't see need to be perfect.
        </p>
        <p className="px-14 text-center italic">
          "For you to sleep well at night, the aesthetic, the quality, has to be carried all the way
          through."&nbsp;&nbsp;&nbsp;
          <span>— Steve Jobs</span>
        </p>
        <p>
          Check out our{" "}
          <a
            href="/projects"
            className="underline decoration-2 underline-offset-2 font-semibold dark:hover:text-zinc-300 hover:text-zinc-400 duration-200"
          >
            projects
          </a>{" "}
          to see what we've been up to. And{" "}
          <a
            href="/people"
            className="underline decoration-2 underline-offset-2 font-semibold dark:hover:text-zinc-300 hover:text-zinc-400 duration-200"
          >
            meet the team
          </a>{" "}
          behind them before you go.
        </p>
        <h1 className="font-bold text-4xl pt-8 pb-3">Leo Battalora</h1>
        <p>
          Hello! I'm Leo - the guy behind UCS. I really love udon noodes and occasionally do a bit coding on the side.
        </p>
        <p>
          As a child I really loved LEGOs for how they would each snap together perfectly. I hated the stickers that
          would come with them though, because there was no way to put them on perfectly - especially with my clumbsy
          8-year-old fingers.
        </p>
        <p>
          Coding has been like playing with LEGOs again. Thanks to the amazing work of generations of physicists,
          chemists, and electrical engineers, I get to live in this digital world where - with time and meticulousness -
          every bit can be set perfectly. And there are <em>almost</em> no stickers in sight ;)
        </p>
        <p>
          Find me on{" "}
          <a
            href="https://github.com/leo6liu"
            target="_blank"
            className="underline decoration-2 underline-offset-2 font-semibold dark:hover:text-zinc-300 hover:text-zinc-400 duration-200"
          >
            GitHub
          </a>
          ,{" "}
          <a
            href="https://twitter.com/LBattalora"
            target="_blank"
            className="underline decoration-2 underline-offset-2 font-semibold dark:hover:text-zinc-300 hover:text-zinc-400 duration-200"
          >
            Twitter
          </a>
          , and{" "}
          <a
            href="https://www.linkedin.com/in/leo6/"
            target="_blank"
            className="underline decoration-2 underline-offset-2 font-semibold dark:hover:text-zinc-300 hover:text-zinc-400 duration-200"
          >
            LinkedIn
          </a>
          .
        </p>
        <p>
          Mail me at{" "}
          <a
            href="mailto:leo.battalora@gmail.com"
            className="underline decoration-2 underline-offset-2 font-semibold dark:hover:text-zinc-300 hover:text-zinc-400 duration-200"
          >
            leo.battalora@gmail.com
          </a>
        </p>
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
