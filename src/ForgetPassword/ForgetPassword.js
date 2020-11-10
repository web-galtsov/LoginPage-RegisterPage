import React from "react"
import PropTypes from "prop-types"
import Paper from "@material-ui/core/Paper"
import Typography from "@material-ui/core/Typography"
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator"
import { connect } from "react-redux"
import {Button} from "@material-ui/core";




class ForgetPassword extends React.Component {
    state = {
        email: "",
    }

    static propTypes = {
        reSendEmail: PropTypes.func.isRequired,
        classes: PropTypes.object.isRequired,
        resendError: PropTypes.func.isRequired,
        history: PropTypes.object.isRequired,
        resendErrorMessage: PropTypes.func.isRequired,
    }

    email = React.createRef()

    onChange = input => e => this.setState({ [input]: e.target.value })

    handleBlur = event => this[event.target.name].current.validate(event.target.value)

    onSubmit = (e) => {
        e.preventDefault()
        const { history, reSendEmail } = this.props
        reSendEmail(this.state, history)
    }

    render() {
    /*    const { password } = this.props;*/
    /*    const { classes, resendError, resendErrorMessage } = this.props*/
        return (
            <Paper elevation={0} >


                <Typography  variant="h3" align="center">Forgot your password?</Typography>
                <Typography  align="left">We’ve got you covered</Typography>

                <ValidatorForm onSubmit={this.onSubmit} instantValidate={false}>
                    <TextValidator
                         variant="outlined"
                        label="Enter your email"
                        name="email"
                        ref={this.email}
                        autoFocus
                        placeholder="e.g., carl@cloud.ci"
                        onChange={this.onChange("email")}
                        onBlur={this.handleBlur}
                        value={this.state.email}
                        margin="normal"
                        validators={["required", "isEmail"]}
                        errorMessages={["this field is required", "email is not valid"]}
                    />

                    <Button type='submit'>
                        send
                    </Button>
                </ValidatorForm>
            </Paper>
        )
    }
}


function mapStateToProps(state) {
    const { password } = state.authentication;
    return {
        password
    };
}

const connectedForgetPassword = connect(mapStateToProps)(ForgetPassword);
export { connectedForgetPassword as ForgetPassword };


