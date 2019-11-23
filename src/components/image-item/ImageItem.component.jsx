import React from "react";
import "./ImageItem.styles.scss";

const ImageItem = ({ url, altTag, creator, imageHeight }) => {
  return (
    <div className="col-sm-4 col-xs-12">
      <figure className="img-container">
        <img src={url} alt={altTag} by={creator} ucchota={imageHeight} />
      </figure>
    </div>
  );
};

export default ImageItem;
