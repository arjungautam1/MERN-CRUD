import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import User from "./components /getuser/User";

function App() {
  const route = createBrowserRouter([
    {
      path: "/",
      element: <User />,
    },
    {
      path: "/add",
      element: "User Add page",
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
