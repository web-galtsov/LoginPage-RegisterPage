import React, { Fragment } from "react";
import { Link, withRouter } from "react-router-dom";

import {  AppBar, CssBaseline, Toolbar, Drawer, Hidden, Typography, MenuList,  MenuItem} from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import { Menu } from "@material-ui/icons";
import { withStyles } from "@material-ui/core/styles";
import { compose } from "recompose";
/*import ToolbarComponent from "../Toolbar/Toolbar";*/

import HelpOutline from "@material-ui/icons/HelpOutline";
import MoreIcon from "@material-ui/icons/MoreVert";
import { connect } from 'react-redux';
import SearchIcon from "@material-ui/icons/Search";
import MailIcon from "@material-ui/icons/Mail";
import NotificationsIcon from "@material-ui/icons/Notifications";
import Badge from "@material-ui/core/Badge";
import Button from "@material-ui/core/Button";
import InputBase from "@material-ui/core/InputBase";


const drawerWidth = 240;

const styles = theme => ({
    root: {
        display: "flex"
    },
    grow: {
        flexGrow: 1
    },
    drawer: {
        [theme.breakpoints.up("sm")]: {
            width: drawerWidth,
            flexShrink: 0
        }
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1
    },
    menuButton: {
        marginRight: 20,
        [theme.breakpoints.up("sm")]: {
            display: "none"
        }
    },
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
        width: drawerWidth
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing.unit * 3
    },
    nested: {
        paddingLeft: theme.spacing.unit * 4
    },
    searchIcon: {
        width: theme.spacing(7),
        height: "100%",
        position: "absolute",
        pointerEvents: "none",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    },
    inputRoot: {
        color: "inherit"
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 7),
        transition: theme.transitions.create("width"),
        width: "100%",
        [theme.breakpoints.up("md")]: {
            width: 200
        }
    },
    sectionDesktop: {
        display: "none",
        [theme.breakpoints.up("md")]: {
            display: "flex"
        }
    },
    sectionMobile: {
        display: "flex",
        [theme.breakpoints.up("md")]: {
            display: "none"
        }
    }

});

class Layout extends React.Component {

    handleDrawerToggle = () => { this.setState(state => ({ mobileOpen: !state.mobileOpen }));  };
    state = { achorEl: false, MobileMoreAnchorEl: true, mobileOpen: false };
    handleProfileMenuOpen = event => {
        this.setState({   achorEl: event.currentTarget});
    };
    handleMobileMenuClose = () => {
        this.setState({mobileMoreAnchorEl: null });
    };

    handleMenuClose = () => {
        this.setState({ achorEl: null,  mobileMoreAnchorEl: null });
    };
    handleMobileMenuOpen = event => {
        this.setState({  mobileMoreAnchorEl: event.currentTarget });
    };



    render() {
        const {  classes,  location: { pathName },  children,  noideas  } = this.props;
        const { mobileOpen } = this.state;


        const drawer = (
            <div>
                <div className={classes.toolbar} />
                <MenuList >
                    <MenuItem component={Link} to="/" selected={"/" === pathName}  >
                        Home
                    </MenuItem>
                    <MenuItem
                        component={Link}
                        to="/dashboard"
                        selected={"/dashboard" === pathName}
                    >
                        Dashboard
                    </MenuItem>
                    <MenuItem    component={Link}   to="/content"    selected={"/content" === pathName}
                    >
                        Contents
                    </MenuItem>
                    <MenuList>
                        {noideas.map(({ id, name }) => {
                            const to = `/content/${id}`;
                            return (
                                <MenuItem  className={classes.nested}   key={id}     component={Link}   to={to}   selected={to === pathName}  >
                                    {name}
                                </MenuItem>
                            );
                        })}
                    </MenuList>
                </MenuList>
            </div>
        );

 // menu right
        const isMenuOpen = Boolean(this.state.anchorEl);
        const isMobileMenuOpen = Boolean(this.state.mobileMoreAnchorEl);

        const menuId = "primary-search-account-menu";
        const renderMenu = (
            <Menu
                anchorEl={this.state.anchorEl}
                anchorOrigin={{ vertical: "top", horizontal: "right" }}
                id={menuId}
                keepMounted
                transformOrigin={{ vertical: "top", horizontal: "right" }}
                open={isMenuOpen}
                onClose={this.handleMenuClose}
            >
                <MenuItem onClick={this.handleMenuClose}>Profile</MenuItem>
                <MenuItem onClick={this.handleMenuClose}>My account</MenuItem>
            </Menu>
        );

        const mobileMenuId = "primary-search-account-menu-mobile";
        const renderMobileMenu = (
            <Menu
                anchorEl={this.state.mobileMoreAnchorEl}
                anchorOrigin={{ vertical: "top", horizontal: "right" }}
                id={mobileMenuId}
                keepMounted
                transformOrigin={{ vertical: "top", horizontal: "right" }}
                open={isMobileMenuOpen}
                onClose={this.handleMobileMenuClose}
            >
                <MenuItem>
                    <IconButton aria-label="show 4 new mails" color="inherit">
                        <Badge badgeContent={4} color="secondary">
                            <MailIcon />
                        </Badge>
                    </IconButton>
                    <p>Messages</p>
                </MenuItem>
                <MenuItem>
                    <IconButton aria-label="show 11 new notifications" color="inherit">
                        <Badge badgeContent={11} color="secondary">
                            <NotificationsIcon />
                        </Badge>
                    </IconButton>
                    <p>Notifications</p>
                </MenuItem>
                <MenuItem>
                    <IconButton
                        aria-label="account of current user"
                        aria-controls="primary-search-account-menu"
                        aria-haspopup="true"
                        color="inherit"
                    >
                        <HelpOutline />
                    </IconButton>
                    <p>help online</p>
                </MenuItem>

                <MenuItem onClick={this.handleProfileMenuOpen}>
                    <Button
                        edge="end"
                        aria-label="account of current user"
                        aria-controls={menuId}
                        aria-haspopup="true"
                        onClick={this.handleProfileMenuOpen}

                        component={ Link } to="/login" variant="outlined" color="secondary">
                        Signup
                    </Button>
                </MenuItem>
            </Menu>
        );
        const { user } = this.props;

        return (
            <Fragment>
                <CssBaseline />
                <div className={classes.root}>
                    <AppBar position="absolute" className={classes.appBar}>
                        <Toolbar>
                            <IconButton
                                color="inherit"
                                aria-label="Open drawer"
                                onClick={this.handleDrawerToggle}
                                className={classes.menuButton}
                            >
                                <Menu />
                            </IconButton>
                            <Typography variant="h5" color="inherit" noWrap>
                               {/* Material-UI*/}   {user.firstName}
                            </Typography>
                          {/*  <ToolbarComponent openDrawerHandler={this.openDrawer} />*/}
                            <div className={classes.search}>
                                <div className={classes.searchIcon}>
                                    <SearchIcon />
                                </div>
                                <InputBase
                                    placeholder="Search…"
                                    classes={{
                                        root: classes.inputRoot,
                                        input: classes.inputInput
                                    }}
                                    inputProps={{ "aria-label": "search" }}
                                />
                            </div>
                            <div className={classes.grow} />
                            <div className={classes.sectionDesktop}>
                                <IconButton aria-label="show 4 new mails" color="inherit">
                                    <Badge badgeContent={4} color="secondary">
                                        <MailIcon />
                                    </Badge>
                                </IconButton>
                                <IconButton
                                    aria-label="show 17 new notifications"
                                    color="inherit"
                                >
                                    <Badge badgeContent={17} color="secondary">
                                        <NotificationsIcon />
                                    </Badge>
                                </IconButton>
                                <IconButton
                                    color="inherit"
                                    aria-label="Help">
                                    <HelpOutline />
                                </IconButton>
                                <Button
                                    edge="end"
                                    aria-label="account of current user"
                                    aria-controls={menuId}
                                    aria-haspopup="true"
                                    onClick={this.handleProfileMenuOpen}
                                    component={ Link } to="/login" variant="outlined" color="secondary">
                                    Signup
                                </Button>
                            </div>
                            <div className={classes.sectionMobile}>
                                <IconButton
                                    aria-label="show more"
                                    aria-controls={mobileMenuId}
                                    aria-haspopup="true"
                                    onClick={this.handleMobileMenuOpen}
                                    color="inherit"
                                >
                                    <MoreIcon />
                                </IconButton>
                            </div>
                        </Toolbar>
                      </AppBar>
                    {renderMobileMenu}
                    {renderMenu}
                    <nav className={classes.drawer}>
                        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                        <Hidden smUp implementation="css">
                            <Drawer
                                container={this.props.container}
                                variant="temporary"
                                open={mobileOpen}
                                onClose={this.handleDrawerToggle}
                                classes={{  paper: classes.drawerPaper  }}
                            >
                                {drawer}
                            </Drawer>
                        </Hidden>
                        <Hidden xsDown implementation="css">
                            <Drawer  classes={{   paper: classes.drawerPaper   }}  variant="permanent"  open >
                                {drawer}
                            </Drawer>
                        </Hidden>
                    </nav>
                    <main className={classes.content}>
                        <div className={classes.toolbar} />
                        {children}
                    </main>
                </div>
            </Fragment>


        );
    }
}

function mapStateToProps(state) {
    const { users, authentication } = state;
    const { user } = authentication;
    return {  user,  users };
}
const Layout1 = connect(mapStateToProps)(Layout);

export default compose(   withRouter,    withStyles(styles))(Layout1);
