import Link from "next/link";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import * as icons from "../components/icons";

function NavBar(): JSX.Element {
  const router = useRouter();
  const { pathname } = router;

  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    // On page load or when changing themes, best to add inline in `head` to avoid FOUC
    if (localStorage.theme === "dark" || (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
      document.documentElement.classList.add("dark");
      setDarkMode(true);
    } else {
      document.documentElement.classList.remove("dark");
      setDarkMode(false);
    }
  }, []);

  return (
    <div className="w-full flex justify-center">
      <div className="max-w-screen-lg flex justify-between items-center w-full py-4 px-8">
        <Link href="/" passHref>
          <a>
            {/* logo */}
            <div className="flex space-y-1 flex-col items-center w-min">
              <h1 className="font-new-tegomin text-5xl">udon_</h1>
              <p className="font-new-tegomin text-xl tracking-wide">code studios</p>
            </div>
          </a>
        </Link>

        {/* navigation links */}
        <div className="flex space-x-5 text-lg font-medium text-zinc-600 dark:text-zinc-400 items-center">
          <Link href="/projects" passHref>
            <a className={pathname === "/projects" ? "text-zinc-300" : "hover:text-zinc-300 duration-200"}>projects</a>
          </Link>
          <Link href="/blog">
            <a className={pathname === "/blog" ? "text-zinc-300" : "hover:text-zinc-300 duration-200"}>blog</a>
          </Link>
          <Link href="/notes">
            <a title="Notes" className={pathname === "/notes" ? "text-zinc-300" : "hover:text-zinc-300 duration-200"}>
              <icons.PhNoteBlankBold className="h-6" />
            </a>
          </Link>
          <Link href="/people">
            <a title="People" className={pathname === "/people" ? "text-zinc-300" : "hover:text-zinc-300 duration-200"}>
              <icons.PhUsersThreeBold className="h-6" />
            </a>
          </Link>
          <button
            title="Toggle Dark Mode"
            className="hover:text-zinc-300 duration-200"
            onClick={() => {
              if (document.documentElement.classList.contains("dark")) {
                document.documentElement.classList.remove("dark");
                localStorage.theme = "light";
                setDarkMode(false);
              } else {
                document.documentElement.classList.add("dark");
                localStorage.theme = "dark";
                setDarkMode(true);
              }
            }}
          >
            {darkMode ? <icons.PhMoonBold className="h-6" /> : <icons.PhSunBold className="h-6" />}
          </button>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
