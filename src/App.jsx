import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import Cocomo1 from "./components/Cocomo1/Cocomo1";
import Cocomo2 from "./components/Cocomo2/Cocomo2";
import MainHeader from "./components/MainHeader";
import FunctionalPoints from "./components/FunctionalPoints/FunctionalPoints";


function App() {

    return (

        <Router>
            <MainHeader/>
            <Switch>
                <Route path="/" exact>
                    <Redirect to="/cocomo1"/>
                </Route>
                <Route path="/cocomo1" exact>
                    <Cocomo1/>
                </Route>
                <Route path="/cocomo2" exact>
                    <Cocomo2/>
                </Route>
                <Route path="/func_points" exact>
                    <FunctionalPoints />
                </Route>
            </Switch>
        </Router>
    );

}

export default App;
