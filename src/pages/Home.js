import Head from "next/head";
import Blog from "./components/blog";
import Contact from "./components/contact";
import Copyright from "./components/copyright";
import Hero from "./components/hero";
import Navbar from "./components/navbar";
import Prices from "./components/price";
import Services from "./components/services";

export default function Home() {
  return (
    <>
      <Head>
        <title>KingAqua Academy</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Navbar/>
        <Hero/>
        <Services/>
        <Blog/>
        <Prices/>
        <Contact/>
      </main>
      <footer className="bg-white text-center text-lg font-semibold py-5">
        <Copyright/>
      </footer>
    </>
  );
}
