import React from 'react'
import { Avatar, Button, Grid, Paper, TextField } from '@mui/material'
import LockIcon from '@mui/icons-material/Lock'
import { useNavigate } from 'react-router-dom'
import colors from '../comp/colors'
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

const Login = (props) => {
  const AvatarStyle = { backgroundColor: colors.primary }
  const buttonArrange = {
    display: 'inline-block',
    TextAlign: 'justify',
    justifyContent: 'center',
    fleWrap: 'wrap',
    alignItems: 'center',
  }
  const PaperStyle = {
    padding: 20,
    height: '45vh',
    width: '35vh',
    margin: '20px auto',
    backgroundColor: colors.dialog,
  }

  const navigate = useNavigate()

  return (
    <Grid>
      <Paper elevation={10} style={PaperStyle}>
        <Grid align="center">
          <Avatar style={AvatarStyle}>
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
            onClick={() => navigate('src/components/main.js')}
          >
            Sign In as Admin
          </Button>
          <Button
            type="submit"
            color="primary"
            onClick={() => navigate('src/components/Form/UserForm.js')}
            // onClick={() => {
            //   // http://127.0.0.1:8000
            //   const requestOptions = {
            //     method: 'POST',
            //     headers: { 'Content-Type': 'application/json' },
            //     body: JSON.stringify({
            //       username: '',
            //       email: email,
            //       fullname: '',
            //       password: password,
            //     }),
            //   }
            //   fetch('http://127.0.0.1:8000/users/add', requestOptions)
            //     .then((response) => response.json())
            //     .then((data) => console.log(data))
            // }}
          >
            Sign In as Client
          </Button>
        </div>
        <div></div>
      </Paper>
    </Grid>
  )
}

export default Login
