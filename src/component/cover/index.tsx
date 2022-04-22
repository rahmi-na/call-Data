import React from "react";

type Props = {
  title: string;
  artists: string;
  images: string;
  total_tracks: string;
};

const Cover = ({ title, artists, images, total_tracks }: Props) => {
  return (
    <div className="">
      <div className="">
        <div>
          <img className="" src={images} alt="Album Cover" />
        </div>
        <div>
          <h1 className="font-bold ">PLAYLIST</h1>
          <h1 className="text-2xl md:text-3xl xl:text-5xl font-bold">
            {title}
          </h1>
          <div className="flex space-x-2 text-xs lg:text-base mb-5">
            <p className="font-bold">{artists}</p>
            <span>&#8226;</span>
            <p className="font-thin">{total_tracks} songs</p>
            <span>&#8226;</span>
            <p className="font-thin">1 hr 19 min</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cover;
