import { Box, Typography } from "@mui/material"
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

import ProductTitle from "@productTitle"

export const FashionHouse=()=>{
    return (
        <>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            color: 'rgb(25, 177, 106)',
          }}
        >
          <Typography component={'h6'}>همه کالاهای 
            خانه مد
          </Typography>
          <ArrowBackIosIcon style={{ width: '.8rem' }} />
        </Box>
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit,minmax(100px,1fr))',
            marginTop: '1rem',
            gap: '1rem',
          }}
        >
  
          
     
          <ProductTitle imageAddress="/img2/mod.png" productName="لوازم خانه" />
          <ProductTitle imageAddress="/img2/mod.png" productName="لوازم خانه" />
          <ProductTitle imageAddress="/img2/mod.png" productName="لوازم خانه" />
          <ProductTitle imageAddress="/img2/mod.png" productName="لوازم خانه" />
          <ProductTitle imageAddress="/img2/mod.png" productName="لوازم خانه" />
      </Box>
      </>
    )
}