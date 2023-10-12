import GenreList from "./components/GenreList";
import Header from "./sections/Header";
import Home from "./sections/Home";
import Trending from "./sections/Trending";
import Trust from "./sections/Trust";
import Reviews from "./sections/Reviews";
import Footer from "./sections/Footer";

const App = () => {
  return (
    <>
      <Header />
      <Home />
      <GenreList />
      <Trust />
      <Trending />
      <Reviews />
      <Footer />
    </>
  );
};

export default App;
