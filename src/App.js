import React from "react";
import "./App.css";
import AccordionExpandIcon from "./components/Accordions";
import Header from "./components/Header";
import UpComingEvents from "./components/UpComingEvents";
import Footer from "./components/Footer";
import Carousel from "./components/Carousel";

function App() {
  return (
    <div className="App">
      <header className="header">
        <Header />
      </header>
      <Carousel />
      <main className="main-content">
        <AccordionExpandIcon />
        <UpComingEvents />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
