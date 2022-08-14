import Categories from "./componens/Categories";
import Foods from "./componens/Foods";
import HeadlineCards from "./componens/HeadlineCards";
import Hero from "./componens/Hero";
import Navbar from "./componens/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <HeadlineCards />
      <Foods />
      <Categories />
    </>
  );
}

export default App;
