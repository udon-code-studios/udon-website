import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import * as icons from "../../components/icons";

const Projects: NextPage = () => {
  return (
    <>
      <Head>
        <title>Projects</title>
      </Head>

      {/* page */}
      <div className="mx-auto flex w-full max-w-screen-sm flex-col space-y-4 py-12 px-4 text-primary dark:text-secondary-focus-dark">
        <h1 className="text-4xl font-semibold text-primary dark:text-primary-dark">Projects</h1>
        <p className="pb-8 italic text-quaternary">List of projects we&apos;re proud of</p>
        <div className="grid grid-flow-row grid-cols-1 gap-8 px-4 sm:px-10 md:grid-cols-2 md:px-0">
          {/* The Quick Brown Fox */}
          <Link href="https://fox.subparprogramming.org" passHref>
            <a target="_blank" className="group">
              <div className="flex items-center space-x-4">
                <div className="w-36">
                  <Image
                    src="/assets/projects/the-quick-brown-fox.png"
                    alt="The Quick Brown Fox"
                    layout="responsive"
                    width="400"
                    height="400"
                  />
                </div>
                <div className="flex flex-col">
                  <h3 className="text-lg text-secondary duration-200 group-hover:text-zinc-800 dark:text-secondary-dark dark:group-hover:text-secondary-focus-dark">
                    The Quick Brown Fox
                  </h3>
                  <p className="text-sm text-quaternary duration-200 group-hover:text-zinc-700 dark:group-hover:text-secondary-dark">
                    Functional and beautiful hiragana and katakana charts
                  </p>
                </div>
              </div>
            </a>
          </Link>
          {/* BibleDev */}
          <Link href="https://fox.subparprogramming.org" passHref>
            <a target="_blank" className="group">
              <div className="flex items-center space-x-4">
                <div className="w-36 p-2 text-secondary duration-200 group-hover:text-zinc-800 dark:text-secondary-dark dark:group-hover:text-secondary-focus-dark">
                  <icons.BibleDev className="" />
                </div>
                <div className="flex flex-col">
                  <h3 className="text-lg text-secondary duration-200 group-hover:text-zinc-800 dark:text-secondary-dark dark:group-hover:text-secondary-focus-dark">
                    BibleDev
                  </h3>
                  <p className="text-sm text-quaternary duration-200 group-hover:text-zinc-700 dark:group-hover:text-secondary-dark">
                    A community driven project to document the development history of the Holy Bible
                  </p>
                </div>
              </div>
            </a>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Projects;
