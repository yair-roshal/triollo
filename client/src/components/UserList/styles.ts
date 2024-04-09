import { Button, TableCell } from "@mui/material"
import { styled } from "@mui/material/styles"

export const StyledButton = styled(Button)({
  "marginLeft": "8px",
  "backgroundColor": "#1976d2",
  "color": "white",
  "&:hover": {
    backgroundColor: "#135ba1",
  },
})

export const StyledTableCell = styled(TableCell)({
  fontWeight: "bold",
})
