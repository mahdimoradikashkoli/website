import { Box, Typography } from '@mui/material';
import ProductTitle from '@productTitle';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

export const SportsAndTravel = () => {
  return (
    <>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          color: 'rgb(25, 177, 106)',
        }}
      >
        <Typography component={'h6'}>همه کالاهای ورزش و سفر</Typography>
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
        <ProductTitle
          imageAddress="/img2/sport.png"
          productName="لوازم ورزشی"
        />
        <ProductTitle
          imageAddress="/img2/sport.png"
          productName="لوازم ورزشی"
        />
        <ProductTitle
          imageAddress="/img2/sport.png"
          productName="لوازم ورزشی"
        />
        <ProductTitle
          imageAddress="/img2/sport.png"
          productName="لوازم ورزشی"
        />
        <ProductTitle
          imageAddress="/img2/sport.png"
          productName="لوازم ورزشی"
        />
      </Box>
   
      
    </>
  );
};
