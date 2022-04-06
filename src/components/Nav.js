import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";

export default function Nav() {
  const [currentPage ,setCurrentPage] = React.useState(1);
  return (
    <nav className="nav nav-tabs justify-content-center">
      <Link to={"/"} className={`nav-link ${currentPage === 1 ? "active":""}`} onClick={()=>{setCurrentPage(1)}}>
        Form
      </Link>
      <Link to={"/users"} className={`nav-link ${currentPage === 2 ? "active":""}`} onClick={()=>{setCurrentPage(2)}}>
        Users Table
      </Link>
    </nav>
  );
}
