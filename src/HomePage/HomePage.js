import React from 'react';
import { connect } from 'react-redux';
import { userActions } from '../_actions';
import AppBar from "@material-ui/core/AppBar";
import ToolbarComponent from "../Toolbar/Toolbar";
import DrawerComponent from "../Drawer/Drawer";
import {Switch, Route} from "react-router-dom"
import Home from '../layouts/Content';
import FAQ from '../pages/FAQ/index';
class HomePage extends React.Component {
    constructor(props) {
        super ( props );
        this.data = {
            header: true,
            nav: true,
            content: true,
            footer: true
        }
    }



    componentDidMount() {  this.props.dispatch(userActions.getAll()); }
    handleDeleteUser(id) { return () => this.props.dispatch(userActions.delete(id)); }
    state = {  achorEl: false,  MobileMoreAnchorEl: false,  left: false };
    handleMobileMenuClose = () => { this.setState({ mobileMoreAnchorEl: null }); };
    toggleDrawer = () => { this.setState({ left: false }); };
    openDrawer = () => {   this.setState({  left: true   }); };

    render() {
        return (
            <>
            <AppBar>
                 <ToolbarComponent openDrawerHandler={this.openDrawer} />
                <DrawerComponent   left={this.state.left}  toggleDrawerHandler={this.toggleDrawer}  />
             </AppBar>
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route exact path="/faq1" >
                        <FAQ />
                    </Route>
                </Switch>
            </>
        );
    }
}

function mapStateToProps(state) {
    const {  authentication } = state;
    const { user } = authentication;
    return {  user };
}
const connectedHomePage = connect(mapStateToProps)(HomePage);
export { connectedHomePage as HomePage };






