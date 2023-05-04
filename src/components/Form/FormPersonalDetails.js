import React, { Component } from 'react'
import judete from '../Classes/judete'
import { Dialog, Button, TextField, MenuItem } from '@mui/material'
import colors from '../Classes/colors'
import { ThemeProvider } from '@mui/material/styles'

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

    const TextFieldStyle = {
      width: '45%',
      margin: 'auto',
      position: 'relative',
      justifyContent: 'left',
    }

    const disableButton =
      !values.categorie || !values.sediuPornire || !values.greutate // Check if any of the fields are empty

    return (
      <>
        <ThemeProvider theme={colors}>
          <Dialog
            open
            fullWidth
            PaperProps={{
              style: {
                backgroundColor: colors.palette.dialog.main,
                borderRadius: '1.2%',
              },
            }}
          >
            <br />
            <TextField
              style={TextFieldStyle}
              label="Categorie"
              value={values.categorie}
              onChange={handleChange('categorie')}
              margin="normal"
              select
            >
              <MenuItem value="Fragile">Fragile</MenuItem>
              <MenuItem value="Precious">Precious</MenuItem>
              <MenuItem value="Dangerous">Dangerous</MenuItem>
            </TextField>
            <br />
            <TextField
              style={TextFieldStyle}
              label="Sediu pornire"
              select
              onChange={handleChange('sediuPornire')}
              value={values.sediuPornire}
            >
              {judete.map((judet) => (
                <MenuItem key={judet} value={judet}>
                  {judet}
                </MenuItem>
              ))}
            </TextField>

            <br />
            <TextField
              style={TextFieldStyle}
              placeholder="1"
              label="Greutatea coletului"
              onChange={handleChange('greutate')}
              defaultValue={values.greutate}
              margin="normal"
              type="number"
              inputProps={{ min: 1, max: 3 }}
            />
            <br />
            <br />
            <br />

            <Button color="secondary" variant="contained" onClick={this.back}>
              Back
            </Button>
            <br />
            <Button
              color="primary"
              variant="contained"
              onClick={this.continue}
              disabled={disableButton}
            >
              Submit
            </Button>
          </Dialog>
        </ThemeProvider>
      </>
    )
  }
}

export default FormPersonalDetails
