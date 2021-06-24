import { getAllByPlaceholderText } from "@testing-library/react";
import React from "react";

let date = new Date();
export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>Bonjours à tous</h1>
        <p>Date : {date.getDate()}/{date.getMonth()}/{date.getFullYear()} {date.getHours()}:{date.getMinutes()} </p>
      </div>
    );
  }
}