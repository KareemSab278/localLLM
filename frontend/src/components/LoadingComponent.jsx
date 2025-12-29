import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';

export {LoadingComponent};

const LoadingComponent = (width = 300) => {
  return (
    <Box sx={{ width: width }}>
      <Skeleton />
      <Skeleton animation="wave" />
      <Skeleton animation={false} />
    </Box>
  );
}
