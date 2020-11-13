import React from 'react';
import {  Route,Switch } from 'react-router-dom';
/*import { connect } from 'react-redux';
import {HomePage} from "../HomePage";*/

import FAQ from '../pages/FAQ/index';
import {Home} from "../pages";

class App1 extends React.Component {


    render() {
        return (
            <div style={{ color: '#212121'}}>

                <Switch>
                    <Route exact path='/'>
                        <Home/>
                    </Route>
                    <Route exact path='/faq1'>
                        <FAQ/>
                    </Route>

                </Switch>
            </div>
        );
    }
}

export default App1