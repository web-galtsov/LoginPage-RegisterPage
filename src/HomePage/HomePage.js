import React from 'react';
import { connect } from 'react-redux';
import { userActions } from '../_actions';
import AppBar from "@material-ui/core/AppBar";
import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import { Delete} from "@material-ui/icons";

import ToolbarComponent from "../Toolbar/Toolbar";
import DrawerComponent from "../Drawer/Drawer";

class HomePage extends React.Component {
    componentDidMount() {
        this.props.dispatch(userActions.getAll());
    }
    handleDeleteUser(id) {
        return () => this.props.dispatch(userActions.delete(id));
    }

    state = {
        achorEl: false,
        MobileMoreAnchorEl: false
    };

    handleMobileMenuClose = () => {
        this.setState({
            mobileMoreAnchorEl: null
        });
    };
    state = {
        left: false
    };
    toggleDrawer = () => {
        // if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
        //   return;
        // }
        this.setState({ left: false });
    };
    openDrawer = () => {
        this.setState({
            left: true
        });
    };
    render() {
        const { users } = this.props;
        return (
            <>
            <AppBar>
                 <ToolbarComponent openDrawerHandler={this.openDrawer} />
                 <DrawerComponent   left={this.state.left}  toggleDrawerHandler={this.toggleDrawer}  />
            </AppBar>


                <div>
                    <p>You're logged in with React!!</p>
                    <h3>All registered users:</h3>
                    {users.loading && <em>Loading users...</em>}
                    {users.error && <span className="text-danger">ERROR: {users.error}</span>}
                    {users.items &&
                    <List>
                        {users.items.map((user, index) =>
                            <ListItem key={user.id}>
                                <ListItemText primary= {user.firstName + ' ' + user.lastName} />
                                {
                                    user.deleting ? <ListItemSecondaryAction>
                                            <IconButton
                                                color="primary"
                                                onClick={() => this.handleDeleteUser(user.id)}
                                            >
                                                <Delete />
                                            </IconButton>
                                        </ListItemSecondaryAction>
                                        : user.deleteError ? <span className="text-danger"> - ERROR: {user.deleteError}</span>
                                        : /*<span> - <a href onClick={this.handleDeleteUser(user.id)}>Delete</a></span>*/
                                        <IconButton
                                            color="primary"
                                            onClick={this.handleDeleteUser(user.id)}
                                        >
                                            <Delete />
                                        </IconButton>
                                }
                            </ListItem>
                        )}
                    </List>
                    }
                </div>

            </>
        );
    }
}

function mapStateToProps(state) {
    const { users, authentication } = state;
    const { user } = authentication;
    return {  user,  users };
}
const connectedHomePage = connect(mapStateToProps)(HomePage);
export { connectedHomePage as HomePage };






