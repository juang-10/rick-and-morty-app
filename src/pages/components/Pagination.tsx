import { Box } from '@mui/material';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

interface PaginationRoundedProps {
  count: number;
  page: number;
  onChange: (event: React.ChangeEvent<unknown>, value: number) => void;
}
export const PaginationRounded = ({
  count,
  page,
  onChange,
}: PaginationRoundedProps) => {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
      <Stack spacing={2}>
        <Pagination
          count={count}
          page={page}
          onChange={onChange}
          shape="rounded"
        />
      </Stack>
    </Box>
  );
};
