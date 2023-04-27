import React from 'react'
import DataTable from '../comp/dataGrid'
import { useNavigate } from 'react-router-dom'
import Appbar from '../comp/AppBar'

const adminPage = () => {
  const navigate = useNavigate()
  return (
    <div>
      <DataTable />
      <button type="submit" color="primary" onClick={() => navigate(-1)}>
        Sign out
      </button>
    </div>
  )
}
export default adminPage
