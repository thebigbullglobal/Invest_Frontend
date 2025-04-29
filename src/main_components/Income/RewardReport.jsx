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
  useTheme,
  Chip
} from '@mui/material';
import {
  PictureAsPdf as PdfIcon,
  Description as WordIcon,
  Refresh as RefreshIcon
} from '@mui/icons-material';
import { jsPDF } from 'jspdf';
import autoTable from 'jspdf-autotable';
import * as XLSX from 'xlsx';

const RewardReport = () => {
  const theme = useTheme();
  const [filterStatus, setFilterStatus] = useState('all');

  // Static data
  const rewardData = [
    {
      sr: 1,
      matchingBusiness: 700000,
      designation: 'SALES EXECUTIVE',
      reward: '15000 OR 5G MOBILE',
      requiredLeft: 700000,
      requiredRight: 700000,
      status: 'Pending',
      achievedDate: ''
    },
    {
      sr: 2,
      matchingBusiness: 2000000,
      designation: 'SALES MANAGER',
      reward: '50,000 OR LAPTOP I7 OR Foreign Trip 3N - 4D',
      requiredLeft: 2000000,
      requiredRight: 2000000,
      status: 'Pending',
      achievedDate: ''
    },
    {
      sr: 3,
      matchingBusiness: 5000000,
      designation: 'TERRITORY MANAGER',
      reward: '1,25,000 OR BIKE',
      requiredLeft: 5000000,
      requiredRight: 5000000,
      status: 'Pending',
      achievedDate: ''
    },
    {
      sr: 4,
      matchingBusiness: 10000000,
      designation: 'DIVISIONAL MANAGER',
      reward: '2,50,000 OR BULLET',
      requiredLeft: 10000000,
      requiredRight: 10000000,
      status: 'Pending',
      achievedDate: ''
    },
    {
      sr: 5,
      matchingBusiness: 30000000,
      designation: 'REGIONAL MANAGER',
      reward: '7,50,000 OR SWIFT CAR',
      requiredLeft: 30000000,
      requiredRight: 30000000,
      status: 'Pending',
      achievedDate: ''
    },
    {
      sr: 6,
      matchingBusiness: 80000000,
      designation: 'ZONAL MANAGER',
      reward: '20,00,000 OR TATA SAFARI',
      requiredLeft: 80000000,
      requiredRight: 80000000,
      status: 'Pending',
      achievedDate: ''
    },
    {
      sr: 7,
      matchingBusiness: 250000000,
      designation: 'Asst. GENERAL MANAGER',
      reward: '62,50,000 OR DUPLEX 1200 SOFT',
      requiredLeft: 250000000,
      requiredRight: 250000000,
      status: 'Pending',
      achievedDate: ''
    },
    {
      sr: 8,
      matchingBusiness: 500000000,
      designation: 'GENERAL MANAGER',
      reward: '1,25,00000 OR BANGLOW LUXURY',
      requiredLeft: 500000000,
      requiredRight: 500000000,
      status: 'Pending',
      achievedDate: ''
    },
    {
      sr: 9,
      matchingBusiness: 100000000,
      designation: 'VICE PRESIDENT',
      reward: '2,50,00000 OR FARM HOUSE',
      requiredLeft: 100000000,
      requiredRight: 100000000,
      status: 'Pending',
      achievedDate: ''
    }
  ];

  const filteredData = filterStatus === 'all' 
    ? rewardData 
    : rewardData.filter(item => item.status === filterStatus);

  const exportToPDF = () => {
    const doc = new jsPDF();
    
    // Add title
    doc.setFontSize(18);
    doc.text('Reward Report', 14, 15);
    
    // Prepare data
    const headers = [
      'Sr.', 'Matching Business', 'Designation', 'Reward', 
      'Required Left', 'Required Right', 'Status', 'Achieved Date'
    ];
    
    const data = filteredData.map(item => [
      item.sr,
      `₹₹{item.matchingBusiness.toLocaleString()}`,
      item.designation,
      item.reward,
      `₹₹{item.requiredLeft.toLocaleString()}`,
      `₹₹{item.requiredRight.toLocaleString()}`,
      item.status,
      item.achievedDate || 'N/A'
    ]);
    
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
      },
      columnStyles: {
        2: { cellWidth: 'auto' }, // Designation column
        3: { cellWidth: 'auto' }  // Reward column
      }
    });
    
    doc.save('Reward_Report.pdf');
  };

  const exportToExcel = () => {
    const headers = [
      'Sr.', 'Matching Business', 'Designation', 'Reward', 
      'Required Left', 'Required Right', 'Status', 'Achieved Date'
    ];
    
    const data = filteredData.map(item => [
      item.sr,
      item.matchingBusiness,
      item.designation,
      item.reward,
      item.requiredLeft,
      item.requiredRight,
      item.status,
      item.achievedDate || 'N/A'
    ]);
    
    const worksheet = XLSX.utils.aoa_to_sheet([headers, ...data]);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Reward Report');
    XLSX.writeFile(workbook, 'Reward_Report.xlsx');
  };

  return (
    <Box sx={{ p: 3 }}>
      <Paper elevation={3} sx={{ p: 3, mb: 3 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
          <Typography variant="h4" component="h1" sx={{ fontWeight: 'bold' }}>
            Reward Report
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
            label="Filter by Status"
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
            size="small"
            sx={{ minWidth: 150 }}
          >
            <MenuItem value="all">All Statuses</MenuItem>
            <MenuItem value="Pending">Pending</MenuItem>
            <MenuItem value="Achieved">Achieved</MenuItem>
          </TextField>
          
          <Button 
            variant="outlined" 
            startIcon={<RefreshIcon />}
            onClick={() => setFilterStatus('all')}
          >
            Reset
          </Button>
        </Box>

        <TableContainer component={Paper} sx={{ maxHeight: 'calc(100vh - 300px)', overflow: 'auto' }}>
          <Table stickyHeader sx={{ minWidth: 1200 }}>
            <TableHead>
              <TableRow>
                <TableCell sx={{ fontWeight: 'bold' }}>Sr.</TableCell>
                <TableCell sx={{ fontWeight: 'bold' }}>Matching Business</TableCell>
                <TableCell sx={{ fontWeight: 'bold' }}>Designation</TableCell>
                <TableCell sx={{ fontWeight: 'bold' }}>Reward</TableCell>
                <TableCell sx={{ fontWeight: 'bold' }}>Required Left Business</TableCell>
                <TableCell sx={{ fontWeight: 'bold' }}>Required Right Business</TableCell>
                <TableCell sx={{ fontWeight: 'bold' }}>Status</TableCell>
                <TableCell sx={{ fontWeight: 'bold' }}>Achieved Date</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredData.map((row) => (
                <TableRow key={row.sr}>
                  <TableCell>{row.sr}</TableCell>
                  <TableCell>₹{row.matchingBusiness.toLocaleString()}</TableCell>
                  <TableCell>{row.designation}</TableCell>
                  <TableCell>{row.reward}</TableCell>
                  <TableCell>₹{row.requiredLeft.toLocaleString()}</TableCell>
                  <TableCell>₹{row.requiredRight.toLocaleString()}</TableCell>
                  <TableCell>
                    <Chip 
                      label={row.status} 
                      color={row.status === 'Achieved' ? 'success' : 'warning'} 
                      size="small"
                    />
                  </TableCell>
                  <TableCell>{row.achievedDate || '-'}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </Box>
  );
};

export default RewardReport;