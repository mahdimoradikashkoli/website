import { Box, Container } from '@mui/material';
import Skeleton from '@mui/material/Skeleton';

export const HomeSkeletone = () => {
  return (
    <Container>
      <Box sx={{marginTop:'1rem'}}>
        <Skeleton variant="rectangular" width={'100%'} height={30} />
        <Skeleton style={{marginTop:"1rem"}} variant="rectangular" width={'100%'} height={200} />
        <Skeleton variant="text" width={200} height={40} />
        <Skeleton variant="text" width={250} height={20} />
      </Box>
      <Box sx={{ marginTop: '1rem' }}>
        <Skeleton variant="rectangular" width={'100%'} height={100} />
        <Skeleton variant="text" width={200} height={40} />
        <Skeleton variant="text" width={250} height={20} />
      </Box>
      <Box sx={{ marginTop: '2rem' }}>
        <Skeleton style={{marginBottom:"1rem"}} variant="circular" width={200} height={40} />
        <Skeleton variant="rectangular" width={'100%'} height={100} />
        <Skeleton variant="text" width={250} height={20} />
      </Box>
    </Container>
  );
};
