import React, { useEffect, useState } from "react";
// import { YOUTUBE_VIDEOS_API } from "../utils/constant";

import axios from "axios";
import Videocard, { AdVideoCard } from "./Videocard";
import { Link } from "react-router-dom";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);
  const GOOGLE_API_KEY = "AIzaSyCXhr-v0UjEnT8GJGbSMz1hYhf38GBmnAc";

  // useEffect(() => {
  //   getVideos();
  // }, []);

  // const getVideos = async () => {
  //   const data = await fetch(YOUTUBE_VIDEOS_API);
  //   console.log(data);
  //   const json = await data.json();
  //   console.log("...json", json);
  // };

  useEffect(() => {
    axios
      .get(
        "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=" +
          GOOGLE_API_KEY
      )
      .then((response) => {
        console.log("...res", response);
        setVideos(response.data?.items);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div className="flex flex-wrap">
      {/* Advideocard  using for higher order function.. */}
      {videos[0] && <AdVideoCard info={videos[0]} />}
      {videos.map((video) => (
        <Link key={video.id} to={"/watch?v=" + video.id}>
          <Videocard info={video} />
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;
