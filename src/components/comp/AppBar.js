import React from 'react'

import { AppBar, Toolbar, Typography, Button, IconButton } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'

export default function Appbar({ user, setUser, handleClick }) {
  if (user) {
    return (
      <div>
        <AppBar position="static">
          <Toolbar>
            <IconButton edge="start" color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton>
            <Typography variant="h6">ReactApp</Typography>
          </Toolbar>
        </AppBar>
      </div>
    )
  } else {
    return (
      <div>
        <AppBar position="static">
          <Toolbar>
            <IconButton edge="start" color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton>
            <Typography variant="h6">ReactApp</Typography>
            <Button
              setUser={setUser}
              onClick={(e) => {
                e.preventDefault()
                handleClick(true)
              }}
              color="inherit"
            >
              Login
            </Button>
            <Button
              setUser={setUser}
              onClick={(e) => {
                e.preventDefault()
                handleClick(false)
              }}
              color="inherit"
            >
              Register
            </Button>
          </Toolbar>
        </AppBar>
      </div>
    )
  }
}
