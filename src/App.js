import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Pages/Home";
import Events from "./Pages/Events";
import TimelineIndex from "./Pages/TimelineIndex";
import EventsTimeline from "./Pages/EventsTimeline";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/Event" component={Events} />
        <Route exact path="/EventsTimeline" component={EventsTimeline} />
        <Route exact path="/Timeline" component={TimelineIndex} />
      </Switch>
    </Router>
  );
}

export default App;
