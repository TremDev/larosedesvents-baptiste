import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Contact, Galerie, Home, Showroom } from "./Pages";
import { createBrowserRouter, redirect, RouterProvider } from "react-router-dom";
import App from "./App";

const links = [
  {
    pageName: "home",
    title: "Home",
    renderPage: <Home />,
  },
  {
    pageName: "showroom",
    title: "Showroom",
    renderPage: <Showroom />,
  },
  {
    pageName: "galerie",
    title: "Galerie",
    renderPage: <Galerie />,
  },
  {
    pageName: "contact",
    title: "Contact",
    renderPage: <Contact />,
  },
];

const router = createBrowserRouter([
  {
    path: "/",
    loader: () => redirect('/home'),
  },
  {
    path: "/:pageName",
    element: (
      <App links={links.map((o) => ({ ...o, render: o?.renderPage }))} />
    ),
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
