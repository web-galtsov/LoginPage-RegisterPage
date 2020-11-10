import React from 'react';
import { connect } from 'react-redux';
import { userActions } from '../_actions';
import { Link } from 'react-router-dom';
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import Avatar from "@material-ui/core/Avatar";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import { ValidatorForm, TextValidator} from 'react-material-ui-form-validator';

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" to="https://www.webworkoxana.com/">
                Your Website
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

class LoginPage extends React.Component {
    constructor(props) {
        super ( props );
        this.props.dispatch ( userActions.logout () );
        this.state = {
            user: {  email:'', password:'' },
            submitted: false };
        this.handleChange = this.handleChange.bind ( this );
        this.handleSubmit = this.handleSubmit.bind ( this );
    };

    handleChange(event) {
        const { name, value } = event.target;
        const { user } = this.state;
        this.setState({
            user: {  ...user, [name]: value   }
        });
    };
    handleSubmit(e) {
        e.preventDefault();
        this.setState({ submitted: true });
        const { user} = this.state;
        const { dispatch } = this.props;
        if (user.email && user.password) { dispatch(userActions.login(user.email, user.password)); }
    }
    render() {
        const { loggingIn } = this.props;
        const { user } = this.state;

        return (
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <div className='paper_new muiPaper-elevation'>
                    <Avatar className='avatar_root muiAvatar-color'>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign in
                    </Typography>
                    <ValidatorForm  noValidate autoComplete="off" onSubmit={this.handleSubmit} name="form" className="margin-top">
                        <TextValidator
                            variant="outlined"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            type="email"
                            autoComplete="off"
                            value={user.email}
                            onChange={this.handleChange}
                            validators={['required', 'isEmail']}
                            errorMessages={['this field is required', 'email is not valid']}
                        />
                        <TextValidator
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                            value={user.password}
                            onChange={this.handleChange}
                            validators={['required']}
                            errorMessages={['this field is required']}
                        />
                        <FormControlLabel
                            control={<Checkbox value="remember" color="primary" />}
                            label="Remember me"
                        />
                        <Button className="button-margin"
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                        >
                            Sign in
                        </Button>
                        {loggingIn &&
                        <img alt="" src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />
                        }
                        <Grid container>
                            <Grid item xs>
                                 <Button component={ Link } to="/password" color="primary">
                                     Forgot password?
                                </Button>
                            </Grid>
                            <Grid item>
                               <Button component={ Link } to="/register" color="primary">
                                    {"Don't have an account? Sign Up"}
                                </Button>
                            </Grid>
                        </Grid>
                    </ValidatorForm>
                </div>
                <Box mt={8}>  <Copyright />  </Box>
            </Container>
        );
    }
}
function mapStateToProps(state) {
    const { loggingIn } = state.authentication;
    return {
        loggingIn
    };
}
const connectedLoginPage = connect(mapStateToProps)(LoginPage);
export { connectedLoginPage as LoginPage };
