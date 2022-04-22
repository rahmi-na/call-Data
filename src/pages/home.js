import React from "react";
import data from "../data/allData";
import Cover from "../component/cover";
import Menu from "../component/menu";
import Track from "../component/track/track";

function Home() {
  const api_spotify = data.album;

  console.log(api_spotify.images[0]);
  console.log(api_spotify.artists[0].name);

  return (
    <div>
      <div className="">
        <Cover
          title={data.album.name}
          artists={data.artists[0].name}
          images={data.album.images[0].url}
          uri={data.album.external_urls.spotify}
          tracks={data.album.total_tracks}
        />
        <div className=" bg-gradient-to-b from-slate-800/20 via-[#181818] to-[#181818] h-fit bg-clip-padding backdrop-filter backdrop-blur-xl  "></div>
        <Menu />
        <Track />
      </div>
    </div>
  );
}

export default Home;
