import { Box } from "@mui/material"
import { Outlet } from "react-router-dom"

const ProfileLayout=()=>{
    return (
        
        <>
        <Box>
            <Outlet/>
        </Box>
        </>
    )
}
export default ProfileLayout