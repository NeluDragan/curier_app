import React from 'react'
import {
  Avatar,
  Button,
  Grid,
  Paper,
  TextField,
  ThemeProvider,
} from '@mui/material'
import LockIcon from '@mui/icons-material/Lock'
import { useNavigate } from 'react-router-dom'
import colors from '../Classes/colors'
import { useState } from 'react'
import UserProfile from '../Classes/UserProfile'
import user from '../Classes/user'

//import { useState } from 'react'

// const f = ({ endpoint, body }) => {
//   // {
//   //   username: '',
//   //   email: email,
//   //   fullname: '',
//   //   password: password,
//   // }
//   const requestOptions = {
//     method: 'POST',
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify(body),
//   }
//   fetch('http://127.0.0.1:8000/' + endpoint, requestOptions)
//     .then((response) => response.json())
//     .then((data) => console.log(data))
// }

const Login = () => {
  const buttonArrange = {
    display: 'inline-block',
    TextAlign: 'justify',
    justifyContent: 'center',
    fleWrap: 'wrap',
    alignItems: 'center',
  }
  const PaperStyle = {
    padding: 20,
    height: '43vh',
    width: '35vh',
    margin: '20px auto',
  }
  const navigate = useNavigate()
  return (
    <ThemeProvider theme={colors}>
      <Grid>
        <Paper
          elevation={10}
          style={PaperStyle}
          sx={{ backgroundColor: colors.palette.dialog.main }}
        >
          <Grid align="center">
            <Avatar sx={{ backgroundColor: colors.palette.primary.main }}>
              <LockIcon />
            </Avatar>
            <h2>Sign In</h2>
          </Grid>

          <TextField
            id="username"
            variant="standard"
            label="Username"
            placeholder="Enter username"
            fullWidth
            required
            // onChange={(event) => {
            //   email(event.target.value)
            // }}
          />

          <TextField
            id="password"
            variant="standard"
            label="Password"
            placeholder="Enter password"
            type="password"
            fullWidth
            required
            // onChange={(event) => {
            //   setPassword(event.target.value)
            // }}
          />
          <br />
          <br />
          <div style={buttonArrange}>
            <Button
              type="submit"
              color="primary"
              onClick={() => navigate('/adminPage')}
            >
              Sign In
            </Button>
          </div>
          <div></div>
        </Paper>
      </Grid>
    </ThemeProvider>
  )
}

export default Login
