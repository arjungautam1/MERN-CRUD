import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import User from "./components /getuser/User";
import Add from "./components /adduser/Add";

function App() {
  const route = createBrowserRouter([
    {
      path: "/",
      element: <User />,
    },
    {
      path: "/add",
      element: <Add />,
    },
    {
      path: "/edit",
      element: "Update User Page",
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={route}></RouterProvider>
    </div>
  );
}

export default App;
