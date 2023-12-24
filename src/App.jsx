import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { MainLayout } from "./Layout/Layout";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="mainLayout">
        <MainLayout></MainLayout>
      </div>
    </>
  );
}

export default App;
