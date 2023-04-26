import React from 'react'
import { useNavigate } from 'react-router-dom'
import colors from './colors'

const formPage = () => {
  const navigate = useNavigate()
  return (
    <div>
      <button color={colors.buttons} onClick={() => navigate(-1)}>
        Log out
      </button>
    </div>
  )
}
export default formPage
