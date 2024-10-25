import React, { useState } from "react";

const RealEstateListing = () => {
  const [favouriteMessage, setFavouriteMessage] = useState("");

  const handleAddToFavourites = () => {
    setFavouriteMessage("Property added to favourites!");
  };

  return (
    <div>
      <h1>Real Estate Listing</h1>
      <h2>Available Properties</h2>

      <table border="1" style={{ width: "100%", textAlign: "left" }}>
        <thead>
          <tr>
            <th>Property ID</th>
            <th>Address</th>
            <th>Price</th>
            <th>Type</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>123 Main St</td>
            <td>$250,000</td>
            <td>House</td>
            <td>For Sale</td>
          </tr>
          <tr>
            <td>2</td>
            <td>456 Oak Ave</td>
            <td>$1,500/month</td>
            <td>Apartment</td>
            <td>For Rent</td>
          </tr>
          <tr>
            <td>3</td>
            <td>789 Pine Rd</td>
            <td>$350,000</td>
            <td>Condo</td>
            <td>For Sale</td>
          </tr>
        </tbody>
      </table>

      <button 
        onClick={handleAddToFavourites} 
        style={{ marginTop: "20px", padding: "10px 20px" }}
      >
        Add to Favourites
      </button>

      {favouriteMessage && (
        <p style={{ color: "green", marginTop: "10px" }}>
          {favouriteMessage}
        </p>
      )}
    </div>
  );
};

export default RealEstateListing;