import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import React, { useContext } from 'react';

import { Sow } from '../../../../queries/autogenerate/schemas';
import { SowContext } from './Sow.Context';
import SowTableFooter from './SowTable.Footer';

const getDate = (date: string) => new Date(date).toLocaleDateString();

export default function SowTable() {
  const ctx = useContext(SowContext);
  const sows = (ctx?.query?.data?.sows || []) as Sow[];

  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Tag</TableCell>
            <TableCell>Birthdate</TableCell>
            <TableCell>Breed</TableCell>
            <TableCell>Generation</TableCell>
            <TableCell>Purchase Date</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {sows.map((sow) => (
            <TableRow key={sow._id} hover>
              <TableCell>{sow.tag}</TableCell>
              <TableCell>{getDate(sow.birthDate)}</TableCell>
              <TableCell>{sow.breed}</TableCell>
              <TableCell>{sow.generation}</TableCell>
              <TableCell>{getDate(sow.purchaseDate)}</TableCell>
            </TableRow>
          ))}
        </TableBody>
        <SowTableFooter />
      </Table>
    </TableContainer>
  );
}
