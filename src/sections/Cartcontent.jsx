import { useCart } from "../components/CartContext";

const Cartcontent = () => {
  const { cart } = useCart();

  const calculateTotalCost = () => {
    let total = 0;
    cart.forEach((game) => {
      total += game.cost;
    });
    return total;
  };
  return (
    <div className="sm:px-40 text-slate-100 bg-color w-full h-full px-10">
      <a className="flex items-end justify-start gap-2">
        <h2 className="text-3xl">Cart</h2>
        <i className="fa-solid fa-chevron-right text-2xl"></i>
      </a>
      <div className="flex flex-wrap w-full relative m-4 justify-center items-center flex-1">
        {cart.map((game) => (
          <div className="m-4 z-1 min-w-0 sm:flex sm:flex-col flex items-center gap-2 relative">
            <img
              src={game.background_image}
              className="w-full h-full object-fill rounded-lg sm:h-[200px] sm:w-[400px] "
              alt={`${game.name} game card`}
            />
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
