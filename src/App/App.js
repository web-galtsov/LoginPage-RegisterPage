import React from 'react';
import { Router, Route,Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import { history } from '../_helpers';
import { alertActions } from '../_actions';
import { PrivateRoute } from '../_components';
import { HomePage } from '../HomePage';
import { LoginPage } from '../LoginPage';
import { RegisterPage } from '../RegisterPage';
import  { ForgetPassword }  from '../ForgetPassword/ForgetPassword'

import '../css/style.css';
/*
import { ToastContainer,Flip, } from 'react-toastify';*/
import 'react-toastify/dist/ReactToastify.css';
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import Alert from "@material-ui/lab/Alert";



class App extends React.Component {
    constructor(props) {
        super(props);

        const { dispatch } = this.props; //svaka konektovana komponenta prima this.props.dispatch 
        history.listen((location, action) => {
            // clear alert on location change
            dispatch(alertActions.clear());
        });
    }


    render() {
        const { alert } = this.props;
        return (
            <div className="jumbotron">
                <Container component="main" maxWidth="xs">
                    <CssBaseline />
                        {alert.message &&
                        <Alert severity="success">{alert.message}</Alert>
                        }
                        <Router history={history}>
                            <Switch>
                                <PrivateRoute exact path="/" component={HomePage} />
                                <Route path="/login" component={LoginPage} />
                                <Route path="/register" component={RegisterPage} />
                                <Route path="/password" component={ForgetPassword} />
                               {/* <Redirect from="*" to="/" />*/}
                            </Switch>
                        </Router>


                </Container>
            </div>
        );
    }
}

function mapStateToProps(state) {
    const { alert } = state;
    return { alert };
}

 // new add
/*const actionCreators = {
    clearAlerts: alertActions.clear
};*/


const connectedApp = connect(mapStateToProps)(App);
export { connectedApp as App }; 