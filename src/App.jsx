import GenreList from "./components/GenreList";
import Header from "./sections/Header";
import Home from "./sections/Home";
import Trending from "./sections/Trending";
import Trust from "./sections/Trust";

const App = () => {
  return (
    <>
      <Header />
      <Home />
      <GenreList />
      <Trust />
      <Trending />
    </>
  );
};

export default App;
