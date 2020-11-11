import React from "react";
import Drawer from "@material-ui/core/Drawer";
import { withStyles } from "@material-ui/core/styles";
import {  List,   ListItem,   ListItemIcon,   ListItemText,   Divider} from "@material-ui/core";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import NavLink from "../layouts/MainLayout/NavLink";
import {history} from "../_helpers";
import {Router, Switch} from "react-router-dom";

const styles = theme => ({
    list: {
        width: 250
    },
    fullList: {
        width: "auto"
    }
});

class DrawerComponent extends React.Component {
    state = {
        left: false
    };

    render() {
        const { classes, children } = this.props;
        const sideList = side => (
            <div
                className={classes.list}
                role="presentation"
                onClick={this.props.toggleDrawerHandler}
                onKeyDown={this.props.toggleDrawerHandler}
            >
                {/*<List>
                    {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
                        <ListItem button key={text}>
                            <ListItemIcon>
                                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                            </ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItem>
                    ))}
                </List>*/}
                  <List>
                     <NavLink activeOnlyWhenExact to="/" icon={InboxIcon}>
                        Home
                    </NavLink>
                         <NavLink to="/faq" icon={MailIcon}>
                                 FAQ
                          </NavLink>
                     </List>
                        <main className={classes.content}>
                          <div className={classes.toolbar} />
                            {children}
                       </main>

                <Divider />
                <List>
                    {["All mail", "Trash", "Spam"].map((text, index) => (
                        <ListItem button key={text}>
                            <ListItemIcon>
                                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                            </ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItem>
                    ))}
                </List>
            </div>
        );

        return (
            <Router history={history}>
                <Switch>
                  <Drawer open={this.props.left} onClose={this.props.toggleDrawerHandler}>
                  {sideList("left")}
            </Drawer>
                </Switch>
            </Router>

        );
    }
}

export default withStyles(styles)(DrawerComponent);
