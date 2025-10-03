import { createContext, useState } from "react";

const products = [
  {
    id: "p1",
    title: "Red Scarf",
    description: "A pretty red scarf.",
    isFavorite: false,
  },
  {
    id: "p2",
    title: "Blue T-Shirt",
    description: "A pretty blue t-shirt.",
    isFavorite: false,
  },
  {
    id: "p3",
    title: "Green Trousers",
    description: "A pair of lightly green trousers.",
    isFavorite: false,
  },
  {
    id: "p4",
    title: "Orange Hat",
    description: "Street style! An orange hat.",
    isFavorite: false,
  },
];

export const ProductsContext = createContext({
  products: [],
  toggleFav: (id) => {},
});

const ProductContextProvider = ({ children }) => {
  const [productsList, setProductsList] = useState(products);

  const toggleFavourite = (productId) => {
    setProductsList((currentProductsList) => {
      const prodIndex = currentProductsList.findIndex(
        (p) => p.id === productId
      );
      const newFavStatus = !currentProductsList[prodIndex].isFavorite;
      const updatedProducts = [...currentProductsList];
      updatedProducts[prodIndex] = {
        ...currentProductsList[prodIndex],
        isFavorite: newFavStatus,
      };
      return updatedProducts;
    });
  };

  const productsContext = {
    products: productsList,
    toggleFav: toggleFavourite,
  };

  return (
    <ProductsContext.Provider value={productsContext}>
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductContextProvider;
