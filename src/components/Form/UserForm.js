import React, { Component } from 'react'
import FormUserDetails from './FormUserDetails'

export class UserForm extends Component {
  state = {
    step: 1,
    contact: '',
    sediuPornire: '',
    destinatie: '',
    contactDestinatar: '',
    greutate: '',
    categorie: {
      fragil,
      pretios,
      periculos,
    },
  }
  nextStep = () => {
    const { step } = this.state
    this.setState({ step: step + 1 })
  }
  prevStep = () => {
    const { step } = this.state
    this.setState({ step: step - 1 })
  }

  handleChange = (input) => (e) => {
    this.setState({ [input]: e.target.value })
  }

  render() {
    const { step } = this.state
    const {
      contact,
      sediuPornire,
      destinatie,
      contactDestinatar,
      greutate,
      categorie,
    } = this.state
    const values = {
      contact,
      sediuPornire,
      destinatie,
      contactDestinatar,
      greutate,
      categorie,
    }
    switch (step) {
      case 1:
        return (
          <FormUserDetails
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        )
      case 2:
        return <h1>FormPersonalDetails</h1>
      case 3:
        return <h1>Confirm</h1>
      case 4:
        return <h1>Success</h1>
    }
  }
}

export default UserForm
