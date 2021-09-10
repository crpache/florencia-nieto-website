import React from "react";

const Iframe = ({src}) => (
  <iframe
    width="300"
    height="200"
    src={src}
    title="YouTube video player"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen
  ></iframe>
);

export default Iframe;
