import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import '../App.css';
import HiderApp from '../hiderProject/hiderApp';
import MatheoApp from '../matheoProject/matheoApp';
import TodoApp from "../matheoProject/TodoApp";
import TicTacToe from "../matheoProject/TicTacToe";
import ErrorPage from "./errorPage";
import Root from "./root";


const routes = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage />,

  },
  {
    path: "/hider",
    element: <HiderApp></HiderApp>
  },
  {
    path: "/matheo",
    element: <MatheoApp></MatheoApp>
  },
  {
    path: "matheo/todolist",
    element: <TodoApp></TodoApp>
  },
  {
    path: "matheo/tictactoe",
    element: <TicTacToe></TicTacToe>
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
