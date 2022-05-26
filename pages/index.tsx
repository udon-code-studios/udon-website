import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

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
          don&apos;t see need to be perfect.
        </p>
        <p className="px-14 text-center italic">
          &quot;For you to sleep well at night, the aesthetic, the quality, has to be carried all the way
          through.&quot;&nbsp;&nbsp;&nbsp;
          <span>— Steve Jobs</span>
        </p>
        <p>
          Check out our{" "}
          <Link href="/projects">
            <a className="underline decoration-2 underline-offset-2 font-semibold dark:hover:text-zinc-300 hover:text-zinc-400 duration-200">
              projects
            </a>
          </Link>{" "}
          to see what we&apos;ve been up to. And{" "}
          <Link href="/people">
            <a className="underline decoration-2 underline-offset-2 font-semibold dark:hover:text-zinc-300 hover:text-zinc-400 duration-200">
              meet the team
            </a>
          </Link>{" "}
          behind them before you go.
        </p>
        <h1 className="font-bold text-4xl pt-8 pb-3">Leo Battalora</h1>
        <p>
          Hello! I&apos;m Leo - the guy behind UCS. I really love udon noodes and occasionally do a bit coding on the
          side.
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
          <Link href="https://github.com/leo6liu" passHref>
            <a
              target="_blank"
              className="underline decoration-2 underline-offset-2 font-semibold dark:hover:text-zinc-300 hover:text-zinc-400 duration-200"
            >
              GitHub
            </a>
          </Link>
          ,{" "}
          <Link href="https://twitter.com/LBattalora" passHref>
            <a
              target="_blank"
              className="underline decoration-2 underline-offset-2 font-semibold dark:hover:text-zinc-300 hover:text-zinc-400 duration-200"
            >
              Twitter
            </a>
          </Link>
          , and{" "}
          <Link href="https://www.linkedin.com/in/leo6/">
            <a
              target="_blank"
              className="underline decoration-2 underline-offset-2 font-semibold dark:hover:text-zinc-300 hover:text-zinc-400 duration-200"
            >
              LinkedIn
            </a>
          </Link>
          .
        </p>
        <p>
          Mail me at{" "}
          <Link href="mailto:leo.battalora@gmail.com" passHref>
            <a className="underline decoration-2 underline-offset-2 font-semibold dark:hover:text-zinc-300 hover:text-zinc-400 duration-200">
              leo.battalora@gmail.com
            </a>
          </Link>
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
