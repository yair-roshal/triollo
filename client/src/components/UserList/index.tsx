import React, { useEffect, useState } from "react"
import { useListUsersContext } from "../../context/listUsersContext"
import { UsersDataProps } from "../../services/types"
import { Link } from "react-router-dom"
import { StyledButton, StyledTableCell } from "./styles"

import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TextField,
  Grid,
  Select,
  MenuItem,
} from "@mui/material"
import api from "../../services/api"

const UserList: React.FC = () => {
  const {
    usersData,
    getUsersData,
    nameFilter,
    filterByName,
    genderFilter,
    filterByGender,
    nationalityFilter,
    filterByNationality,
    handleModal,
  } = useListUsersContext()

  const [page, setPage] = useState<number>(1)
  const [isLoading, setIsLoading] = useState<boolean>(false)

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setIsLoading(true)
        const response = await api.get<{ results: UsersDataProps[] }>(
          `?page=${page}&results=25`
        )
        getUsersData([...usersData, ...response.data.results])
      } catch (error) {
        console.error("Error fetching users:", error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchUsers()
    //eslint-disable-next-line
  }, [page])

  const filteredUsers = usersData
    ? usersData.filter((user: UsersDataProps) => {
        return (
          user.name.first.toLowerCase().includes(nameFilter.toLowerCase()) &&
          (genderFilter === "" || user.gender === genderFilter) &&
          (nationalityFilter === "" || user.nat === nationalityFilter)
        )
      })
    : []

  const nationalities: string[] = usersData
    ? Array.from(new Set(usersData.map((user: UsersDataProps) => user.nat)))
    : []

  const handleLoadMore = () => {
    setPage(page + 1)
  }

  const handleClick = () => {
    handleModal(true)
  }

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sx={{ m: 2 }}>
        <TextField
          id="searchInput"

          label="Search by name"
          value={nameFilter}
          onChange={(e) => filterByName(e.target.value)}
        />

        <StyledButton onClick={() => filterByGender("")}>All</StyledButton>
        <StyledButton onClick={() => filterByGender("male")}>Male</StyledButton>
        <StyledButton onClick={() => filterByGender("female")}>
          Female
        </StyledButton>
        <Select
          value={nationalityFilter}
          onChange={(e) => filterByNationality(e.target.value as string)}
          displayEmpty
          style={{ marginLeft: "8px", width: "200px" }}
        >
          <MenuItem value="">All</MenuItem>
          {nationalities.map((nationality) => (
            <MenuItem key={nationality} value={nationality}>
              {nationality}
            </MenuItem>
          ))}
        </Select>
      </Grid>
      <Grid item xs={12}>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <StyledTableCell>Name</StyledTableCell>
                <StyledTableCell>Email</StyledTableCell>
                <StyledTableCell>Gender</StyledTableCell>
                <StyledTableCell>Nationality</StyledTableCell>
                <StyledTableCell>Action</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredUsers.map((user: UsersDataProps) => (
                <TableRow key={user.login.username}>
                  <TableCell>
                    {user.name.first} {user.name.last}
                  </TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>{user.gender}</TableCell>
                  <TableCell>{user.nat}</TableCell>
                  <TableCell>
                    <StyledButton>
                      <Link
                        to={`/${user.login.username}`}
                        onClick={handleClick}
                      >
                        View
                      </Link>
                    </StyledButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        {!isLoading && (
          <StyledButton onClick={handleLoadMore} style={{ margin: "16px" }}>
            Load More
          </StyledButton>
        )}
        {isLoading && usersData && usersData.length === 0 && (
          <div style={{ textAlign: "center", marginTop: "16px" }}>
            Loading...
          </div>
        )}
      </Grid>
    </Grid>
  )
}

export default UserList
