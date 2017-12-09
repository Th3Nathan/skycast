import React from 'react';
import { Route, Switch} from 'react-router-dom';
import { HashRouter } from 'react-router-dom';
import Session from './session/Session';
import Home from './home/Home';
const Hello = (props) => {
    return (
        <div>
            <h1>Hello Sista</h1>
        </div>
    );
}

const App = () => {
    return (
        <HashRouter>
            <Switch>
                <Route path="/signin" exact={true} component={Session} />
                <Route path="/signup" exact={true} component={Session} />
                <Route path="/" exact={true} component={Home} />
            </Switch>
        </HashRouter>
    );
};

export default App;