import React, {Component, useState} from "react";
import '../styles/App.css';
import Button from "./Button";
import Text from "./Text";

const App = ({slides}) => {
  const [count,setCount] = useState(0);

  return (
    <div>
      <Text slides={slides} count={count} />
      <Button slides={slides} count={count} setCount={setCount} />
    </div>
  )
}

export default App;
