// npm i - pobieranie paczek node_modules. Jeżeli wrzucamy projekt na gita, nie zrzucą się node_modules. Z kolei pobierając projekt mode_modules się nie pobiorą. Wówczas powyższa komenda doinstaluje paczki.

import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Counter from "./Counter";

function App() {
  return (
    <div className="App">
      <Counter name="Licznik główny" value="108"></Counter>
      <Counter name="Licznik drugi" value="0"></Counter>
    </div>
  );
}

export default App;
