'use client'

import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import {WineList} from "@/app/types/Wine";
import {useEffect, useState} from "react";
import {getWines} from "@/app/api/wine";

interface Column {
  id: 'name' | 'region' | 'appellation' | 'domain' | 'color' | 'owner' | 'grape_variety' | 'viticulture' | 'alcohol_content' | 'acidity_level' | 'bottle_size';
  label: string;
  minWidth?: number;
  align?: 'right' | 'left';
  format?: (value: number) => string;
}

const columns: readonly Column[] = [
  {id: 'name', label: 'Name', minWidth: 170, align: 'left'},
  {id: 'region', label: 'Region', minWidth: 100, align: 'left'},
  {id: 'appellation', label: 'Appellation', minWidth: 170, align: 'left'},
  {id: 'domain', label: 'Domain', minWidth: 170, align: 'left'},
  {id: 'color', label: 'Color', minWidth: 100, align: 'left'},
  {id: 'owner', label: 'Owner', minWidth: 170, align: 'left'},
  {id: 'grape_variety', label: 'Grape Variety', minWidth: 170, align: 'left'},
  {id: 'viticulture', label: 'Viticulture', minWidth: 170, align: 'left'},
];

export default function WineTable() {
  const [page, setPage] = React.useState<any>(0);
  const [rowsPerPage, setRowsPerPage] = React.useState<any>(25);
  const [wines, setWines] = useState<any>([]);
  const [loading, setLoading] = useState<any>(true); // Added loading state

  useEffect(() => {
    try {
      getWines().then((res) => setWines(res));
    } catch (error) {
      console.error('Error fetching wines:', error);
    }

  }, []);

  useEffect(() => {
    setLoading(false);
  }, [wines]);

  if (loading) {
    return <div>Loading wines...</div>; // Render loading state
  }
  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper sx={{width: '100%', height: 'full', overflow: 'hidden'}}>
      <TableContainer sx={{maxHeight: '800px', minHeight: '800px'}}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{minWidth: column.minWidth}}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {wines
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row: any, index: any) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={index}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === 'number' ? column.format(value) : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={wines.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
