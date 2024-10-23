import { Box, Typography } from '@mui/material';
import ProductTitle from '@productTitle';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

export const WatchAndGold = () => {
  return (
    <>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          color: 'rgb(25, 177, 106)',
        }}
      >
        <Typography component={'h6'}>همه کالاهای ساعت و طلا</Typography>
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
        <ProductTitle imageAddress="/img2/watch.png" productName="ساعت مچی" />

        <ProductTitle imageAddress="/img2/watch.png" productName="ساعت مچی" />
        <ProductTitle imageAddress="/img2/watch.png" productName="ساعت مچی" />
        <ProductTitle imageAddress="/img2/watch.png" productName="ساعت مچی" />
        <ProductTitle imageAddress="/img2/watch.png" productName="ساعت مچی" />
        <ProductTitle imageAddress="/img2/watch.png" productName="ساعت مچی" />
        <ProductTitle imageAddress="/img2/watch.png" productName="ساعت مچی" />
        <ProductTitle imageAddress="/img2/watch.png" productName="ساعت مچی" />
        <ProductTitle imageAddress="/img2/watch.png" productName="ساعت مچی" />
        <ProductTitle imageAddress="/img2/watch.png" productName="ساعت مچی" />
        <ProductTitle imageAddress="/img2/watch.png" productName="ساعت مچی" />
      </Box>
    
    </>
  );
};
