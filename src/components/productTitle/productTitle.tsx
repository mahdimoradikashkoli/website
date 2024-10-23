import { Box, Typography } from '@mui/material';
import { productTitleType } from './type';

const ProductTitle: React.FC<productTitleType> = ({
  imageAddress,
  productName,
  className,
  onClick
}) => {
  return (
    <>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '.2rem',
          ...(className)
        }}
      >
        <Box
          sx={{
            padding: '.5rem',
            borderRadius: '.5rem',
            width: 'fit-content',
            backgroundColor: 'rgb(245, 245, 247)',
          }}
        >
          <Box
            component={'img'}
            style={{ maxWidth: '4rem' }}
            src={imageAddress}
            onClick={onClick}
            alt='cant load image'
          ></Box>
        </Box>

        <Typography component={'span'}>{productName}</Typography>
      </Box>
    </>
  );
};
export default ProductTitle;
