import { Box } from "@mui/material"
import { styled } from "@mui/material/styles"

export const StyledBox = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  maxWidth: "95%",
  maxHeight: "95%",
  backgroundColor: theme.palette.background.paper,
  border: "2px solid #000",
  boxShadow: theme.shadows[24],
  padding: theme.spacing(4),
}))
