import Navbar from "./NavBar";
import Footer from "./Footer";

export default function Layout({ children }: { children: any }) {
  return (
    <div className="min-h-screen w-full dark:bg-black bg-zinc-100 text-zinc-800 dark:text-zinc-300 flex flex-col justify-between">
      <div>
        <Navbar />
        <main>{children}</main>
      </div>
      <Footer />
    </div>
  );
}
