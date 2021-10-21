// import { Route } from "react-router";
import "./App.css";
import "./index";
import { Switch, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import DiscoveMoviesPages from "./Pages/DiscoverMoviesPage";
import AboutPage from "./Pages/AboutPage";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Switch>
          <Route path="/discover" component={DiscoveMoviesPages} />
          <Route path="/about" component={AboutPage} />
          <Route exact path="/" component={HomePage} />
        </Switch>
      </header>
    </div>
  );
}

export default App;
