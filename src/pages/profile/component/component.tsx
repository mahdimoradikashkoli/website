import { Box } from "@mui/material"
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import {ComponentType} from "./type"

export const Component:React.FC<ComponentType>=({href,title})=>{
    return (
        <Box
              sx={{
                padding:"1rem",
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <Box
                component={'span'}
                sx={{
                  display: 'inline-block',
                  color: 'rgb(50,50,50)',
                  fontSize: '1.2rem',
                }}
              >
                {title}
              </Box>
              <ArrowBackIosIcon style={{width:"1rem",height:"1rem"}} onClick={()=>{href}}/>
            </Box>
    )
}