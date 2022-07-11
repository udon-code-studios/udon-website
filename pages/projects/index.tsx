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
          {/* LoL Time */}
          <Link href="https://lol.udon.studio" passHref>
            <a target="_blank" className="group">
              <div className="flex items-center space-x-4">
                <div className="w-1/4 p-2 text-secondary duration-200 group-hover:text-zinc-800 dark:text-secondary-dark dark:group-hover:text-secondary-focus-dark">
                  <icons.LoLTime />
                </div>
                <div className="flex w-3/4 flex-col">
                  <h3 className="text-lg text-secondary duration-200 group-hover:text-zinc-800 dark:text-secondary-dark dark:group-hover:text-secondary-focus-dark">
                    LoL Time
                  </h3>
                  <p className="text-sm text-quaternary duration-200 group-hover:text-zinc-700 dark:group-hover:text-secondary-dark">
                    A League of Legends stat site which visualizes time spent in-game over the past week.
                  </p>
                </div>
              </div>
            </a>
          </Link>

          {/* Riot API */}
          <a
            href="https:///doc.deno.land/https://deno.land/x/riot_api/mod.ts"
            target="_blank"
            rel="noreferrer"
            className="group"
          >
            <div className="flex items-center space-x-4">
              <div className="w-1/4 p-2 text-secondary duration-200 group-hover:text-zinc-800 dark:text-secondary-dark dark:group-hover:text-secondary-focus-dark">
                <icons.RiotAPI />
              </div>
              <div className="flex w-3/4 flex-col">
                <h3 className="text-lg text-secondary duration-200 group-hover:text-zinc-800 dark:text-secondary-dark dark:group-hover:text-secondary-focus-dark">
                  riot_api
                </h3>
                <p className="text-sm text-quaternary duration-200 group-hover:text-zinc-700 dark:group-hover:text-secondary-dark">
                  A Deno library for easy interfacing with the Riot Games API.
                </p>
              </div>
            </div>
          </a>

          {/* The Quick Brown Fox */}
          <Link href="https://fox.subparprogramming.org" passHref>
            <a target="_blank" className="group">
              <div className="flex items-center space-x-4">
                <div className="w-1/4 p-2 text-secondary duration-200 group-hover:text-zinc-800 dark:text-secondary-dark dark:group-hover:text-secondary-focus-dark">
                  <icons.TheQuickBrownFox />
                </div>
                <div className="flex w-3/4 flex-col">
                  <h3 className="text-lg text-secondary duration-200 group-hover:text-zinc-800 dark:text-secondary-dark dark:group-hover:text-secondary-focus-dark">
                    The Quick Brown Fox
                  </h3>
                  <p className="text-sm text-quaternary duration-200 group-hover:text-zinc-700 dark:group-hover:text-secondary-dark">
                    The best hiragana and katakana charts on the internet
                  </p>
                </div>
              </div>
            </a>
          </Link>

          {/* BibleDev */}
          <Link href="https://bible.subparprogramming.org" passHref>
            <a target="_blank" className="group">
              <div className="flex items-center space-x-4">
                <div className="w-1/4 p-2 text-secondary duration-200 group-hover:text-zinc-800 dark:text-secondary-dark dark:group-hover:text-secondary-focus-dark">
                  <icons.BibleDev />
                </div>
                <div className="flex w-3/4 flex-col">
                  <h3 className="text-lg text-secondary duration-200 group-hover:text-zinc-800 dark:text-secondary-dark dark:group-hover:text-secondary-focus-dark">
                    BibleDev
                  </h3>
                  <p className="text-sm text-quaternary duration-200 group-hover:text-zinc-700 dark:group-hover:text-secondary-dark">
                    A community driven effort to document the development history of the Holy Bible
                  </p>
                </div>
              </div>
            </a>
          </Link>

          {/* AlgoSim */}
          <Link href="https://algosim.subparprogramming.org/algo-v1" passHref>
            <a target="_blank" className="group">
              <div className="flex items-center space-x-4">
                <div className="w-1/4 p-2 text-secondary duration-200 group-hover:text-zinc-800 dark:text-secondary-dark dark:group-hover:text-secondary-focus-dark">
                  <icons.AlgoSim />
                </div>
                <div className="flex w-3/4 flex-col">
                  <h3 className="text-lg text-secondary duration-200 group-hover:text-zinc-800 dark:text-secondary-dark dark:group-hover:text-secondary-focus-dark">
                    AlgoSim
                  </h3>
                  <p className="text-sm text-quaternary duration-200 group-hover:text-zinc-700 dark:group-hover:text-secondary-dark">
                    Simulate your own custom algorithms on historical market data
                  </p>
                </div>
              </div>
            </a>
          </Link>

          {/* Tread */}
          <Link
            href="https://www.figma.com/file/TWYV7xecdrEHwpqji7a0ZE/Daily-Workout-Design-Draft-2?node-id=0%3A1"
            passHref
          >
            <a target="_blank" className="group">
              <div className="flex items-center space-x-4">
                <div className="w-1/4 p-2 text-secondary duration-200 group-hover:text-zinc-800 dark:text-secondary-dark dark:group-hover:text-secondary-focus-dark">
                  <icons.Tread />
                </div>
                <div className="flex w-3/4 flex-col">
                  <h3 className="text-lg text-secondary duration-200 group-hover:text-zinc-800 dark:text-secondary-dark dark:group-hover:text-secondary-focus-dark">
                    Tread
                  </h3>
                  <p className="text-sm text-quaternary duration-200 group-hover:text-zinc-700 dark:group-hover:text-secondary-dark">
                    UI/UX design for a barefoot running transition mobile app
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
