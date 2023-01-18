import { createBrowserRouter, RouterProvider } from "react-router-dom";
import DefaultRedux from "./pages/defaultRedux/DefaultRedux";
import { ReactRedux } from "./pages/reactRedux/reactRedux";

const router = createBrowserRouter([
  {
    path: "/",
    element: <DefaultRedux />,
    errorElement: <h1>Page not found</h1>,
  },
  {
    path: "/redux",
    element: <ReactRedux />,
    errorElement: <h1>Page not found</h1>,
  },
]);

const AppRouterProvider = () => {
  return <RouterProvider router={router} />;
};

export { AppRouterProvider };
