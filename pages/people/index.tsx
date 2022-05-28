import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import * as icons from "../../components/icons";

const People: NextPage = () => {
  return (
    <>
      <Head>
        <title>People</title>
      </Head>

      {/* page */}
      <div className="mx-auto flex w-full max-w-screen-sm flex-col space-y-4 py-12 px-4 text-primary dark:text-secondary-focus-dark">
        <h1 className="text-4xl font-semibold text-primary dark:text-primary-dark">People</h1>
        <p className="italic text-quaternary">Because code doesn&apos;t write itself... yet :)</p>

        {/* people */}
        <div className="grid grid-flow-row grid-cols-1 gap-y-10 pt-8 sm:grid-cols-2 md:-mx-20 md:grid-cols-3">
          {/* Leo Battalora */}
          <div className="flex w-full flex-col items-center space-y-1 text-secondary dark:text-secondary-dark">
            <div className="w-40 overflow-hidden rounded-2xl">
              <Image
                alt="Leo"
                src="/assets/people/images/battalora_leo_1000x1000.jpg"
                layout="responsive"
                width="1000"
                height="1000"
                className="z-0"
              />
            </div>
            <h2 className="pt-2 text-2xl font-semibold">Leo Battalora</h2>
            <p>
              <span className="font-bold">Role:</span> CEO / Developer
            </p>
            <p>
              <span className="font-bold">Resume/CV: </span>
              <a className="underline" href="/assets/people/resumes/battalora-leo.pdf" target="_blank">
                PDF
              </a>
              ,{" "}
              <Link href="http://www.google.com" passHref>
                <a className="underline" target="_blank">
                  Online
                </a>
              </Link>
            </p>
            <div className="flex items-center space-x-2 pt-1">
              {/* LinkedIn */}
              <Link href="/notes">
                <a title="Notes" className="duration-200 hover:text-zinc-400 dark:hover:text-zinc-300">
                  <icons.PhLinkedinLogoBold className="h-6" />
                </a>
              </Link>
              {/* GitHub */}
              <Link href="/notes">
                <a title="Notes" className="duration-200 hover:text-zinc-400 dark:hover:text-zinc-300">
                  <icons.UilGithubAlt className="h-6" />
                </a>
              </Link>
              {/* Email */}
              <Link href="/notes">
                <a title="Notes" className="duration-200 hover:text-zinc-400 dark:hover:text-zinc-300">
                  <icons.UilEnvelopeAlt className="h-6" />
                </a>
              </Link>
            </div>
          </div>

          {/* J----- L-- */}
          <div className="flex w-full flex-col items-center space-y-1 text-secondary dark:text-secondary-dark">
            <div className="w-40 overflow-hidden rounded-2xl">
              <Image
                alt="Joshua"
                src="/assets/people/images/battalora_leo_1000x1000.jpg"
                layout="responsive"
                width="1000"
                height="1000"
              />
            </div>
            <h2 className="pt-2 text-2xl font-semibold">J----- L--</h2>
            <p>
              <span className="font-bold">Role:</span> Developer
            </p>
            <p>
              <span className="font-bold">Resume/CV: </span>
              <a className="underline" href="/assets/people/resumes/battalora-leo.pdf" target="_blank">
                PDF
              </a>
              ,{" "}
              <Link href="http://www.google.com" passHref>
                <a className="underline" target="_blank">
                  Online
                </a>
              </Link>
            </p>
            <div className="flex items-center space-x-2 pt-1">
              {/* LinkedIn */}
              <Link href="/notes">
                <a title="Notes" className="duration-200 hover:text-zinc-400 dark:hover:text-zinc-300">
                  <icons.PhLinkedinLogoBold className="h-6" />
                </a>
              </Link>
              {/* GitHub */}
              <Link href="/notes">
                <a title="Notes" className="duration-200 hover:text-zinc-400 dark:hover:text-zinc-300">
                  <icons.UilGithubAlt className="h-6" />
                </a>
              </Link>
              {/* Email */}
              <Link href="/notes">
                <a title="Notes" className="duration-200 hover:text-zinc-400 dark:hover:text-zinc-300">
                  <icons.UilEnvelopeAlt className="h-6" />
                </a>
              </Link>
            </div>
          </div>

          {/* Abel Chen */}
          <div className="flex w-full flex-col items-center space-y-1 text-secondary dark:text-secondary-dark">
            <div className="w-40 overflow-hidden rounded-2xl">
              <Image
                alt="Abel"
                src="/assets/people/images/chen_abel_1000x1000.jpg"
                layout="responsive"
                width="1000"
                height="1000"
              />
            </div>
            <h2 className="pt-2 text-2xl font-semibold">Abel Chen</h2>
            <p>
              <span className="font-bold">Role:</span> N/A
            </p>
            <p>
              <span className="font-bold">Resume/CV: </span>
              <a className="underline" href="/assets/people/resumes/chen-abel.pdf" target="_blank">
                PDF
              </a>
              ,{" "}
              <Link href="http://www.google.com" passHref>
                <a className="underline" target="_blank">
                  Online
                </a>
              </Link>
            </p>
            <div className="flex items-center space-x-2 pt-1">
              {/* LinkedIn */}
              <Link href="/notes">
                <a title="Notes" className="duration-200 hover:text-zinc-400 dark:hover:text-zinc-300">
                  <icons.PhLinkedinLogoBold className="h-6" />
                </a>
              </Link>
              {/* GitHub */}
              <Link href="/notes">
                <a title="Notes" className="duration-200 hover:text-zinc-400 dark:hover:text-zinc-300">
                  <icons.UilGithubAlt className="h-6" />
                </a>
              </Link>
              {/* Email */}
              <Link href="/notes">
                <a title="Notes" className="duration-200 hover:text-zinc-400 dark:hover:text-zinc-300">
                  <icons.UilEnvelopeAlt className="h-6" />
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default People;
