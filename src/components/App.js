import React, { useState } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [listings, setListings] = useState([]);
  const [search, setSearch] = useState("");

  const displayedListings = listings.filter((listing) => listing.description.toLowerCae().includes(search.toLowerCase())
  );


  return (
    <div className="app">
      <Header onSearch={setSearch}/>
      <ListingsContainer listings={displayedListings}/>
    </div>
  );
}

export default App;