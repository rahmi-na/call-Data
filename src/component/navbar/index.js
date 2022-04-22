import React from "react";

const Navbar = ({ menu }) => {
  return (
    <div className="mb-3 mt-3 text-center">
      <div className="col-md-11 col-12">
        <div className="w-100 d-flex justify-content-center pt-4 pb-4 p-2">
          <a
            href="/"
            className="w-100 d-flex justify-content-start align-items-center text-white text-decoration-none"
          >
            <img
              src="https://www.freepnglogos.com/uploads/spotify-logo-png/spotify-simple-green-logo-icon-24.png"
              className="logo-spotify"
              alt="logo"
            />
            <h3 className="fw-bold px-2">Spotify</h3>
          </a>
          {menu}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
