import React from 'react'
import { useNavigate } from 'react-router-dom'
import colors from './colors'
import DataTable from './dataGrid'

const adminPage = () => {
  const navigate = useNavigate()

  return (
    <div>
      <DataTable />
      <button color={colors.buttons} onClick={() => navigate(-1)}>
        Log out
      </button>
    </div>
  )
}
export default adminPage
