
import { Box, Typography } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ProductTitle from '@productTitle';
export const CultureAndArt=()=>{
    return (
        <>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            color: 'rgb(25, 177, 106)',
          }}
        >
          <Typography component={'h6'}>همه کالاهای فرهنگ و هنر</Typography>
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
  
          
     
          <ProductTitle imageAddress="/img2/art.png" productName="محصولات مذهبی" />
          <ProductTitle imageAddress="/img2/art.png" productName="محصولات مذهبی" />
          <ProductTitle imageAddress="/img2/art.png" productName="محصولات مذهبی" />
          <ProductTitle imageAddress="/img2/art.png" productName="محصولات مذهبی" />
          <ProductTitle imageAddress="/img2/art.png" productName="محصولات مذهبی" />
          <ProductTitle imageAddress="/img2/art.png" productName="محصولات مذهبی" />
          <ProductTitle imageAddress="/img2/art.png" productName="محصولات مذهبی" />
          <ProductTitle imageAddress="/img2/art.png" productName="محصولات مذهبی" />
          <ProductTitle imageAddress="/img2/art.png" productName="محصولات مذهبی" />
          <ProductTitle imageAddress="/img2/art.png" productName="محصولات مذهبی" />
          <ProductTitle imageAddress="/img2/art.png" productName="محصولات مذهبی" />
          <ProductTitle imageAddress="/img2/art.png" productName="محصولات مذهبی" />
         
      </Box>
      </>
    )
    
}