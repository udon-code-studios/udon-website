import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import { useSpring, useTrail, a } from "@react-spring/web";
import * as icons from "../components/icons";

function NavBar(): JSX.Element {
  const router = useRouter();
  const { pathname } = router;

  // dark mode
  const [darkMode, setDarkMode] = useState(true);
  useEffect(() => {
    // On page load or when changing themes, best to add inline in `head` to avoid FOUC
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
      setDarkMode(true);
    } else {
      document.documentElement.classList.remove("dark");
      setDarkMode(false);
    }
  }, []);

  // burger menu
  const [showMenu, setShowMenu] = useState(false);
  const Trail: React.FC<{ open: boolean; children: any }> = ({ open, children }) => {
    const items = React.Children.toArray(children);
    const trail = useTrail(items.length, {
      config: { mass: 5, tension: 2200, friction: 200 },
      opacity: open ? 1 : 0,
      x: open ? 0 : 30,
      height: open ? 50 : 50,
      from: { opacity: 0, x: 30, height: 50 },
    });
    return (
      <div>
        {trail.map(({ height, ...style }, index) => (
          <a.div key={index} style={style} className="flex justify-center">
            <a.div style={{ height }}>{items[index]}</a.div>
          </a.div>
        ))}
      </div>
    );
  };

  return (
    <div className="flex w-full justify-center">
      <div className="flex w-full max-w-screen-lg items-center justify-between py-4 px-8">
        <Link href="/" passHref>
          <a>
            {/* logo */}
            <div className="flex w-min flex-col items-center space-y-1" onClick={() => setShowMenu(false)}>
              <h1 className="font-new-tegomin text-5xl">udon_</h1>
              <p className="font-new-tegomin text-xl tracking-wider">code studios</p>
            </div>
          </a>
        </Link>

        {/* navigation */}
        <div className="flex items-center text-lg font-medium">
          {/* mobile */}
          <div className="flex items-center text-3xl text-zinc-600 dark:text-zinc-400 sm:hidden">
            {/* menu button */}
            <button title="People" onClick={() => setShowMenu(!showMenu)} className="translate-y-1">
              {showMenu ? <icons.PhXBold className="h-8" /> : <icons.PhListBold className="h-8" />}
            </button>
            {/* menu contents */}
            <div
              className="fixed bottom-0 top-0 left-0 right-0 z-10 mt-24 bg-zinc-100 py-10 dark:bg-black"
              style={showMenu ? { opacity: 1 } : { opacity: 0 }}
            >
              <Trail open={showMenu}>
                <Link href="/projects" passHref>
                  <a className="" onClick={() => setShowMenu(!showMenu)}>
                    projects
                  </a>
                </Link>
                <Link href="/blog" passHref>
                  <a className="" onClick={() => setShowMenu(!showMenu)}>
                    blog
                  </a>
                </Link>
                <Link href="/notes" passHref>
                  <a className="" onClick={() => setShowMenu(!showMenu)}>
                    notes
                  </a>
                </Link>
                <Link href="/people" passHref>
                  <a className="" onClick={() => setShowMenu(!showMenu)}>
                    people
                  </a>
                </Link>
                <button
                  title="Toggle Dark Mode"
                  className="pt-4 duration-200 hover:text-zinc-300"
                  onClick={() => {
                    setShowMenu(!showMenu);
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
              </Trail>
            </div>
          </div>

          {/* desktop */}
          <div className="hidden items-center space-x-5 text-zinc-600 dark:text-zinc-400 sm:flex">
            <Link href="/projects" passHref>
              <a
                className={
                  pathname === "/projects"
                    ? "text-zinc-400 dark:text-zinc-300"
                    : "duration-200 hover:text-zinc-400 dark:hover:text-zinc-300"
                }
              >
                projects
              </a>
            </Link>
            <Link href="/blog">
              <a
                className={
                  pathname === "/blog"
                    ? "text-zinc-400 dark:text-zinc-300"
                    : "duration-200 hover:text-zinc-400 dark:hover:text-zinc-300"
                }
              >
                blog
              </a>
            </Link>
            <Link href="/notes">
              <a
                title="Notes"
                className={
                  pathname === "/notes"
                    ? "text-zinc-400 dark:text-zinc-300"
                    : "duration-200 hover:text-zinc-400 dark:hover:text-zinc-300"
                }
              >
                <icons.PhNoteBlankBold className="h-6" />
              </a>
            </Link>
            <Link href="/people">
              <a
                title="People"
                className={
                  pathname === "/people"
                    ? "text-zinc-400 dark:text-zinc-300"
                    : "duration-200 hover:text-zinc-400 dark:hover:text-zinc-300"
                }
              >
                <icons.PhUsersThreeBold className="h-6" />
              </a>
            </Link>
            <button
              title="Toggle Dark Mode"
              className="duration-200 hover:text-zinc-400 dark:hover:text-zinc-300"
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
    </div>
  );
}

export default NavBar;
