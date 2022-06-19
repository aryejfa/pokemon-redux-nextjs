import Head from "next/head";
import Footer from "../footer/Footer";
import Header from "../header/Header";
export default function Layout({ children, pageTitle }) {
  return (
    <>
      <Head>
        <title>Pokemon API | {pageTitle}</title>
        <meta
          name="Pokemon API, ReactJS, NextJs, Tailwind, Redux"
          content={`Pokemon API | ${pageTitle}`}
        ></meta>
        <link rel="icon" href="/pokemon.ico" />
      </Head>
      <Header />
      {children}
      <Footer />
    </>
  );
}
