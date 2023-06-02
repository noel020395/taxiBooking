import React from "react";
import CurtainMenu from "./components/CurtainMenu";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ServicePage from "./pages/ServicePage";
import ContactPage from "./pages/ContactPage";
import BookPage from "./pages/BookPage";
import Footer from "./components/Footer";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/about",
    element: <AboutPage />,
  },
  {
    path: "/service",
    element: <ServicePage />,
  },
  {
    path: "/contact",
    element: <ContactPage />,
  },
  {
    path: "/book",
    element: <BookPage />,
  },
]);

function App() {
  return (
    <div
      // style={{
      //   backgroundColor: "black",
      // }}
    >
      <CurtainMenu />
      <RouterProvider router={router} />
      <Footer />
    </div>
  );
}

export default App;
