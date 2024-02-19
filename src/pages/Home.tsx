import { About, Experiences, Header, Hobbies, Navbar } from "../templates/Home";

function Home() {
  return (
    <>
      <Navbar />
      <Header />
      <About />
      <Experiences />
      <Hobbies />
    </>
  );
}

export { Home };
