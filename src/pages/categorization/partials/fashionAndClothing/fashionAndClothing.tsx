import { Box, Typography } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ProductTitle from '@productTitle';

export const FashionAndClothing = () => {
  return (
    <>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          color: 'rgb(25, 177, 106)',
        }}
      >
        <Typography component={'h6'}>همه کالاهای مد و پوشاک</Typography>
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
          imageAddress="/img2/zananeh.png"
          productName="لباس زنانه"
        />
        <ProductTitle
          imageAddress="/img2/zananeh.png"
          productName="لباس زنانه"
        />
        <ProductTitle
          imageAddress="/img2/zananeh.png"
          productName="لباس زنانه"
        />
        <ProductTitle
          imageAddress="/img2/zananeh.png"
          productName="لباس زنانه"
        />
        <ProductTitle
          imageAddress="/img2/zananeh.png"
          productName="لباس زنانه"
        />
        <ProductTitle
          imageAddress="/img2/zananeh.png"
          productName="لباس زنانه"
        />
        <ProductTitle
          imageAddress="/img2/zananeh.png"
          productName="لباس زنانه"
        />
        <ProductTitle
          imageAddress="/img2/zananeh.png"
          productName="لباس زنانه"
        />
        <ProductTitle
          imageAddress="/img2/zananeh.png"
          productName="لباس زنانه"
        />
        <ProductTitle
          imageAddress="/img2/zananeh.png"
          productName="لباس زنانه"
        />
        <ProductTitle
          imageAddress="/img2/zananeh.png"
          productName="لباس زنانه"
        />
      </Box>
      <Typography
        sx={{ fontSize: '1.2rem', fontWeight: 'bold', marginTop: '1.5rem' }}
      >
        برندهای برگزیده
      </Typography>
      <Box
        sx={{
          overflowX: 'auto',
          marginTop: '.8rem',
          display: 'flex',
          alignItems: 'center',
          gap: '1.4rem',
        }}
      >
        <Box
          component={'img'}
          src="https://www.banimode.com/img/menu/image/1727187187_169270.png"
          alt="brand image"
          sx={{maxWidth:'5rem',height:'2.3rem'}}
        ></Box>
        <Box
          component={'img'}
          src="https://www.banimode.com/img/menu/image/1727187212_940226.png"
          alt="brand image"
          sx={{maxWidth:'5rem',height:'2.3rem'}}
        ></Box>
        <Box
          component={'img'}
          src="https://www.banimode.com/img/menu/image/1726392162_624290.jpg"
          alt="brand image"
          sx={{maxWidth:'5rem',height:'2.3rem'}}
        ></Box>
        <Box
          component={'img'}
          src="https://www.banimode.com/img/menu/image/1727187212_940226.png"
          alt="brand image"
          sx={{maxWidth:'5rem',height:'2.3rem'}}
        ></Box>
        <Box
          component={'img'}
          src="https://www.banimode.com/img/menu/image/1727187405_643164.jpg"
          alt="brand image"
          sx={{maxWidth:'5rem',height:'2.3rem'}}
        ></Box>
        <Box
          component={'img'}
          src="https://www.banimode.com/img/menu/image/1726479062_866493.png"
          alt="brand image"
          sx={{maxWidth:'5rem',height:'2.3rem'}}
        ></Box>
      </Box>
    </>
  );
};
