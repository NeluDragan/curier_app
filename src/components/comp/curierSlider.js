import * as React from 'react'
import Box from '@mui/material/Box'
import Slider from '@mui/material/Slider'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogTitle from '@mui/material/DialogTitle'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogActions from '@mui/material/DialogActions'
import colors from '../Classes/colors'

function valuetext(value) {
  return `${value} km`
}

const CurierSlider = () => {
  const [sliderValue, setSliderValue] = React.useState(30)
  const max = 110
  const handleSliderChange = (event, newValue) => {
    setSliderValue(newValue)
  }

  const handleButtonClick = () => {
    if (sliderValue < max) {
      setSliderValue(sliderValue + 10)
    }
  }

  const handleCloseDialog = () => {
    setSliderValue(0)
  }

  return (
    <Box sx={{ width: 300 }}>
      <Slider
        aria-label="Temperature"
        value={sliderValue}
        onChange={handleSliderChange}
        getAriaValueText={valuetext}
        valueLabelDisplay="auto"
        step={10}
        marks
        min={10}
        max={max}
        sx={{
          '& .MuiSlider-track': {
            color: colors.palette.secondary.main,
          },
          '& .MuiSlider-thumb': {
            color: colors.palette.secondary.main,
          },
        }}
      />
      <Button
        variant="contained"
        disabled={sliderValue === max}
        onClick={handleButtonClick}
        sx={{ backgroundColor: colors.palette.secondary.main }}
      >
        Increase by one step
      </Button>
      <Dialog open={sliderValue === max} onClose={handleCloseDialog}>
        <DialogTitle>Your purse arrived</DialogTitle>
        <DialogContent>
          <DialogContentText>Your purse has been delivered.</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog}>OK</Button>
        </DialogActions>
      </Dialog>
    </Box>
  )
}

export default CurierSlider
