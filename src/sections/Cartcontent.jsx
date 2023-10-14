import { useCart } from "../components/CartContext";

const Cartcontent = () => {
  const { cart, removeFromCart } = useCart();

  const calculateTotalCost = () => {
    let total = 0;
    cart.forEach((game) => {
      total += game.cost;
    });
    return total;
  };

  const handleRemoveFromCart = (game) => {
    removeFromCart(game);
  };
  return (
    <div className="sm:px-40 text-slate-100 bg-color w-full h-full px-10">
      <a className="flex items-end justify-start gap-2">
        <h2 className="text-3xl">Cart</h2>
        <i className="fa-solid fa-chevron-right text-2xl"></i>
      </a>
      <div className="flex flex-wrap w-full relative m-4 justify-center items-center flex-1">
        {cart.map((game) => (
          <div className="m-4 z-1 min-w-0 flex-col flex items-center gap-2 relative">
            <img
              src={game.background_image}
              className="w-full h-full object-fill rounded-lg sm:h-[200px] sm:w-[400px] "
              alt={`${game.name} game card`}
            />
            <a
              onClick={() => handleRemoveFromCart(game)}
              className="absolute bottom-8 right-0 p-2 hover-transition hover:hover-transform cursor-pointer"
            >
              <i className="fa-solid fa-minus-circle text-slate-100 text-2xl"></i>
            </a>
            <div className="w-full flex justify-between">
              <span>{game.name}</span>
              <span className="flex items-center">{game.cost} $</span>
              <span className="flex gap-1 items-center">
                <i className="fa-solid fa-star"></i>
                {game.rating}
              </span>
            </div>
          </div>
        ))}
      </div>
      <h2 className="text-3xl">Total Cost: {calculateTotalCost()} $</h2>
    </div>
  );
};

export default Cartcontent;
