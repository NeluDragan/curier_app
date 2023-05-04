import React, { Component } from 'react'
import {
  AppBar,
  Dialog,
  Button,
  List,
  ListItem,
  ListItemText,
  ThemeProvider,
} from '@mui/material'
import colors from '../Classes/colors'
export class Confirm extends Component {
  continue = (e) => {
    e.preventDefault()

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
        <ThemeProvider theme={colors}>
          <Dialog
            open
            fullWidth
            maxWidth="sm"
            PaperComponent={(props) => (
              <div
                {...props}
                style={{
                  backgroundColor: colors.palette.dialog.main,
                  borderRadius: '1.2%',
                }}
              />
            )}
          >
            <AppBar title="Confirm User Data" />
            <List>
              <ListItem>
                <ListItemText primary="Nume" secondary={contact} />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary="Sediu de pornire"
                  secondary={sediuPornire}
                />
              </ListItem>
              <ListItem>
                <ListItemText primary="Destinatie" secondary={destinatie} />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary="Contact destinatar"
                  secondary={contactDestinatar}
                />
              </ListItem>
              <ListItem>
                <ListItemText primary="Greutate" secondary={greutate} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Categorie" secondary={categorie} />
              </ListItem>
            </List>
            <br />

            <Button color="secondary" variant="contained" onClick={this.back}>
              Back
            </Button>
            <br />
            <Button color="primary" variant="contained" onClick={this.continue}>
              Confirm & Continue
            </Button>
          </Dialog>
        </ThemeProvider>
      </>
    )
  }
}

export default Confirm
