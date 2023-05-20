import * as React from 'react'
import { DataGrid, GridActionsCellItem } from '@mui/x-data-grid'
import DeleteIcon from '@mui/icons-material/Delete'
import SecurityIcon from '@mui/icons-material/Security'
import FileCopyIcon from '@mui/icons-material/FileCopy'
import colors from '../Classes/colors'
import { ThemeProvider } from '@emotion/react'
import { get } from '../connections/httpCon'
import { User } from '../Classes/user'

const ColumnTypesGrid = () => {
  const [users, setUsers] = React.useState([])

  React.useEffect(() => {
    get('/users/all_users').then((data) => {
      const raw_users = data.map(User.fromJSON)
      setUsers(raw_users)
    })
  })

  const deleteUser = React.useCallback(
    (id) => () => {
      setTimeout(() => {
        setUsers((prevRows) => prevRows.filter((row) => row.id !== id))
      })
    },
    [],
  )

  const toggleAdmin = React.useCallback(
    (id) => () => {
      setUsers((prevRows) =>
        prevRows.map((row) =>
          row.id === id ? { ...row, isAdmin: !row.isAdmin } : row,
        ),
      )
    },
    [],
  )

  const duplicateUser = React.useCallback(
    (id) => () => {
      setUsers((prevRows) => {
        const rowToDuplicate = prevRows.find((row) => row.id === id)
        return [...prevRows, { ...rowToDuplicate, id: Date.now() }]
      })
    },
    [],
  )

  const columns = React.useMemo(
    () => [
      { field: 'username', type: 'string' },
      { field: 'email', type: 'string' },
      { field: 'isAdmin', type: 'boolean', width: 120 },
      {
        field: 'role',
        type: 'singleSelect',
        width: 120,
        valueOptions: ['Admin', 'Curier', 'Expediator', 'Client'],
      },

      {
        field: 'actions',
        type: 'actions',
        width: 80,
        getActions: (params) => [
          <GridActionsCellItem
            key={params.id}
            icon={<DeleteIcon />}
            label="Delete"
            onClick={deleteUser(params.id)}
          />,
          <GridActionsCellItem
            key={params.id}
            icon={<SecurityIcon />}
            label="Toggle Admin"
            onClick={toggleAdmin(params.id)}
            showInMenu
          />,
          <GridActionsCellItem
            key={params.id}
            icon={<FileCopyIcon />}
            label="Duplicate User"
            onClick={duplicateUser(params.id)}
            showInMenu
          />,
        ],
      },
    ],
    [deleteUser, toggleAdmin, duplicateUser],
  )

  return (
    <ThemeProvider theme={colors}>
      <div style={{ height: 400, width: '100%' }}>
        <DataGrid
          sx={{ backgroundColor: colors.palette.dialog.main }}
          columns={columns}
          rows={users}
        />
      </div>
    </ThemeProvider>
  )
}

export default ColumnTypesGrid
