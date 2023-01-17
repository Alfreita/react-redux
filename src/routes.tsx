import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import DefaultRedux from "./pages/defaultRedux/DefaultRedux";
const Teste = () => {
  return <>ola</>;
};
const Teste2 = () => {
  return <>ola</>;
};

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<DefaultRedux />}>
      <Route path="hello" element={<Teste />} />
      <Route path="hello2" element={<Teste2 />} />
    </Route>
  )
);

const AppRouterProvider = () => {
  return <RouterProvider router={router} />;
};

export { AppRouterProvider };
