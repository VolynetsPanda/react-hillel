import {Route, BrowserRouter, Switch} from "react-router-dom";
import './App.css';
import Header from "./components/Header";
import Home from "./views/Home";
import About from "./views/About";
import NotFound from "./views/NotFound";
import Users from "./views/Users";
import UserDetails from "./views/UserDetails";

function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Header/>
            <Switch>
                <Route path='/' exact component={Home}/>
                <Route path='/about' component={About}/>
                <Route path='/users' exact component={Users}/>
                <Route path='/users/:userId' component={UserDetails}/>
                <Route component={NotFound}/>
            </Switch>
        </BrowserRouter>
    </div>
  );
}

export default App;
