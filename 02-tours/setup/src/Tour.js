import React, { useState } from "react";

const Tour = ({ id, name, info, image, price, removeTour }) => {
  const [readMore, setReadmore] = useState(false);

  return (
    <article className="single-tour">
      <img src={image} alt={name} />
      <footer>
        <div className="tour-info">
          <h4>{name}</h4>
          <h4 className="tour-price">${price}</h4>
        </div>
        <p>{readMore ? info : `${info.substring(0, 200)}...`}</p>
        <button onClick={() => setReadmore(!readMore)}>
          {readMore ? "Show less" : "Read more"}
        </button>
        <button className="delete-btn" onClick={() => removeTour(id)}>
          Not Interest
        </button>
      </footer>
    </article>
  );
};

export default Tour;
