import { createBrowserRouter } from "react-router-dom";
import App from "./App";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/play",
    element: <div>Play page</div>,
  },
  {
    path: "/results",
    element: <div>Results page</div>,
  },
]);