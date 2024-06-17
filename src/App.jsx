import { createBrowserRouter, RouterProvider } from "react-router-dom";
import DrivePage from "./Pages/DrivePage"
import HomePage from "./Pages/HomePage"
import { Provider } from "react-redux";
import appStore from "./store/AppStore";

function App() {

  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "/drive",
      element: <DrivePage />,
    },
  ]);

  return (
    <Provider store={appStore}>
    <RouterProvider router={appRouter} />
    </Provider>
  )
}

export default App
