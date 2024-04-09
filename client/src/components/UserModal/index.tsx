import React from "react"
import { useParams } from "react-router-dom"
import { useListUsersContext } from "../../context/listUsersContext"
import { UsersDataProps } from "../../services/types"
import { StyledBox } from "./styles"
import { Modal, Typography, Grid, Avatar } from "@mui/material"

const UserModal: React.FC = () => {
  const { id } = useParams<{ id: string }>()
  const { usersData, handleModal, openModal } = useListUsersContext()

  const user = usersData.find((u: UsersDataProps) => u.login.username === id)

  const handleClose = () => {
    handleModal(false)
  }

  return (
    <Modal open={openModal} onClose={handleClose}>
      <StyledBox>
        {user && (
          <Grid container spacing={2}>
            <Grid item xs={4}>
              <Avatar
                alt={`${user.name.first} ${user.name.last}`}
                src={user.picture.large}
                sx={{
                  width: "100%",
                  height: "auto",
                }}
              />
            </Grid>
            <Grid item xs={8}>
              <Typography variant="h5">
                {user.name.first} {user.name.last}
              </Typography>
              <Typography variant="body1">Email: {user.email}</Typography>
              <Typography variant="body1">Gender: {user.gender}</Typography>
              <Typography variant="body1">
                Date of Birth: {user.dob.date}
              </Typography>
              <Typography variant="body1">Nationality: {user.nat}</Typography>
            </Grid>
          </Grid>
        )}
      </StyledBox>
    </Modal>
  )
}

export default UserModal
