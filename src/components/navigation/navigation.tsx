import { Box, Container, Typography } from "@mui/material"
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import {navigationType} from "./type"

export const Navigation:React.FC<navigationType>=({backAddress,titleOfPage,className})=>{
   
    
    return (
        <Box
        sx={
          {
          textAlign: "center",
          alignContent: "center",
          position:'fixed',
          top:"0",
          right:'0',
          left:'0',
          width: "100%",
          height: "3rem",
          backgroundColor: "rgb(250,250,250)",
          borderBottom:".001rem solid rgb(200,200,200)",
          ...(className)
        }}
      >
        <Container>
          <Typography sx={{ display: "inline-block", float: "center" }}>
            {titleOfPage}
          </Typography>
          <ArrowBackIcon onClick={backAddress} style={{ display: "inline-block", float: "left" ,cursor:'pointer'}} />
        </Container>
      </Box>
    )
}