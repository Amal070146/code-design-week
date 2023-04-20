import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home/Home";
import Schedule from "./pages/Schedule/Schedule";
import Events from "./pages/Events/Events";
import Designathon from './pages/designathon/Designathons'
import About from './pages/aboutus/About'
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
    {
      path: "/designathon",
      element: <Designathon />,
    },
    {
      path: "/aboutus",
      element: <About />,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
