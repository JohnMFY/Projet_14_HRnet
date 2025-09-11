import React from "react";
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route} from "react-router-dom";
import store from './store/store.js'
import { Provider } from 'react-redux'

/** STYLE **/
  import './main.scss'

/** PAGES **/
  import Home from "./pages/Home.jsx";
  import Employees from "./pages/Employees.jsx";

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/employees" element={<Employees />} />
      </Routes>
    </BrowserRouter>
  </Provider>
</React.StrictMode>,
)