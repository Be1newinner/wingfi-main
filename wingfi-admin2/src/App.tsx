import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./infrastructure/Root";
import { Provider } from "react-redux";
import { store } from "./redux/store";

const router = createBrowserRouter([{ path: "*", element: <Root /> }]);

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
