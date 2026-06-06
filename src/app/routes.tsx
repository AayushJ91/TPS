import { createBrowserRouter } from "react-router";
import Root from "./Root";
import Home from "./pages/Home";
import Thesis from "./pages/Thesis";
import Architecture from "./pages/Architecture";
import Applications from "./pages/Applications";
import ValueCreation from "./pages/ValueCreation";
import TPS from "./pages/TPS";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "thesis", Component: Thesis },
      { path: "architecture", Component: Architecture },
      { path: "applications", Component: Applications },
      { path: "value-creation", Component: ValueCreation },
      { path: "tps", Component: TPS },
    ],
  },
]);
