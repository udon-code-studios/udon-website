import Link from "next/link";
import * as icons from "../components/icons";

function NavBar(): JSX.Element {
  return (
    <div className="w-full flex justify-center text-zinc-600 dark:text-zinc-400 ">
      <div className="mt-16 flex w-2/3 items-center justify-center space-x-3 border-t py-10 border-zinc-600 dark:border-zinc-400">
        <Link href="https://twitter.com/subpar_program" passHref>
          <a className="hover:text-zinc-300 duration-200" target="_blank">
            <icons.UilTwitterAlt className="h-6" />
          </a>
        </Link>
        <Link href="https://github.com/subparprogramming" passHref>
          <a className="hover:text-zinc-300 duration-200" target="_blank">
            <icons.UilGithubAlt className="h-6" />
          </a>
        </Link>
        <Link href="mailto:leo.battalora@gmail.com" passHref>
          <a className="hover:text-zinc-300 duration-200">
            <icons.UilEnvelopeAlt className="h-6" />
          </a>
        </Link>
      </div>
    </div>
  );
}

export default NavBar;
