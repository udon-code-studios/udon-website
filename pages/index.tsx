import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Udon Code Studios</title>
      </Head>

      {/* page */}
      <div className="mx-auto flex w-full max-w-screen-sm flex-col space-y-4 py-12 px-4">
        <h1 className="pb-3 text-4xl font-bold">What is this?</h1>
        <p>Udon Code Studios (UCS) is a fake software company focused on producing clean and beautiful code.</p>
        <p>
          Our core philosophy is to produce software of the highest quality. That means that even the parts you
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
            <a className="font-semibold underline decoration-2 underline-offset-2 duration-200 hover:text-zinc-400 dark:hover:text-zinc-300">
              projects
            </a>
          </Link>{" "}
          to see what we&apos;ve been up to. And{" "}
          <Link href="/people">
            <a className="font-semibold underline decoration-2 underline-offset-2 duration-200 hover:text-zinc-400 dark:hover:text-zinc-300">
              meet the team
            </a>
          </Link>{" "}
          behind them before you go.
        </p>
        <h1 className="pt-8 pb-3 text-4xl font-bold">Leo Battalora</h1>
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
              className="font-semibold underline decoration-2 underline-offset-2 duration-200 hover:text-zinc-400 dark:hover:text-zinc-300"
            >
              GitHub
            </a>
          </Link>
          ,{" "}
          <Link href="https://twitter.com/LBattalora" passHref>
            <a
              target="_blank"
              className="font-semibold underline decoration-2 underline-offset-2 duration-200 hover:text-zinc-400 dark:hover:text-zinc-300"
            >
              Twitter
            </a>
          </Link>
          , and{" "}
          <Link href="https://www.linkedin.com/in/leo6/">
            <a
              target="_blank"
              className="font-semibold underline decoration-2 underline-offset-2 duration-200 hover:text-zinc-400 dark:hover:text-zinc-300"
            >
              LinkedIn
            </a>
          </Link>
          .
        </p>
        <p>
          Mail me at{" "}
          <Link href="mailto:leo.battalora@gmail.com" passHref>
            <a className="font-semibold underline decoration-2 underline-offset-2 duration-200 hover:text-zinc-400 dark:hover:text-zinc-300">
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
