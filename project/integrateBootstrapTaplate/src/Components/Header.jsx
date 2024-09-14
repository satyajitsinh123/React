import React from "react";

function Header() {
  return (
    <>
      <div className="container-flude">
        <nav className="navbar text-bg-danger ">
          <h2 className="p px-5">Logo</h2>
          <ul className="main d-flex gap-5 m-auto list-unstyled">
            <li className="">All</li>
            <li>Man</li>
            <li>Woman</li>
            <li>Walery</li>
            <li>Electronics</li>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default Header;
