import './App.css';
import LoginView from "../src/components/LoginView";
import DataStore from './DataStore';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
    <Router>
      <Switch>
        <Route path="/" exact component={() => <LoginView />} />
        <Route path="/data" exact component={() => <DataStore />} />
      </Switch>
    </Router>
    </div>
  );
}

export default App;
