import React from "react";
import "./App.css";
// Components
import Header from "./components/Header";

const App = () => {
  return (
    <div className="container">
      <Header />
      <h1 style={{ color: "red", backgroundColor: "yellow", padding: "2px" }}>
        Title
      </h1>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto
        assumenda voluptatem similique? Et tempore minima quidem dolor, dolore
        inventore laboriosam, numquam, quos commodi ullam harum consequuntur
        laborum vel repudiandae delectus.
      </p>
    </div>
  );
};

export default App;
