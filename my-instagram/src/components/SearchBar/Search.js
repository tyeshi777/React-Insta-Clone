import React, { Component } from "react";
import "./Search.css";

const Search = () => {
  return (
    <div className="searchBar">
      <section class="navFlex">
        <p>
          {" "}
          <i class="fa fa-instagram" />
        </p>
        <p>
          <i class="fa fa-arrows-v" />
        </p>
        <p>Instagram</p>
      </section>
      <section>
        <input type="text" placeholder="Search.." />
      </section>
      <section class="navFlex">
        <p>
          <i class="fa fa-universal-access" />
        </p>
        <p>
          <i class="fa fa-heart-o" />
        </p>
        <p>
          <i class="fa fa-user-o" />
        </p>
      </section>
    </div>
  );
};

export default Search;
