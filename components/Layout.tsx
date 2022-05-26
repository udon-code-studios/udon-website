import Navbar from "./NavBar";
import Footer from "./Footer";

export default function Layout({ children }: { children: any }) {
  return (
    <div className="flex min-h-screen w-full flex-col justify-between bg-zinc-100 text-zinc-800 dark:bg-black dark:text-zinc-100">
      <div>
        <Navbar />
        <main>{children}</main>
      </div>
      <Footer />
    </div>
  );
}
