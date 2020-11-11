import React from 'react';
import { connect } from 'react-redux';
import { userActions } from '../_actions';
import AppBar from "@material-ui/core/AppBar";
import ToolbarComponent from "../Toolbar/Toolbar";
import DrawerComponent from "../Drawer/Drawer";

class HomePage extends React.Component {
    componentDidMount() {  this.props.dispatch(userActions.getAll()); }
    handleDeleteUser(id) { return () => this.props.dispatch(userActions.delete(id)); }
    state = {  achorEl: false,  MobileMoreAnchorEl: false,  left: false };
    handleMobileMenuClose = () => { this.setState({ mobileMoreAnchorEl: null }); };
    toggleDrawer = () => { this.setState({ left: false }); };
    openDrawer = () => {   this.setState({  left: true   }); };


    render() {
        return (
            <AppBar>
                 <ToolbarComponent openDrawerHandler={this.openDrawer} />
                 <DrawerComponent   left={this.state.left}  toggleDrawerHandler={this.toggleDrawer}  />
            </AppBar>
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






