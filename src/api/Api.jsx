import axios from "axios";
const APIKEY = "c2d6a2375c1c40d09c3dbab74d2a132f";

const axiosCreate = axios.create({
  baseURL: "https://api.rawg.io/api",
});

const getGenreList = axiosCreate.get(`/genres?key=${APIKEY}`);
const getGamesList = axiosCreate.get(`/games?key=${APIKEY}`);
export default {
  getGenreList,
  getGamesList,
};
