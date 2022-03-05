import Head from "next/head";
import Animation from "../components/Animation";
import Nav from "../components/Nav";

function HomePage() {
  return (
    <>
      <Head>
        <title>Climate App</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Work+Sans:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,400;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <Nav />
      <div className="climate-title">
        <Animation />
      </div>
    </>
  );
}

export default HomePage;
