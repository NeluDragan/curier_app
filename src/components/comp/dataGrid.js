import * as React from 'react'
import { DataGrid, GridActionsCellItem } from '@mui/x-data-grid'
import DeleteIcon from '@mui/icons-material/Delete'
import SecurityIcon from '@mui/icons-material/Security'
import FileCopyIcon from '@mui/icons-material/FileCopy'
import colors from '../Classes/colors'
import { ThemeProvider } from '@emotion/react'

const initialRows = [
  {
    id: 1,
    name: 'Damien',
    age: 25,
    isAdmin: true,
    role: 'Admin',
  },
  {
    id: 2,
    name: 'Nicolas',
    age: 36,
    isAdmin: false,
    role: 'Client',
  },
  {
    id: 3,
    name: 'Kate',
    age: 19,
    isAdmin: false,
    role: 'Curier',
  },
]

export default function ColumnTypesGrid() {
  const [rows, setRows] = React.useState(initialRows)

  const deleteUser = React.useCallback(
    (id) => () => {
      setTimeout(() => {
        setRows((prevRows) => prevRows.filter((row) => row.id !== id))
      })
    },
    [],
  )

  const toggleAdmin = React.useCallback(
    (id) => () => {
      setRows((prevRows) =>
        prevRows.map((row) =>
          row.id === id ? { ...row, isAdmin: !row.isAdmin } : row,
        ),
      )
    },
    [],
  )

  const duplicateUser = React.useCallback(
    (id) => () => {
      setRows((prevRows) => {
        const rowToDuplicate = prevRows.find((row) => row.id === id)
        return [...prevRows, { ...rowToDuplicate, id: Date.now() }]
      })
    },
    [],
  )

  const columns = React.useMemo(
    () => [
      { field: 'name', type: 'string' },
      { field: 'age', type: 'number' },
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
          rows={rows}
        />
      </div>
    </ThemeProvider>
  )
}
