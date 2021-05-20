import logo from './logo.svg';

import CreateItem from './components/pages/Items/CreateItem.js'
import AllItems from './components/pages/Items/AllItems'
import UpdateItem from "./components/pages/Items/UpdateItem";
import CompareItems from "./components/pages/Items/CompareItems";

import CreateComponent from './components/pages/Components/CreateComponent.js'
import AllComponents from './components/pages/Components/AllComponents.js'
import UpdateComponent from './components/pages/Components/UpdateComponent.js'

import CreateConfiguration from './components/pages/Configurations/CreateConfiguration.js'
import AllConfigurations from './components/pages/Configurations/AllConfigurations.js'
import UpdateConfiguration from './components/pages/Configurations/UpdateConfiguration.js'
import CompareConfigurations from "./components/pages/Configurations/CompareConfigurations";

import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom'
import Navbar from './components/shared/navbar.js'
import Footer from './components/shared/footer'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <div className="p-5">
          <Switch>
            <Route exact path="/CreateConfiguration">
              <CreateConfiguration element="Configuration" />
            </Route>
            <Route exact path="/AllConfigurations">
              <AllConfigurations element="Configuration" />
            </Route>
            <Route exact path="/UpdateConfiguration">
              <UpdateConfiguration />
            </Route>
            <Route exact path="/CompareConfigurations">
              <CompareConfigurations />
            </Route>

            <Route exact path="/CreateItem">
              <CreateItem element="Item" />
            </Route>
            <Route exact path="/UpdateItem">
              <UpdateItem />
            </Route>
            <Route exact path="/AllItems">
              <AllItems />
            </Route>
            <Route exact path="/CompareItems">
              <CompareItems />
            </Route>

            <Route exact path="/CreateComponent">
              <CreateComponent props element="Component" />
            </Route>
            <Route exact path="/UpdateComponent" component={UpdateComponent}>
              
            </Route>
            <Route exact path="/AllComponents">
              <AllComponents />
            </Route>
          </Switch>
        </div>
        {/*<Footer /> */}
      </Router>
    </div>
  );
}

export default App;
