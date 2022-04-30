import React, { useEffect } from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Button from '@mui/material/Button';
import { CustomerWarapper, BranchWrapper, NoDataWrapper, SendAllWrapper } from './GetTableData.styles';
import SelectAutoWidth from '../BranchContainer/BranchContainer';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

export default function StickyHeadTable() {
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
    const [data, setData] = React.useState([]);
    const branches = ['ALL', 'Katargam', 'Kapodara', 'Piplod', 'Paravatpatiya'];

    const [Branch, setBranch] = React.useState('ALL');

    const handleBranch = (event) => {
        const bName = event.target.value;
        async function fetchMyAPI() {
            let response = await fetch(`https://artrueinfotech.com/employees_actions.php?action=BRANCH_DATA&branch_name=${bName}`)
            response = await response.json()
            setData(response)
        }
        fetchMyAPI()
        setBranch(bName);
    };

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    const columns = [
        { id: 'id', label: 'Customer ID', minWidth: 170 },
        { id: 'cName', label: 'Customer Name', minWidth: 100 },
        {
            id: 'mNumber',
            label: 'Mobile Number',
            minWidth: 170,
            align: 'right',
            format: (value) => value.toLocaleString('en-US'),
        },
        {
            id: 'cDate',
            label: 'Date',
            minwidth: 170,
            align: 'right',
        },
        {
            id: 'branchName',
            label: 'Branch',
            minWidth: 170,
            align: 'right',
        },
        {
            id: 'action',
            label: 'Action',
            minWidth: 170,
            align: 'right',
        }
    ];

    function createData(id, cName, mNumber, cDate, branchName) {
        const action = <Button variant="outlined" onClick={() => onSendButton()}>Send</Button>;
        return { id, cName, mNumber, cDate, action, branchName };
    }

    const onSendButton = (number) => {
        fetch(`https://artrueinfotech.com/messageService/manualMessage.php?number=${number}`)
            .then((res) => {
                return res.json()
            })
            .then((result) => {
                console.log(result);
            })
    }

    useEffect(() => {
        async function fetchMyAPI() {
            let response = await fetch(`https://artrueinfotech.com/employees_actions.php?action=BRANCH_DATA&branch_name=${Branch}`)
            response = await response.json()
            setData(response)
        }

        fetchMyAPI()
    }, []);

    const rows = data[0] === "Empty" ? [] : data.map(dt => createData(dt.id, dt.customer_name, dt.mobile_no, dt.add_date, dt.branch_name));

    return (
        <div>
            <CustomerWarapper>Customer Data</CustomerWarapper>
            <BranchWrapper>
                <SelectAutoWidth branches={branches} handleBranch={handleBranch} Branch={Branch} />
            </BranchWrapper>
            <FormControlLabel control={<Checkbox defaultChecked />} label="Label" />
            <Paper sx={{ width: '100%', overflow: 'hidden' }}>
                <TableContainer sx={{ maxHeight: 440 }}>
                    <Table stickyHeader aria-label="sticky table">
                        <TableHead>
                            <TableRow>
                                {columns.map((column) => (
                                    <TableCell
                                        key={column.id}
                                        align={column.align}
                                        style={{ minWidth: column.minWidth }}
                                    >
                                        {column.label}
                                    </TableCell>
                                ))}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows
                                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                .map((row) => {
                                    return (
                                        <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                                            {columns.map((column) => {
                                                const value = row[column.id];
                                                return (
                                                    <TableCell key={column.id} align={column.align}>
                                                        {column.format && typeof value === 'number'
                                                            ? column.format(value)
                                                            : value}
                                                    </TableCell>
                                                );
                                            })}
                                        </TableRow>
                                    );
                                })}
                        </TableBody>
                    </Table>
                    {rows.length === 0 && (
                        <NoDataWrapper>No Data Available</NoDataWrapper>
                    )}
                </TableContainer>
                <TablePagination
                    rowsPerPageOptions={[10, 25, 100]}
                    component="div"
                    count={rows.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
            </Paper>
            <SendAllWrapper>
                <Button variant="outlined" onClick={() => onSendButton()}>Send ALL</Button>
            </SendAllWrapper>
        </div>
    );
}
