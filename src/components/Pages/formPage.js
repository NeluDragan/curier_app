import React from 'react'
import { useNavigate } from 'react-router-dom'
import colors from '../Classes/colors'
import UserForm from '../Form/UserForm'

const formPage = () => {
  const navigate = useNavigate()
  return (
    <div>
      <UserForm></UserForm>
    </div>
  )
}
export default formPage
