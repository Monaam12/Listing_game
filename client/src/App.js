import React from "react";
import { Container } from "@material-ui/core";
import SelectTopByPlayers from "./components/SelectTopByPlayers";
import SelectTopByPlaytime from "./components/SelectTopByPlaytime";
import "./App.css";

function App() {
  return (
    <Container>
      <SelectTopByPlayers />
      <SelectTopByPlaytime />
    </Container>
  );
}

export default App;
