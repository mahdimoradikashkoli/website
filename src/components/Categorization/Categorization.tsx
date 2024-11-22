import { Box } from "@mui/material"
import { Outlet } from "react-router-dom"

const CategorizationLayout=()=>{
    return (
        <Box>
            <Outlet/>
        </Box>
    )
}
export default CategorizationLayout