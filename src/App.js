import { useState } from "react";

export default function App() {
  return (
    <>
      <MyComponent />
    </>
  );
}

function MyComponent() {
  let list = [1,1];
  let [msg, setMsg] = useState("Hellooo");

  const changeMessage = (e) => {
    setMsg(e.target.value);
  };

  return (
    <div>
      <h1>Counter Application</h1>
      <div><input
        type="text"
        name=""
        id=""
        value={msg}
        onChange={changeMessage}
      /></div>

      {list.map( (msg) => <div>{msg}</div>) }

      <div>{msg}</div>
      <div>{msg}</div>
      <div>{msg}</div>

    </div>
  );
}