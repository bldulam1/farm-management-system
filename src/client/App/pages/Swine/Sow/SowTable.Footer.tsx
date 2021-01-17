import { TableFooter } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import TableCell from '@material-ui/core/TableCell';
import TablePagination from '@material-ui/core/TablePagination';
import TablePaginationActions from '@material-ui/core/TablePagination/TablePaginationActions';
import TableRow from '@material-ui/core/TableRow';
import React, { useContext } from 'react';

import { SowContext } from './Sow.Context';
import SowForm from './SowForm';

export default function SowTableFooter() {
  const ctx = useContext(SowContext);

  const rowsPerPage = ctx?.page.limit;
  const pageIndex = ctx.page.offset / ctx.page.limit;
  const count = ctx?.query?.data?.sowsCount || 0;

  return (
    <TableFooter>
      <TableRow>
        <TableCell colSpan={2}>
          <SowForm />
          <Button size="small">Delete</Button>
        </TableCell>
        <TablePagination
          colSpan={3}
          page={pageIndex}
          rowsPerPage={rowsPerPage}
          rowsPerPageOptions={[5, 10, 20]}
          count={count}
          SelectProps={{
            inputProps: { 'aria-label': 'rows per page' },
            native: true,
          }}
          ActionsComponent={TablePaginationActions}
          onChangePage={(event, page) => {
            ctx.setPage((s) => ({ ...s, offset: page * s.limit }));
          }}
          onChangeRowsPerPage={(event) => {
            ctx.setPage((s) => ({
              ...s,
              limit: Number(event.target.value),
            }));
          }}
        />
      </TableRow>
    </TableFooter>
  );
}
