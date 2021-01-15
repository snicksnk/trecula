import { getGoods, getCartItems } from "./reducers";

function view(state, onAddToCart, onRemoveFromCart) {
  const drawGood = (good) => {
    const goodView = document.createElement("li");
    goodView.innerText = good.title;
    goodView.onclick = () => onAddToCart(good.id);
    return goodView;
  };

  const drawCartItem = (good) => {
    const goodView = document.createElement("li");
    goodView.innerText = good.title;
    goodView.onclick = () => onRemoveFromCart(good.id);
    return goodView;
  };

  const goods = getGoods(state);
  document.getElementById("goods").innerHTML = "";
  goods.map(drawGood).forEach((goodView) => {
    document.getElementById("goods").appendChild(goodView);
  });

  const cartItems = getCartItems(state);
  document.getElementById("cart").innerHTML = "";
  cartItems.map(drawCartItem).forEach((goodView) => {
    document.getElementById("cart").appendChild(goodView);
  });
}

export default view;
