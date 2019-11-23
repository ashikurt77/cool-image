import React from "react";
import ImageItem from "../image-item/ImageItem.component";

const ImageArea = ({ imageList }) => {
  return (
    <div className="row">
      {imageList.map(({ urls, alt_description, user, height, id }) => (
        <ImageItem
          url={urls.regular}
          altTag={alt_description}
          creator={user.name}
          imageHeight={height}
          key={id}
        />
      ))}
    </div>
  );
};

export default ImageArea;
