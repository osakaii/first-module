import data from "../config.json" assert { type: "json" };

const innerTagsContent = (tagArray, content, dollar = '') => {
  tagArray.forEach((priceTag, index) => {
    priceTag.textContent = dollar + data.plans[index][content];
  });
};

export const innerPrice = () => {
  const priceTags = document.querySelectorAll(".price-item__price");
  const tarifTags = document.querySelectorAll(".price-item__tarif");

  innerTagsContent(priceTags, 'price', "$");
  innerTagsContent(tarifTags, 'name')
};
