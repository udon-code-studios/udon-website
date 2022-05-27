import Navbar from "./NavBar";
import Footer from "./Footer";

export default function Layout({ children }: { children: any }) {
  return (
    <div className="flex min-h-screen w-full flex-col justify-between bg-bg text-primary dark:bg-bg-dark dark:text-primary-dark">
      <div>
        <Navbar />
        <main>{children}</main>
      </div>
      <Footer />
    </div>
  );
}
