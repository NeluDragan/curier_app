import React, { Component } from 'react'
import {
  AppBar,
  Dialog,
  Button,
  TextField,
  ThemeProvider,
  Select,
  MenuItem,
} from '@mui/material'
import colors from '../Classes/colors'
import judete from '../Classes/judete'

export class FormUserDetails extends Component {
  state = {
    judet: '',
  }

  handleChange = (input) => (e) => {
    this.setState({ [input]: e.target.value })
  }

  continue = (e) => {
    e.preventDefault()
    this.props.nextStep()
  }

  render() {
    const { values, handleChange } = this.props
    const { judet } = this.state

    const TextFieldStyle = {
      width: '45%',
      margin: 'auto',
      position: 'relative',
      justifyContent: 'left',
    }
    const disableButton =
      !values.contact || !values.contactDestinatar || !values.destinatie // Check if any of the fields are empty
    return (
      <>
        <ThemeProvider theme={colors}>
          <Dialog
            open
            fullWidth
            maxWidth="sm"
            PaperProps={{
              style: {
                backgroundColor: colors.palette.dialog.main,
                borderRadius: '1.2%',
              },
            }}
          >
            <AppBar title="Enter User Details" />
            <br />
            <TextField
              style={TextFieldStyle}
              placeholder="Ion Branza"
              label="Nume Prenume"
              onChange={handleChange('contact')}
              defaultValue={values.contact}
              margin="normal"
            />
            <br />
            <TextField
              style={TextFieldStyle}
              placeholder="Vania Branza"
              label="Nume Prenume Destinatar"
              onChange={handleChange('contactDestinatar')}
              defaultValue={values.contactDestinatar}
              margin="normal"
            />
            <br />
            <TextField
              style={TextFieldStyle}
              label="Destinatie"
              select
              onChange={handleChange('destinatie')}
              value={values.destinatie}
            >
              {judete.map((judet) => (
                <MenuItem key={judet} value={judet}>
                  {judet}
                </MenuItem>
              ))}
            </TextField>
            <br />
            <br />
            <br />
            <br />
            <Button
              color="primary"
              variant="contained"
              onClick={this.continue}
              disabled={disableButton}
            >
              Continue
            </Button>
          </Dialog>
        </ThemeProvider>
      </>
    )
  }
}

export default FormUserDetails
