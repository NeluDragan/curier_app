import React, { Component } from 'react'
import {
  AppBar,
  Dialog,
  Button,
  List,
  ListItem,
  ListItemText,
} from '@mui/material'

export class Confirm extends Component {
  continue = (e) => {
    e.preventDefault()
    // PROCESS FORM //
    this.props.nextStep()
  }

  back = (e) => {
    e.preventDefault()
    this.props.prevStep()
  }

  render() {
    const {
      values: {
        contact,
        sediuPornire,
        destinatie,
        contactDestinatar,
        greutate,
        categorie,
      },
    } = this.props
    return (
      <>
        <Dialog open fullWidth maxWidth="sm">
          <AppBar title="Confirm User Data" />
          <List>
            <ListItem>
              <ListItemText primary="First Name" secondary={contact} />
            </ListItem>
            <ListItem>
              <ListItemText primary="Last Name" secondary={sediuPornire} />
            </ListItem>
            <ListItem>
              <ListItemText primary="Email" secondary={destinatie} />
            </ListItem>
            <ListItem>
              <ListItemText
                primary="Occupation"
                secondary={contactDestinatar}
              />
            </ListItem>
            <ListItem>
              <ListItemText primary="City" secondary={greutate} />
            </ListItem>
            <ListItem>
              <ListItemText primary="Bio" secondary={categorie} />
            </ListItem>
          </List>
          <br />

          <Button color="secondary" variant="contained" onClick={this.back}>
            Back
          </Button>

          <Button color="primary" variant="contained" onClick={this.continue}>
            Confirm & Continue
          </Button>
        </Dialog>
      </>
    )
  }
}

export default Confirm
