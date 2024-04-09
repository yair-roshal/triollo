import * as React from "react"
import AppBar from "@mui/material/AppBar"
import Stack from "@mui/material/Stack"
import Box from "@mui/material/Box"
import Toolbar from "@mui/material/Toolbar"
import Typography from "@mui/material/Typography"
import IconButton from "@mui/material/IconButton"
import AccountCircle from "@mui/icons-material/AccountCircle"

export default function Footer() {
  return (
    <Box sx={{ flexGrow: 1, width: 200 }}>
      <Stack direction="row" spacing={2}></Stack>
      <AppBar position="static" sx={{ backgroundColor: "#ffffff" }}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 ,color : "black"}}>
            John Doe
          </Typography>
          <div>
            <IconButton size="large">
              <AccountCircle />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  )
}
