import React, { Component } from 'react'
import FormUserDetails from './FormUserDetail.js'
import FormPersonalDetails from './FormPersonalDetails.js'
//import Success from './Succes.js'
import Confirm from './Confirm.js'
export class UserForm extends Component {
  state = {
    step: 1,
    contact: '',
    sediuPornire: '',
    destinatie: '',
    contactDestinatar: '',
    greutate: '',
    categorie: '',
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
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        )
      case 2:
        return (
          <FormPersonalDetails
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        )
      case 3:
        return (
          <Confirm
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            values={values}
          />
        )
    }
  }
}

export default UserForm
