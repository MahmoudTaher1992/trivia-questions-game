import React from "react";
import logo from "./logo.svg";
import { Button } from "./../components/shared/button/Button";

function App() {
  return (
    <div>
      <Button desc="big" shortcut="b" isBig />
      <Button desc="small" />
    </div>
  );
}

export default App;
