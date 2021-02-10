import NavBar from "./modules/NavBar";
import Main from "./modules/Main";
import Quotes from "./modules/Quotes";
import Home from "./modules/Home";
import Menu from "./modules/Menu";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/">
          <NavBar />
        </Route>
        <Route exact path="/drinks">
          <Main />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/quotes">
          <Quotes />
        </Route>
        <Route path="/menu">
          <Menu />
        </Route>
      </Router>
    </div>
  );
}

export default App;
