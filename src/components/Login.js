import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button, Grid, Grow } from '@mui/material';


export default class LoginForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: '',
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChangeEmail = this.handleChangeEmail.bind(this);
        this.handleChangePassword = this.handleChangePassword.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault()
        fetch("http://localhost:4000/api/token", {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email: this.state.email, password: this.state.password })
        })
    }

    handleChangeEmail(e) {
        this.setState({
            email: e.target.value
        })
    }

    handleChangePassword(e) {
        this.setState({
            password: e.target.value
        })
    }

    render() {
        return (
            <Grid container display="flex" justifyContent="center" >
                <Grow in={true} >
                    <Box
                        component="form"
                        sx={{
                            '& .MuiTextField-root': { m: 1, width: '25ch', color: 'white' },
                        }}
                        noValidate
                        autoComplete="off"
                        style={{
                            background: "#242038ff",
                            borderRadius: "5px",
                            color: "white"
                        }}
                        textAlign="center"
                        onSubmit={this.handleSubmit}
                    >
                        <h2>Login</h2>
                        <Grid container>
                            <TextField
                                required
                                id="outlined-email-input"
                                label="Email"
                                type="email"
                                value={this.state.email}
                                onChange={this.handleChangeEmail}
                                InputProps={{
                                    style: {
                                        color: 'white',
                                    }
                                }}
                                InputLabelProps={{
                                    style: {
                                        color: 'white',
                                    }
                                }}
                                fullWidth
                            />
                        </Grid>
                        <Grid container>
                            <TextField
                                required
                                id="outlined-password-input"
                                label="Password"
                                type="password"
                                value={this.state.password}
                                onChange={this.handleChangePassword}
                                autoComplete="current-password"
                                InputProps={{
                                    style: {
                                        color: 'white',
                                    }
                                }}
                                InputLabelProps={{
                                    style: {
                                        color: 'white',
                                    }
                                }}
                                fullWidth
                            />
                        </Grid>
                        <Grid container marginBottom={2} display="flex" justifyContent="center">
                            <Button
                                type="submit"
                                style={{ color: 'white' }}
                            >
                                Login
                            </Button>
                        </Grid>
                    </Box >
                </Grow>
            </Grid>
        );
    }
}