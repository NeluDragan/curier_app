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
import colors from '../Classes/colors'
import { useState } from 'react'
import { auth, getAccessToken } from '../connections/httpCon'
import AdminPage from './adminPage'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
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
            id="gmail"
            variant="standard"
            label="Gmail"
            placeholder="example@gmail.com"
            fullWidth
            required
            onChange={(event) => {
              setEmail(event.target.value)
            }}
          />

          <TextField
            id="password"
            variant="standard"
            label="Password"
            placeholder="************"
            type="password"
            fullWidth
            required
            onChange={(event) => {
              setPassword(event.target.value)
            }}
          />
          <br />
          <br />
          <div style={buttonArrange}>
            <Button
              type="submit"
              color="primary"
              onClick={async () => {
                await auth({
                  email: email,
                  password: password,
                })
                if (getAccessToken()) {
                  window.location.href = '/adminPage'
                }
              }}
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
