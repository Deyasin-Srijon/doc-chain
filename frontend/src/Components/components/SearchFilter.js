import React, { useState } from "react";

export default function SearchFilter() {
  const [query, setQuery] = useState("");

  return (
    <div className="card">
      <input type="text" placeholder="Search doctors..." onChange={(e) => setQuery(e.target.value)} />
      <p>Showing results for: {query}</p>
    </div>
  );
}
