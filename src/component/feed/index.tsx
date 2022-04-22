import React, { useState } from "react";

const FeedComponents = ({ title, images, artists, album, toggleSelect }) => {
  const [isSelected, setIsSelected] = useState(false);

  const handleToggleSelect = () => {
    setIsSelected(!isSelected);
    toggleSelect();
  };
  return (
    <div>
      <div className="w-100 d-flex justify-content-center mt-5">
        <div className="spotify-card card col-md-4 col-12 text-center">
          <div className="p-5 col">
            <div className="w-100 d-flex justify-content-center">
              <div>
                <div className="text-center">
                  <h4 className="spotify-card-title-h3">
                    <b>{title}</b>
                  </h4>
                  <div className="spotify-card-image-container">
                    <img
                      className="gambar py-4"
                      src={images}
                      alt=""
                      width="100%"
                    />
                  </div>
                  <h6 className="card-genre-header">Artist : {artists}</h6>
                  <h6>Album : {album}</h6>

                  <button
                    className="btn btn-success mt-3 shadow p-2 col-12 col-sm-3  "
                    onClick={handleToggleSelect}
                  >
                    <span>{isSelected}</span>
                    {isSelected ? "Deselect" : "Select"}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedComponents;
