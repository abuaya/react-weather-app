import React from "react";
import "./FormsButtons.css";

export default function FormsButtons() {
  return (
    <div className="row">
      <form id="search-form">
        <input
          type="text"
          className="form-control col-5"
          placeholder="Enter city"
          autoFocus="on"
          id="cityNameInput"
          autoComplete="off"
        />
      </form>

      <input
        className="btn btn-primary col-2"
        type="submit"
        id="search-button"
        value="Enter"
      />

      <button className="btn btn-success col-2" id="current-location-button">
        Current
      </button>
    </div>
  );
}
