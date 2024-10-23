import { Box, Typography } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ProductTitle from '@productTitle';

export const BeautyAndHealth = () => {
  return (
    <>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          color: 'rgb(25, 177, 106)',
        }}
      >
        <Typography component={'h6'}>همه کالاهای زیبایی و سلامت</Typography>
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
          imageAddress="/beautyAndHealth/atr.png"
          productName="عطر و ادکلن"
        />
        <ProductTitle
          imageAddress="/img2/arayesh.png"
          productName="لوازم آرایشی"
        />
        <ProductTitle
          imageAddress="/img2/behdash.png"
          productName="لوازم بهداشتی"
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
          imageAddress="/img2/ban.png"
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
          imageAddress="/beautyAndHealth/atr.png"
          productName="عطر و ادکلن"
        />
      </Box>
      
    </>
  );
};
