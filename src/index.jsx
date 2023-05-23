import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Pages/Home/Home';
import Housing from './Pages/Housing/Housing';
import About from './Pages/About/About';
import Error404 from './Pages/Error404/Error404';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';

const routes = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/logement/:housingId',
    element: <Housing />
  },
  {
    path: '/a-propos',
    element: <About />
  },
  {
    path: '*',
    element: <Error404 />
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <header>
      <Header />
    </header>
    <main>
      <RouterProvider router={routes} />
    </main>
    <footer>
      <Footer />
    </footer>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();