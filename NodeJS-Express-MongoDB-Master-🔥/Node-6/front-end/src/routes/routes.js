import { createBrowserRouter } from "react-router-dom";
import AddProduct from "../components/AddProduct";
import Home from "../components/Home";
import Error from "../components/Error";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <Error />,
  },
  {
    path: "/addProduct",
    element: <AddProduct />,
  },
]);

export default routes;
