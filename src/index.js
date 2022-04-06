// ====Libraries================================
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// ====Styles====================================
import "./index.css";

// ====Components================================

import App from "./components/App";
import Page1 from "./components/TestUseParams/Page1";
import Page2 from "./components/TestUseParams/Page2";

// ====Assets===================================
// ====Code=====================================

ReactDOM.render(
  <BrowserRouter>
      <App />
  </BrowserRouter>,
  document.getElementById("root")
);

//==========My tests =============

/** form + table
 * <BrowserRouter>
 *      <App/>
 * </BrowserRouter>
 *
 *
 */

/** test use params
 * <Routes>
      <Route path="/" element={<Page1/>}/>
      <Route path="/page2/:par1/:par2" element={<Page2/>}/>
    </Routes>
 * 
 */
