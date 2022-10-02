import React, { ReactNode } from 'react'
import { Button, styled, Table, TableBody, TableCell, tableCellClasses, TableContainer, TableHead, TableRow } from '@mui/material';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

type RowsData = {
    id: number
    name: string
    price: string
}

interface Props {
    rowsData: [RowsData]
    action: (row: RowsData) => ReactNode
}


const CsTable = ({ rowsData, action }: Props) => {
    return (
        <TableContainer sx={{ maxHeight: 440 }} >
            <Table size="small" stickyHeader sx={{ minWidth: 300 }}>
                <TableHead>
                    <TableRow>
                        <StyledTableCell>Name</StyledTableCell>
                        <StyledTableCell>Price</StyledTableCell>
                        <StyledTableCell>{""}</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rowsData?.map((row: any) => (
                        <StyledTableRow
                            key={row._id}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <StyledTableCell>{row?.name}</StyledTableCell>
                            <StyledTableCell>{row?.price}</StyledTableCell>
                            <StyledTableCell>
                                {action(row)}

                            </StyledTableCell>
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default CsTable