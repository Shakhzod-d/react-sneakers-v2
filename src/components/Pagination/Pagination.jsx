import * as React from 'react';
import { Pagination, Stack } from '@mui/material';

import './Pagination.css';

export const MUIPagination = ({ changePageCount }) => {
  const test = (a, pageCount) => {
    changePageCount(pageCount);
  };
  return (
    <div className="mui_pagination">
      <Stack spacing={2}>
        <Pagination onChange={test} count={3} color="primary" />
      </Stack>
    </div>
  );
};
