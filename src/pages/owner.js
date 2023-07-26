import Link from "next/link";
import React from "react";

const owner = () => {
  return (
    <>
      <div className="d-flex flex-column bd-highlight mb-3">
        <nav className="navbar navbar-expand-lg navbar-light bg-success p-2 text-white bg-opacity-50">
          <div className="container-fluid">
            <a className="navbar-brand text-dark" href="/">
              BAS
            </a>
            <div
              className="navbar-collapse position-absolute top-50 start-50 translate-middle"
              id="navbarSupportedContent"
            >
              <div className="nav-item text-light fs-3 fw-bold">
                BookShop Automation Software
              </div>
            </div>
            <a className="navbar-brand text-light" href="/">
              <button type="button" className="btn btn-secondary btn-lg">
                Log Out
              </button>
            </a>
          </div>
        </nav>
        <nav className="c d-flex p-2 bd-highlight .bg-light grow-1">
          <div className="d-flex flex-column gap-2 col-5 mx-auto">
            <Link href="/getstatistics" className="btn btn-primary ">
              <button className="btn btn-primary" type="button">
                Sale Statistics
              </button>
            </Link>
            {/* <a href="/" className="btn btn-primary "> */}
              <button className="btn btn-primary" type="button">
                Print below threshold books
              </button>
            {/* </a> */}
          </div>
        </nav>
      </div>
    </>
  );
};

export default owner;
