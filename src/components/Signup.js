import { useState, useContext } from "react"
import {UserContext} from "../context/user"
import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from "react-router-dom";

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com">
        Coffee Rater
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

const Signup = () => {
  const navigate = useNavigate()
  const {signup} = useContext(UserContext);
  const [errorsList, setErrorsList] = useState([])
  const [userObject, setUserObject] = useState({                //initializes userObject state variable which
    username: "",                                               //represents users specific input data
    email: "",
    password: "",
    password_confirmation: ""
  });

  const handleChange = (e) => {                                 //extract name and value from event target
    const { name, value } = e.target;                           //spread operator copies previous state
      setUserObject((prevUserObject) => ({                      //and updates each field with new value
        ...prevUserObject,
      [name]: value
    }));
  }

const handleSubmit = e => {                                     //when form is submitted, a POST req. is sent
    e.preventDefault();                                         //to "/signup" with the userObject data
    fetch('/signup', {                                          //serialized as JSON
        method: "POST",
        headers: {"Content-Type": "application/json",
      },
        body: JSON.stringify(userObject)
      })
    .then(res => res.json())                                    //after receiving response from the server
    .then(user => {                                             //its checked for errors and if there are none
        if (!user.errors) {                                     //a signup function action is called which
            signup(user)                                        //navigates to a different page and logs user info
            navigate('/')
            console.log(user)
        } else {
            const errorsList = user.errors.map(e => <li>{e}</li>)
            setErrorsList(errorsList)
        }
      })
};

return (
  <ThemeProvider theme={theme}>
          <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Box
              sx={{
                marginTop: 8,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                <LockOutlinedIcon />
              </Avatar>
              <Typography component="h1" variant="h5">
                Sign up
              </Typography>
              <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      id="username"
                      label="Username"
                      name="username"
                      autoComplete="username"
                      onChange={handleChange}
                      value={userObject.username}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      id="email"
                      label="Email Address"
                      name="email"
                      autoComplete="email"
                      onChange={handleChange}
                      value={userObject.email}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      name="password"
                      label="Password"
                      type="password"
                      id="password"
                      autoComplete="new-password"
                      onChange={handleChange}
                      value={userObject.password}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      name="password_confirmation"
                      label="Password Confirmation"
                      type="password"
                      id="password-confirmation"
                      autoComplete="new-password"
                      onChange={handleChange}
                      value={userObject.password_confirmation}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <FormControlLabel
                      control={<Checkbox value="allowExtraEmails" color="primary" />}
                      label="I want to receive inspiration, marketing promotions and updates via email."
                    />
                  </Grid>
                </Grid>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Sign Up
                </Button>
                <Grid container justifyContent="flex-end">
                  <Grid item>
                    <Link href="/signin" variant="body2">
                      Already have an account? Sign in
                    </Link>
                  </Grid>
                </Grid>
              </Box>
              <ul>
                {errorsList}
              </ul>
            </Box>
            <Copyright sx={{ mt: 5 }} />
          </Container>
        </ThemeProvider>
);

}
export default Signup;