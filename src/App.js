import React from "react";
import "./App.css";
import AccordionExpandIcon from "./components/Accordions";
import Header from "./components/Header";
import UpComingEvents from "./components/UpComingEvents";
import EventCards from "./components/EventCards";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <header className="header">

        <Header />
      </header>


      <main>
        <AccordionExpandIcon />

        <article>
          <UpComingEvents />

          <EventCards />
        </article>

      </main>

      <footer><Footer/></footer>
      
    </div>
  );
}

export default App;
