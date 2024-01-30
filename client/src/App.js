import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import User from "./components /getuser/User";
import Add from "./components /adduser/Add";
import Update from "./components /updateuser/Update";

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
      path: "/update/:id",
      element: <Update />,
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={route}></RouterProvider>
    </div>
  );
}

export default App;
