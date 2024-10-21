import React from "react";
import { styled } from "@mui/material/styles";
import Fab from "@mui/material/Fab";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

// Define a styled component with the styles
const StyledFab = styled(Fab)({
  position: "fixed",
  width: "50px",
  height: "50px",
  bottom: "40px",
  right: "20px",
  backgroundColor: "#25d366",
  color: "#fff",
  borderRadius: "50px",
  textAlign: "center",
  fontSize: "30px",
  boxShadow: "2px 2px 3px #999",
  zIndex: 100,
  "&:hover": {
    backgroundColor: "#128C7E",
  },
});

const WhatsAppButton = () => {
  return (
    <StyledFab
      href="https://wa.me/8861796976"
      target="_blank"
      rel="noopener noreferrer"
    >
      <WhatsAppIcon />
    </StyledFab>
  );
};

export default WhatsAppButton;
