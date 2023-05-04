import React, { useState } from 'react'
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Button,
  ThemeProvider,
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import InboxIcon from '@mui/icons-material/MoveToInbox'
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import LocalShippingIcon from '@mui/icons-material/LocalShipping'
import colors from '../Classes/colors'
import { Link } from 'react-router-dom'

const Appbar = ({ user, setUser }) => {
  const [open, setOpen] = useState(false)

  const renderPageTitle = () => {
    if (window.location.pathname === '/formPage') {
      return 'Form page'
    } else if (window.location.pathname === '/curierPage') {
      return 'Curier page'
    } else if (window.location.pathname === '/clientPage') {
      return 'Client page'
    } else if (window.location.pathname === '/adminPage') {
      return 'Admin page'
    } else {
      return 'CurierApp'
    }
  }

  const handleDrawerOpen = () => {
    setOpen(true)
  }

  const handleDrawerClose = () => {
    setOpen(false)
  }

  return (
    <ThemeProvider theme={colors}>
      <div>
        <AppBar position="static" style={{ backgroundColor: colors.accent }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={handleDrawerOpen}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6">{renderPageTitle()}</Typography>
            <Button color="inherit" style={{ marginLeft: 'auto' }}>
              Login
            </Button>
          </Toolbar>
        </AppBar>
        <Drawer anchor="left" open={open} onClose={handleDrawerClose}>
          <List>
            <ListItem
              button
              onClick={() => {
                window.location.href = '/formPage'
              }}
            >
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <ListItemText primary="Form page" />
            </ListItem>
            <ListItem
              button
              onClick={() => {
                window.location.href = '/curierPage'
              }}
            >
              <ListItemIcon>
                <LocalShippingIcon />
              </ListItemIcon>
              <ListItemText primary="Curier page" />
            </ListItem>
            <ListItem
              button
              onClick={() => {
                window.location.href = '/clientPage'
              }}
            >
              <ListItemIcon>
                <AccountCircleIcon />
              </ListItemIcon>
              <ListItemText primary="Client page" />
            </ListItem>
            <ListItem
              button
              onClick={() => {
                window.location.href = '/adminPage'
              }}
            >
              <ListItemIcon>
                <SupervisorAccountIcon />
              </ListItemIcon>
              <ListItemText primary="Admin page" />
            </ListItem>
          </List>
        </Drawer>
      </div>
    </ThemeProvider>
  )
}

export default Appbar
