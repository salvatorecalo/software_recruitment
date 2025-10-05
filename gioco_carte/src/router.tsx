import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import { PlayTime } from "./pages";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/play",
    element: <PlayTime />,
  },
  {
    path: "/results",
    element: <div>Results page</div>,
  },
]);