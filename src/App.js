import NavBar from "./modules/NavBar";
import Main from "./modules/Main";
import Quotes from "./modules/Quotes";
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
        <Route path="/quotes">
          <Quotes />
        </Route>
      </Router>
    </div>
  );
}

export default App;
