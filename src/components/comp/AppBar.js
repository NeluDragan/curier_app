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
  ThemeProvider,
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import InboxIcon from '@mui/icons-material/MoveToInbox'
import MailIcon from '@mui/icons-material/Mail'
import colors from '../Classes/colors'
import { Link } from 'react-router-dom'

const Appbar = ({ user, setUser }) => {
  const [open, setOpen] = useState(false)

  function handleClick(path) {
    return <Link to={path} />
  }
  handleClick('src/components/Form/UserForm.js')
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
            <Typography variant="h6">CurierApp</Typography>
          </Toolbar>
        </AppBar>
        <Drawer anchor="left" open={open} onClose={handleDrawerClose}>
          <List>
            <ListItem button onClick={() => handleClick('/form')}>
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <ListItemText primary="Form" />
            </ListItem>
            <ListItem button onClick={() => handleClick('/curier')}>
              <ListItemIcon>
                <MailIcon />
              </ListItemIcon>
              <ListItemText primary="Curier" />
            </ListItem>
            <ListItem button onClick={() => handleClick('/client')}>
              <ListItemIcon>
                <MailIcon />
              </ListItemIcon>
              <ListItemText primary="Client" />
            </ListItem>
            <ListItem button onClick={() => handleClick('/Form')}>
              <ListItemIcon>
                <MailIcon />
              </ListItemIcon>
              <ListItemText primary="Admin" />
            </ListItem>
          </List>
        </Drawer>
      </div>
    </ThemeProvider>
  )
}

export default Appbar
