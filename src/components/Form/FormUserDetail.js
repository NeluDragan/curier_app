import React, { Component } from 'react'

import { AppBar, Dialog, Button, TextField } from '@mui/material'

export class FormUserDetails extends Component {
  continue = (e) => {
    e.preventDefault()
    this.props.nextStep()
  }

  render() {
    const { values, handleChange } = this.props
    return (
      <>
        <Dialog open fullWidth maxWidth="sm">
          <AppBar title="Enter User Details" />
          <TextField
            placeholder="Ion Branza"
            label="Nume Prenume"
            onChange={handleChange('contact')}
            defaultValue={values.contact}
            margin="normal"
          />
          <TextField
            placeholder="Vania Branza"
            label="Nume Prenume Destinatar"
            onChange={handleChange('contactDestinatar')}
            defaultValue={values.contactDestinatar}
            margin="normal"
          />

          <TextField
            placeholder="Timisoara"
            label="Destinatie"
            onChange={handleChange('destinatie')}
            defaultValue={values.destinatie}
            margin="normal"
          />
          <br />
          <Button color="primary" variant="contained" onClick={this.continue}>
            Continue
          </Button>
        </Dialog>
      </>
    )
  }
}

export default FormUserDetails
