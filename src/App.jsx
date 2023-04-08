import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home/Home";
import Schedule from "./pages/Schedule/Schedule";
import Events from "./pages/Events/Events";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/schedule",
      element: <Schedule />,
    },
    {
      path: "/events",
      element: <Events />,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
