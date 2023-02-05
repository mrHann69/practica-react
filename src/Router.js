import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import './App.css';
import HiderApp from './hiderProject/hiderApp';
import Root from "./root";


const routes = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>
  },
  {
    path:"/hider",
    element: <HiderApp></HiderApp>
  },
  {
    path:"/hider",
    element: <HiderApp></HiderApp>
  }
]);

function Router() {
  return (
    <div className="App">
      <header className="App-header">
      <RouterProvider router={routes} /> 
      </header>
    </div>
  );
}

export default Router;
