import GenreList from "./components/GenreList";
import Header from "./sections/Header";
import Home from "./sections/Home";
import Trending from "./sections/Trending";

const App = () => {
  return (
    <>
      <Header />
      <Home />
      <GenreList />
      <Trending />
    </>
  );
};

export default App;
