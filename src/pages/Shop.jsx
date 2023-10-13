import Home from "../sections/Home";
import Trending from "../sections/Trending";
import Trust from "../sections/Trust";
import Reviews from "../sections/Reviews";
import Footer from "../sections/Footer";
import Games from "../sections/Games";
import GenreList from "../components/GenreList";
import Headershop from "../sections/Header-shop.jsx";
import { useEffect, useState } from "react";
import Api from "../api/Api";
import { useCart } from "../components/CartContext";

const Shop = () => {
  const [allGameList, setAllGameList] = useState([]);
  const [gameListByGenres, setGameListByGenres] = useState([]);
  const [selectedGenresName, setSelectedGenresName] = useState("Action");
  const { addToCart } = useCart();

  useEffect(() => {
    getAllGamesList();
    getGameListByGenresId(4);
  }, []);

  const generateRandomCost = (response) => {
    const minCost = 10;
    const maxCost = 50;
    const gameData = response.data.results;
    const gameDataWithCost = gameData.map((game) => ({
      ...game,
      cost: Math.floor(Math.random() * (maxCost - minCost + 1)) + minCost,
    }));
    return gameDataWithCost;
  };

  const getAllGamesList = () => {
    Api.getAllGames.then((resp) => {
      setAllGameList(generateRandomCost(resp));
    });
  };

  const getGameListByGenresId = (id) => {
    Api.getGameListByGenreId(id).then((resp) => {
      setGameListByGenres(generateRandomCost(resp));
    });
  };

  return (
    <div className="Shop">
      <Headershop />
      <Home />
      <Trending gameList={allGameList} addToCart={addToCart} />
      <GenreList
        genereId={(genereId) => getGameListByGenresId(genereId)}
        selectedGenresName={(name) => setSelectedGenresName(name)}
      />
      <Trust />
      <Games
        gameList={gameListByGenres}
        selectedGenresName={selectedGenresName}
        addToCart={addToCart}
      />
      <Reviews />
      <Footer />
    </div>
  );
};

export default Shop;
