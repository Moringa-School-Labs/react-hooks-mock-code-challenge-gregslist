import React, {useEffect, useState } from "react";
import ListingCard from "./ListingCard";

function ListingsContainer() {
  const [ listings, setListings] = useState([]);

  useEffect(() => { 
    fetch("http://localhost:6001/listings")
    .then(res => res.json())
    .then(listing => setListings(listing))
  },[])

  function handleOnDelete(deletedItem){
    const remainingListings = listings.filter(listings.id !== deletedItem);
    setListings(remainingListings);
  }

  return (
    <main>
      <ul className="cards">
        {listings.map((listing) => (
          <ListingCard 
          key={listing.id}
          listing={listing}
          onHandleDelete={handleOnDelete}
          />
        ))}
      </ul>
    </main>
  );
}

export default ListingsContainer;
