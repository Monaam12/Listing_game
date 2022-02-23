import React from "react";
import { Container } from "@material-ui/core";
import SelectTopByPlayers from "./components/SelectTopByPlayers";
import SelectTopByPlaytime from "./components/SelectTopByPlaytime";

function App() {
  return (
    <Container>
      <SelectTopByPlayers />
      <SelectTopByPlaytime />
    </Container>
  );
}

export default App;
