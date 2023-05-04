import React from 'react'
import DataTable from '../comp/dataGrid'
import { ThemeProvider } from '@emotion/react'
import colors from '../Classes/colors'
import CurierSlider from '../comp/curierSlider'
import './adminPage.css'

const AdminPage = () => {
  return (
    <div className="admin-page-container">
      <ThemeProvider theme={colors}>
        <div className="table-container">
          <h3>Admin Grid</h3>
          <DataTable />
        </div>
        <div>
          <h3>Curier Slider</h3>
          <CurierSlider />
        </div>
      </ThemeProvider>
    </div>
  )
}

export default AdminPage
