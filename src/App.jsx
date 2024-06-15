import "./App.css";
import Login from "./pages/Login";
import Welcome from "./pages/Welcome";
import Home from "./pages/Home";
import Header from "./components/Header/Header";
import { Route, Link, Switch } from "react-router-dom";
import { useState } from "react";

function App() {
  const [activeProfile, setActiveProfile] = useState(null);

  return (
    <>
      <Switch>
        <Route exact path="/">
          <h1>Welcome to BardFlix</h1>
        </Route>
        <Route path="/login">
          <Header />
          <Login />
        </Route>
        <Route path="/welcome">
          <Welcome setActiveProfile={setActiveProfile} />
        </Route>
        <Route path="/home">
          <Header activeProfile={activeProfile} />
          <Home activeProfile={activeProfile} />
        </Route>
      </Switch>
      <div className="dev-navigation">
        <Link to="/">HomePage</Link>
        <Link to="/login">Login</Link>
        <Link to="/welcome">Welcome</Link>
        <Link to="/home">Home</Link>
      </div>
    </>
  );
}

export default App;
