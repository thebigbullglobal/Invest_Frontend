import React, { useState } from 'react';
import {
  Box,
  Typography,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Button,
  TextField,
  MenuItem,
  IconButton,
  Tooltip,
  useTheme
} from '@mui/material';
import {
  PictureAsPdf as PdfIcon,
  Description as WordIcon,
  Refresh as RefreshIcon
} from '@mui/icons-material';
import { jsPDF } from 'jspdf';
import autoTable from 'jspdf-autotable';
import * as XLSX from 'xlsx';

const MyIncomeReport = () => {
  const theme = useTheme();
  const [filterPeriod, setFilterPeriod] = useState('all');

  // Static data
  const reportData = [
    {
      sn: 1,
      period: 'Jan 2023',
      directIncome: 1200,
      matchingIncome: 870,
      cashbackIncome: 150,
      sponsorIncome: 300,
      tds: 50,
      processCharge: 20,
      loanDeduction: 100,
      paidStatus: 'Paid',
      paymentDate: '2023-01-15'
    },
    {
      sn: 2,
      period: 'Feb 2023',
      directIncome: 1500,
      matchingIncome: 1020,
      cashbackIncome: 180,
      sponsorIncome: 350,
      tds: 60,
      processCharge: 25,
      loanDeduction: 120,
      paidStatus: 'Paid',
      paymentDate: '2023-02-15'
    },
    {
      sn: 3,
      period: 'Mar 2023',
      directIncome: 1800,
      matchingIncome: 1200,
      cashbackIncome: 200,
      sponsorIncome: 400,
      tds: 70,
      processCharge: 30,
      loanDeduction: 150,
      paidStatus: 'Pending',
      paymentDate: ''
    }
  ];

  const filteredData = filterPeriod === 'all' 
    ? reportData 
    : reportData.filter(item => item.period === filterPeriod);

  // Calculate totals
  const totals = filteredData.reduce((acc, item) => ({
    directIncome: acc.directIncome + item.directIncome,
    matchingIncome: acc.matchingIncome + item.matchingIncome,
    cashbackIncome: acc.cashbackIncome + item.cashbackIncome,
    sponsorIncome: acc.sponsorIncome + item.sponsorIncome,
    tds: acc.tds + item.tds,
    processCharge: acc.processCharge + item.processCharge,
    loanDeduction: acc.loanDeduction + item.loanDeduction
  }), {
    directIncome: 0,
    matchingIncome: 0,
    cashbackIncome: 0,
    sponsorIncome: 0,
    tds: 0,
    processCharge: 0,
    loanDeduction: 0
  });

  const exportToPDF = () => {
    const doc = new jsPDF();
    
    // Add title
    doc.setFontSize(18);
    doc.text('My Income Report', 14, 15);
    
    // Prepare data
    const headers = [
      'S.N.', 'Period', 'Direct Income', 'Matching Income', 'Cashback Income', 
      'Sponsor Income', 'Total Income', 'TDS', 'Process Charge', 
      'Loan Deduction', 'Payable Amount', 'Paid Status', 'Payment Date'
    ];
    
    const data = filteredData.map(item => {
      const totalIncome = item.directIncome + item.matchingIncome + item.cashbackIncome + item.sponsorIncome;
      const payableAmount = totalIncome - item.tds - item.processCharge - item.loanDeduction;
      
      return [
        item.sn,
        item.period,
        `₹₹{item.directIncome.toLocaleString()}`,
        `₹₹{item.matchingIncome.toLocaleString()}`,
        `₹₹{item.cashbackIncome.toLocaleString()}`,
        `₹₹{item.sponsorIncome.toLocaleString()}`,
        `₹₹{totalIncome.toLocaleString()}`,
        `₹₹{item.tds.toLocaleString()}`,
        `₹₹{item.processCharge.toLocaleString()}`,
        `₹₹{item.loanDeduction.toLocaleString()}`,
        `₹₹{payableAmount.toLocaleString()}`,
        item.paidStatus,
        item.paymentDate || 'N/A'
      ];
    });
    
    // Add table
    autoTable(doc, {
      head: [headers],
      body: data,
      startY: 25,
      styles: {
        fontSize: 8,
        cellPadding: 2,
        halign: 'center'
      },
      headStyles: {
        fillColor: [41, 128, 185],
        textColor: 255,
        fontStyle: 'bold'
      }
    });
    
    doc.save('My_Income_Report.pdf');
  };

  const exportToExcel = () => {
    const headers = [
      'S.N.', 'Period', 'Direct Income', 'Matching Income', 'Cashback Income', 
      'Sponsor Income', 'Total Income', 'TDS', 'Process Charge', 
      'Loan Deduction', 'Payable Amount', 'Paid Status', 'Payment Date'
    ];
    
    const data = filteredData.map(item => {
      const totalIncome = item.directIncome + item.matchingIncome + item.cashbackIncome + item.sponsorIncome;
      const payableAmount = totalIncome - item.tds - item.processCharge - item.loanDeduction;
      
      return [
        item.sn,
        item.period,
        item.directIncome,
        item.matchingIncome,
        item.cashbackIncome,
        item.sponsorIncome,
        totalIncome,
        item.tds,
        item.processCharge,
        item.loanDeduction,
        payableAmount,
        item.paidStatus,
        item.paymentDate || 'N/A'
      ];
    });
    
    const worksheet = XLSX.utils.aoa_to_sheet([headers, ...data]);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Income Report');
    XLSX.writeFile(workbook, 'My_Income_Report.xlsx');
  };

  return (
    <Box sx={{ p: 3 }}>
      <Paper elevation={3} sx={{ p: 3, mb: 3 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
          <Typography variant="h4" component="h1" sx={{ fontWeight: 'bold' }}>
            My Income Report
          </Typography>
          
          <Box>
            <Tooltip title="Export to PDF">
              <IconButton onClick={exportToPDF} color="primary" sx={{ mr: 1 }}>
                <PdfIcon />
              </IconButton>
            </Tooltip>
            <Tooltip title="Export to Excel">
              <IconButton onClick={exportToExcel} color="success" sx={{ mr: 1 }}>
                <WordIcon />
              </IconButton>
            </Tooltip>
          </Box>
        </Box>

        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
          <TextField
            select
            label="Filter by Period"
            value={filterPeriod}
            onChange={(e) => setFilterPeriod(e.target.value)}
            size="small"
            sx={{ minWidth: 150 }}
          >
            <MenuItem value="all">All Periods</MenuItem>
            {reportData.map((item) => (
              <MenuItem key={item.period} value={item.period}>
                {item.period}
              </MenuItem>
            ))}
          </TextField>
          
          <Button 
            variant="outlined" 
            startIcon={<RefreshIcon />}
            onClick={() => setFilterPeriod('all')}
          >
            Reset
          </Button>
        </Box>

        <TableContainer component={Paper} sx={{ maxHeight: 'calc(100vh - 300px)', overflow: 'auto' }}>
          <Table stickyHeader sx={{ minWidth: 1500 }}>
            <TableHead>
              <TableRow>
                <TableCell sx={{ fontWeight: 'bold' }}>S.N.</TableCell>
                <TableCell sx={{ fontWeight: 'bold' }}>Period</TableCell>
                <TableCell sx={{ fontWeight: 'bold' }}>Direct Income</TableCell>
                <TableCell sx={{ fontWeight: 'bold' }}>Matching Income</TableCell>
                <TableCell sx={{ fontWeight: 'bold' }}>Cashback Income</TableCell>
                <TableCell sx={{ fontWeight: 'bold' }}>Sponsor Income</TableCell>
                <TableCell sx={{ fontWeight: 'bold' }}>Total Income</TableCell>
                <TableCell sx={{ fontWeight: 'bold' }}>TDS</TableCell>
                <TableCell sx={{ fontWeight: 'bold' }}>Process Charge</TableCell>
                <TableCell sx={{ fontWeight: 'bold' }}>Loan Deduction</TableCell>
                <TableCell sx={{ fontWeight: 'bold' }}>Payable Amount</TableCell>
                <TableCell sx={{ fontWeight: 'bold' }}>Paid Status</TableCell>
                <TableCell sx={{ fontWeight: 'bold' }}>Payment Date</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredData.map((row) => {
                const totalIncome = row.directIncome + row.matchingIncome + row.cashbackIncome + row.sponsorIncome;
                const payableAmount = totalIncome - row.tds - row.processCharge - row.loanDeduction;
                
                return (
                  <TableRow key={row.sn}>
                    <TableCell>{row.sn}</TableCell>
                    <TableCell>{row.period}</TableCell>
                    <TableCell>₹{row.directIncome.toLocaleString()}</TableCell>
                    <TableCell>₹{row.matchingIncome.toLocaleString()}</TableCell>
                    <TableCell>₹{row.cashbackIncome.toLocaleString()}</TableCell>
                    <TableCell>₹{row.sponsorIncome.toLocaleString()}</TableCell>
                    <TableCell sx={{ fontWeight: 'bold' }}>₹{totalIncome.toLocaleString()}</TableCell>
                    <TableCell>₹{row.tds.toLocaleString()}</TableCell>
                    <TableCell>₹{row.processCharge.toLocaleString()}</TableCell>
                    <TableCell>₹{row.loanDeduction.toLocaleString()}</TableCell>
                    <TableCell sx={{ fontWeight: 'bold', color: theme.palette.success.main }}>
                      ₹{payableAmount.toLocaleString()}
                    </TableCell>
                    <TableCell sx={{ 
                      color: row.paidStatus === 'Paid' ? theme.palette.success.main : theme.palette.warning.main,
                      fontWeight: 'bold'
                    }}>
                      {row.paidStatus}
                    </TableCell>
                    <TableCell>{row.paymentDate || '-'}</TableCell>
                  </TableRow>
                );
              })}
              <TableRow sx={{ bgcolor: theme.palette.grey[100] }}>
                <TableCell colSpan={2} sx={{ fontWeight: 'bold' }}>Total</TableCell>
                <TableCell sx={{ fontWeight: 'bold' }}>₹{totals.directIncome.toLocaleString()}</TableCell>
                <TableCell sx={{ fontWeight: 'bold' }}>₹{totals.matchingIncome.toLocaleString()}</TableCell>
                <TableCell sx={{ fontWeight: 'bold' }}>₹{totals.cashbackIncome.toLocaleString()}</TableCell>
                <TableCell sx={{ fontWeight: 'bold' }}>₹{totals.sponsorIncome.toLocaleString()}</TableCell>
                <TableCell sx={{ fontWeight: 'bold' }}>
                  ₹{(totals.directIncome + totals.matchingIncome + totals.cashbackIncome + totals.sponsorIncome).toLocaleString()}
                </TableCell>
                <TableCell sx={{ fontWeight: 'bold' }}>₹{totals.tds.toLocaleString()}</TableCell>
                <TableCell sx={{ fontWeight: 'bold' }}>₹{totals.processCharge.toLocaleString()}</TableCell>
                <TableCell sx={{ fontWeight: 'bold' }}>₹{totals.loanDeduction.toLocaleString()}</TableCell>
                <TableCell sx={{ fontWeight: 'bold', color: theme.palette.success.main }}>
                  ₹{(
                    totals.directIncome + 
                    totals.matchingIncome + 
                    totals.cashbackIncome + 
                    totals.sponsorIncome - 
                    totals.tds - 
                    totals.processCharge - 
                    totals.loanDeduction
                  ).toLocaleString()}
                </TableCell>
                <TableCell colSpan={2}></TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </Box>
  );
};

export default MyIncomeReport;