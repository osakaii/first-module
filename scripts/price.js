import data from "../config.json" assert { type: "json" };

export const innerPrice = () => {
  const priceTags = document.querySelectorAll(".price-item__price");

  priceTags.forEach((priceTag, index) => {
    priceTag.textContent = `$${data.plans[index].price}`
  });
};
