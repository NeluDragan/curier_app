import React from 'react'
import { Avatar, Button, Grid, Paper, TextField } from '@mui/material'
import LockIcon from '@mui/icons-material/Lock'
import { useNavigate } from 'react-router-dom'
import colors from './colors'

const Login = () => {
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
    width: '40vh',
    margin: '20px auto',
    backgroundColor: colors.dialog,
  }
  //   const [email, setEmail] = useState('')
  //   const [password, setPassword] = useState('')
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
          //   onChange={(event) => {
          //     setEmail(event.target.value)
          //   }}
        />

        <TextField
          id="password"
          variant="standard"
          label="Password"
          placeholder="Enter password"
          type="password"
          fullWidth
          required
          //   onChange={(event) => {
          //     setPassword(event.target.value)
          //   }}
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
            onClick={() => navigate('src/components/formPage.js')}
          >
            Sign In as Client
          </Button>
        </div>
      </Paper>
    </Grid>
  )
}

export default Login
