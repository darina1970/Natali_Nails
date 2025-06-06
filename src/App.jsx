import React from "react";

// Импорт компонентов
import { Header }  from './components/Header/Header';
import { About } from "./components/About/About";
import { WhyChoose } from "./components/WhyChoose/WhyChoose";
import { Portfolio } from "./components/Portfolio/Portfolio";
import { Price } from "./components/Price/Price";
import { Sterilization } from "./components/Sterilization/Sterilization";
import { Certificate } from "./components/Certificate/Certificate";
import { Contacts } from "./components/Contacts/Contacts";
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <WhyChoose />
      <Portfolio />
      <Price />
      <Sterilization />
      <Certificate />
      <Contacts />
      <Footer />
    </div>
  );
}

export default App;
