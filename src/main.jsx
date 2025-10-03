import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import ProductContextProvider from "./context/products-context.jsx";
// React Router
import { BrowserRouter } from "react-router-dom";

// Reducers

ReactDOM.createRoot(document.getElementById("root")).render(
  <ProductContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ProductContextProvider>
);
