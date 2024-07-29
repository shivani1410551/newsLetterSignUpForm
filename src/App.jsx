import React from "react";
import { useState } from "react";
import Hero from "./Components/Hero";
import SuccessState from "./Components/SuccessState";
const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  function handleIsOpen() {
    setIsOpen((prev) => !prev);
  }
  return (
    <div className="bg-CharcoalGrey h-screen flex items-center justify-center">
      {isOpen ? (
        <Hero handleIsOpen={handleIsOpen} />
      ) : (
        <SuccessState handleIsOpen={handleIsOpen} />
      )}
    </div>
  );
};

export default App;
