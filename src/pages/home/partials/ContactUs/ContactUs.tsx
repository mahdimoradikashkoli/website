import { Box, Typography } from "@mui/material";
import CallIcon from "@mui/icons-material/Call";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";

export const ContactUs = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        marginTop: "1rem",
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", gap: ".5rem" }}>
        <CallIcon style={{ color: "#26af6e" }} />
        <Typography fontSize={".8rem"}>021-49215</Typography>
      </Box>
      <Box sx={{ display: "flex", alignItems: "center", gap: ".5rem" }}>
        <ChatBubbleOutlineIcon style={{ color: "#26af6e" }} />
        <Typography fontSize={".8rem"}>10003245</Typography>
      </Box>
      <Box sx={{ display: "flex", alignItems: "center", gap: ".5rem" }}>
        <AlternateEmailIcon style={{ color: "#26af6e" }} />
        <Typography fontSize={".8rem"}>customer@digiandbani.com</Typography>
      </Box>
    </Box>
  );
};
