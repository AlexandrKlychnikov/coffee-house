import * as React from "react";
import Header from "@components/header/header";
import "./App.sass";
import FavoriteCoffee from "@components/favorite-coffee/favorite-coffee";

function App() {
  return (
    <div className="App">
      <Header />
      <FavoriteCoffee />
    </div>
  );
}

export default App;
