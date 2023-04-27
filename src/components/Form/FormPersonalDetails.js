import React, { Component } from 'react'

import { AppBar, Dialog, Button, TextField } from '@mui/material'

export class FormPersonalDetails extends Component {
  continue = (e) => {
    e.preventDefault()
    this.props.nextStep()
  }

  back = (e) => {
    e.preventDefault()
    this.props.prevStep()
  }

  render() {
    const { values, handleChange } = this.props
    const buttonArrange = {
      display: 'inline-block',
      TextAlign: 'justify',
      justifyContent: 'center',
      alignItems: 'center',
    }
    return (
      <>
        <Dialog open fullWidth maxWidth="sm">
          <AppBar title="Enter Personal Details" />
          <TextField
            placeholder="Fragile / Precious / Dangerous"
            label="Categorie"
            onChange={handleChange('categorie')}
            defaultValue={values.categorie}
            margin="normal"
            fullWidth
          />
          <br />
          <TextField
            placeholder="Oradea"
            label="Orasul de plecare"
            onChange={handleChange('sediuPornire')}
            defaultValue={values.sediuPornire}
            margin="normal"
            fullWidth
          />
          <br />
          <TextField
            placeholder="3"
            label="Greutatea coletului"
            onChange={handleChange('greutate')}
            defaultValue={values.greutate}
            margin="normal"
          />
          <br />

          <div style={buttonArrange}>
            <Button color="secondary" variant="contained" onClick={this.back}>
              Back
            </Button>
            <Button color="primary" variant="contained" onClick={this.continue}>
              Continue
            </Button>{' '}
          </div>
        </Dialog>
      </>
    )
  }
}

export default FormPersonalDetails
