import React, { Component } from 'react'
import { Dialog, AppBar, Button } from '@mui/material'
import colors from '../Classes/colors'
import { ThemeProvider } from '@mui/material/styles'

export class Success extends Component {
  continue = (e) => {
    e.preventDefault()
    this.props.nextStep()
  }

  back = (e) => {
    e.preventDefault()
    this.props.prevStep()
  }

  render() {
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
                  borderRadius: '1.4%',
                }}
              />
            )}
          >
            <AppBar title="Success" />
            <h1>Thank You For Your Submission</h1>

            <Button color="primary" variant="contained">
              Continue
            </Button>
          </Dialog>
        </ThemeProvider>
      </>
    )
  }
}

export default Success
