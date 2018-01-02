import React from 'react'; 
import { Route, Redirect, Switch } from 'react-router-dom';

import Home from '../home/Home';
import Work from '../work/Work';

export default props => (
    <Switch>
        <Route path='/home' exact component={Home} />
        <Route path='/work' component={Work} />
        <Redirect from='*' to='/' />
    </Switch>
);