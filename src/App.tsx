import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { FC } from "react";
import Main from "./pages/Main";
const withLayout = (Component: FC): JSX.Element => {
  return (
    <>
      <Component />
    </>
  );
};
const router = createBrowserRouter([
  {
    path: "/",
    element: withLayout(Main),
  },
]);
const App: React.FC = () => {
  return <RouterProvider router={router} />;
};

export default App;
