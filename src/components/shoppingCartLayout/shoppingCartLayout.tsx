import { Box } from "@mui/material"
import { Outlet } from "react-router-dom"

 const ShoppingCartLayout=()=>{
    return (
        <Box>
            <Outlet/>
        </Box>
    )
}
export default ShoppingCartLayout