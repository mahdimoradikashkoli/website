import {Box} from "@mui/material"
import {suggestionComponenType} from "./type"
export const SuggestionComponen:React.FC<suggestionComponenType>=({value})=>{
    return <Box
              component={"button"}
              sx={{
                border: ".1rem solid rgba(180,180,180,.2)",
                outline: "none",
                padding: ".4rem .5rem",
                backgroundColor: "rgba(200,200,200,.3)",
                borderRadius:'5rem',
                fontStyle:'italic',
                fontSize:'1rem',
                flexShrink:'0',
                ":hover":{backgroundColor:'rgb(150,150,150)'},
                ":active":{backgroundColor:'rgb(15,15,150)'}
              }}
            >
              {value}
            </Box>
    
}