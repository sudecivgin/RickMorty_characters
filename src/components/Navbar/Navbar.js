import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg ">
      <div className="container">
         <h1 className="fs-3 ubuntu bold navbar-brand">
        Rick & Morty <span className="text-primary">Universe</span>
      </h1>

        <a className="navbar-brand" href="#"></a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a className="nav-link active" aria-current="page" href="#">Home</a>
            <a className="nav-link" href="#">Features</a>
            <a className="nav-link" href="#">Pricing</a>
            <a className="nav-link disabled" aria-disabled="true">Disabled</a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;