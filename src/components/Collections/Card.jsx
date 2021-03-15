import React from 'react';

const Card = ({ data }) => {
  return (
    <div className="card">
      {data.sale && <span className="sale">SALE</span>}
      <img src={data.image} className="card-img-top" alt="..."></img>
      <div className="card-body">
        <h4 className="card-title">{data.title}</h4>
        {data.offerPrice ? (
          <p className="price">
            <span>₹{data.price}</span> ₹{data.offerPrice}
          </p>
        ) : (
          <p className="price">₹{data.price}</p>
        )}
        <p className="card-text">{data.description}</p>
      </div>
    </div>
  );
};

export default Card;
