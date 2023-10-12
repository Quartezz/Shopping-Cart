import GenreList from "./components/GenreList";
import Header from "./sections/Header";
import Home from "./sections/Home";
import Trending from "./sections/Trending";
import Trust from "./sections/Trust";
import Reviews from "./sections/Reviews";
import Footer from "./sections/Footer";
import Games from "./sections/Games";
import { useEffect, useState } from "react";
import Api from "./api/Api";

const App = () => {
  const [allGameList, setAllGameList] = useState([]);
  const [gameListByGenres, setGameListByGenres] = useState([]);
  const [selectedGenresName, setSelectedGenresName] = useState("Action");

  useEffect(() => {
    getAllGamesList();
    getGameListByGenresId(4);
  }, []);

  const getAllGamesList = () => {
    Api.getAllGames.then((resp) => {
      setAllGameList(resp.data.results);
    });
  };

  const getGameListByGenresId = (id) => {
    Api.getGameListByGenreId(id).then((resp) => {
      console.log(resp.data.results);
      setGameListByGenres(resp.data.results);
    });
  };
  return (
    <>
      <Header />
      <Home />
      <Trending gameList={allGameList} />
      <GenreList
        genereId={(genereId) => getGameListByGenresId(genereId)}
        selectedGenresName={(name) => setSelectedGenresName(name)}
      />
      <Trust />
      <Games
        gameList={gameListByGenres}
        selectedGenresName={selectedGenresName}
      />
      <Reviews />
      <Footer />
    </>
  );
};

export default App;
