import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./pages/Main";
const withLayout = (Component: React.FC): JSX.Element => {
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
