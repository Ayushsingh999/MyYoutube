import React from "react";

const Videocard = (props) => {
  return (
    <div className="p-2 m-2 w-60 shadow-lg">
      <img
        className="rounded-lg"
        alt="thumbnail"
        src={props.info?.snippet?.thumbnails?.medium.url}
      />
      <ul>
        <li className="font-bold py-2">{props.info?.snippet?.title}</li>
        <li>{props.info?.snippet?.channelTitle}</li>
        <li>{props.info?.statistics?.viewCount} views</li>
      </ul>
    </div>
  );
};
//Higher order  component....
export const AdVideoCard = (props) => {
  return (
    <div className="p-1 m-1  border border-red-900">
      <Videocard info={props.info} />;
    </div>
  );
};
export default Videocard;
