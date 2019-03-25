import React from "react";
import "./Search.css";

const Search = () => {
  return (
    <div className="searchBar">
      <section className="navFlex">
        <p>
          {" "}
          <i className="fa fa-instagram" />
        </p>
        <p>
          <i className="fa fa-arrows-v" />
        </p>
        <h3 id="header">Instagram</h3>
      </section>
      <section>
        <input type="text" placeholder="Search.." />
      </section>
      <section className="navFlex flex2">
        <p>
          <i className="fa fa-universal-access" />
        </p>
        <p>
          <i className="fa fa-heart-o" />
        </p>
        <p>
          <i className="fa fa-user-o" />
        </p>
      </section>
    </div>
  );
};

export default Search;
