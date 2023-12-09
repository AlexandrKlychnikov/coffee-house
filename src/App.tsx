import * as React from "react";
import Header from "@components/header/header";
import "./App.sass";
import FavoriteCoffee from "@components/favorite-coffee/favorite-coffee";
import About from "@components/about/about";
import MobileApp from "@components/mobile-app/mobile-app";

function App() {
  return (
    <div className="App">
      <Header />
      <FavoriteCoffee />
      <About />
      <MobileApp />
    </div>
  );
}

export default App;
