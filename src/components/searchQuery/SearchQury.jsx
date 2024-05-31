import React from "react";

const SearchQury = () => {
  return (
    <section className="searchQury">
      <div className="container">
        <form>
          <input
            type="text"
            name="text"
            id="text"
            placeholder="Search query..."
          />
          <button type="button">Search</button>
        </form>
      </div>
    </section>
  );
};

export default SearchQury;
