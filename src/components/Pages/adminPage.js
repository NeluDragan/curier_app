import React from 'react'
import DataTable from '../comp/dataGrid'
import { useNavigate } from 'react-router-dom'
import { ThemeProvider } from '@emotion/react'
import colors from '../Classes/colors'

const adminPage = () => {
  const navigate = useNavigate()
  return (
    <div>
      <ThemeProvider theme={colors}>
        <DataTable />
        <button type="submit" color="primary" onClick={() => navigate(-1)}>
          Sign out
        </button>
      </ThemeProvider>
    </div>
  )
}
export default adminPage
