import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
// 1 - configurando o router
import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";

// 2 - configurando a página de erros
import ErrorPage from "./routes/ErrorPage";
import Home from "./routes/Home";
// 7 - rota dinâmica
import Product from "./routes/Product";
// 8 - rotas aninhadas
import Info from "./routes/Info";
// 9 - pesquisa
import Search from "./routes/Search";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    // 3 - Componente base
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      // 7 - rota dinâmica
      {
        path: "product/:id",
        element: <Product />,
      },
      // 8 - rotas aninhadas
      {
        path: "product/:id/info",
        element: <Info />
      },
      // 9 - pesquisa
      {
        path: "search",
        element: <Search />,
      },
      // 10 - redirecionamento
      {
        path: "teste",
        element: <Navigate to="/" />
      }
    ],
  },
  // {
  //   path: "contact",
  //   element: <Contact />
  // }
])

import "./index.css";
import Contact from "./routes/Contact";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
