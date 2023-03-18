import { useState } from "react";
import "./App.css";
import Dashboard from "./components/dashboard/Dashboard";
import Login from "./components/login/Login";
import Singin from "./components/singin/Singin";
import data from "./assets/data.json";
import Navbar from "./components/Navbar";

function App() {
  const [isLogin, setIsLogin] = useState(false);
  const [type, setType] = useState(false);
  return (
    <div className="App">
      {!isLogin ? (
        <Login setIsLogin={setIsLogin} /> 
      ) : 
      (
        <div>{!type ? <Dashboard /> : <Singin />}</div>
      )}
    </div>
  );
}

export default App;
