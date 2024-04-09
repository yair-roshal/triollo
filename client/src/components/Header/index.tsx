import * as React from "react"
import AppBar from "@mui/material/AppBar"
import Stack from "@mui/material/Stack"
import Box from "@mui/material/Box"
import Toolbar from "@mui/material/Toolbar"
import Typography from "@mui/material/Typography" 

export default function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Stack direction="row" spacing={2}></Stack>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  )
}
