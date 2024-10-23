import { Box, Typography } from '@mui/material';
import { divisionType } from './type';

export const Division: React.FC<divisionType> = ({
  categoryImage,
  categoryName,
  categoryImageAddress,
  classNameForImage,
  classNameFortext,
  classNameFordivision,
  onClick
}) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        height: '4.7rem',
        padding: '.5rem',
        alignItems: 'center',
        backgroundColor: 'rgb(245, 245, 247)',
        outline: 'none',
        border: 'none',
        cursor:"pointer",
        ...(classNameFordivision)
      }}
      onClick={onClick}
    >
      {categoryImageAddress ? (
        <Box
          component={'img'}
          src="/img/cloth.png"
          sx={{ width: '2rem', height: '2rem' , ...(classNameForImage)}}
        ></Box>
      ) : (
        categoryImage
      )}
      <Typography
        component={'span'}
        sx={{ color: 'rgb(83, 86, 90)', fontSize: '.9rem', fontWeight: 'bold', ...(classNameFortext) }}
      >
        {categoryName}
      </Typography>
    </Box>
  );
};
