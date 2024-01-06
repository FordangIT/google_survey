import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./pages/Main";
import Preview from "./pages/Preview";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
const withLayout = (Component: React.FC): JSX.Element => {
  return (
    <DndProvider backend={HTML5Backend}>
      <Component />
    </DndProvider>
  );
};
const router = createBrowserRouter([
  {
    path: "/",
    element: withLayout(Main),
  },
  {
    path: "/preview",
    element: withLayout(Preview),
  },
]);
const App: React.FC = () => {
  return <RouterProvider router={router} />;
};

export default App;
