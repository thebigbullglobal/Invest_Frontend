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
  Grid,
  IconButton,
  Tooltip,
  useTheme
} from '@mui/material';
import {
  Download as DownloadIcon,
  PictureAsPdf as PdfIcon,
  Description as WordIcon,
  FilterAlt as FilterIcon,
  BarChart as ChartIcon,
  Refresh as RefreshIcon
} from '@mui/icons-material';
import { saveAs } from 'file-saver';
import * as XLSX from 'xlsx';
import { jsPDF } from 'jspdf';
import 'jspdf-autotable';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip as ChartTooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import autoTable from 'jspdf-autotable'; 
// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  ChartTooltip,
  Legend
);

const MatchingIncomeReport = () => {
  const theme = useTheme();
  const [filterPeriod, setFilterPeriod] = useState('all');
  const [showChart, setShowChart] = useState(false);

  // Static data
  const reportData = [
    {
      sn: 1,
      period: 'Jan 2023',
      bflb: 1500,
      bfrb: 1200,
      nlb: 2000,
      nrb: 1800,
      tlb: 3500,
      trb: 3000,
      clb: 3400,
      crb: 2900,
      matchingBusiness: 2900,
      matchingIncome: 870
    },
    {
      sn: 2,
      period: 'Feb 2023',
      bflb: 1800,
      bfrb: 1500,
      nlb: 2200,
      nrb: 2000,
      tlb: 4000,
      trb: 3500,
      clb: 3900,
      crb: 3400,
      matchingBusiness: 3400,
      matchingIncome: 1020
    },
    {
      sn: 3,
      period: 'Mar 2023',
      bflb: 2000,
      bfrb: 1800,
      nlb: 2500,
      nrb: 2300,
      tlb: 4500,
      trb: 4100,
      clb: 4400,
      crb: 4000,
      matchingBusiness: 4000,
      matchingIncome: 1200
    }
  ];

  const filteredData = filterPeriod === 'all' 
    ? reportData 
    : reportData.filter(item => item.period === filterPeriod);

    const exportToPDF = () => {
        const doc = new jsPDF();
        
        // Add title
        doc.setFontSize(18);
        doc.text('Matching Income Report', 14, 15);
        
        // Prepare data
        const headers = [
          'S.N.', 'Period', 'BFLB', 'BFRB', 'NLB', 'NRB', 
          'TLB', 'TRB', 'CLB', 'CRB', 'Matching Business', 'Matching Income'
        ];
        
        const data = filteredData.map(item => [
          item.sn,
          item.period,
          `₹₹{item.bflb.toLocaleString()}`,
          `₹₹{item.bfrb.toLocaleString()}`,
          `₹₹{item.nlb.toLocaleString()}`,
          `₹₹{item.nrb.toLocaleString()}`,
          `₹₹{item.tlb.toLocaleString()}`,
          `₹₹{item.trb.toLocaleString()}`,
          `₹₹{item.clb.toLocaleString()}`,
          `₹₹{item.crb.toLocaleString()}`,
          `₹₹{item.matchingBusiness.toLocaleString()}`,
          `₹₹{item.matchingIncome.toLocaleString()}`
        ]);
        
        // Add table using autoTable
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
        
        doc.save('Matching_Income_Report.pdf');
      };

  const exportToWord = () => {
    const headers = [
      'S.N.', 'Period', 'BFLB', 'BFRB', 'NLB', 'NRB', 
      'TLB', 'TRB', 'CLB', 'CRB', 'Matching Business', 'Matching Income'
    ];
    
    const data = filteredData.map(item => [
      item.sn,
      item.period,
      `₹₹{item.bflb.toLocaleString()}`,
      `₹₹{item.bfrb.toLocaleString()}`,
      `₹₹{item.nlb.toLocaleString()}`,
      `₹₹{item.nrb.toLocaleString()}`,
      `₹₹{item.tlb.toLocaleString()}`,
      `₹₹{item.trb.toLocaleString()}`,
      `₹₹{item.clb.toLocaleString()}`,
      `₹₹{item.crb.toLocaleString()}`,
      `₹₹{item.matchingBusiness.toLocaleString()}`,
      `₹₹{item.matchingIncome.toLocaleString()}`
    ]);
    
    const worksheet = XLSX.utils.aoa_to_sheet([headers, ...data]);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Report');
    XLSX.writeFile(workbook, 'Matching_Income_Report.xlsx', { bookType: 'xlsx' });
  };

  const chartData = {
    labels: filteredData.map(item => item.period),
    datasets: [
      {
        label: 'Left Business',
        data: filteredData.map(item => item.tlb),
        backgroundColor: theme.palette.primary.main,
      },
      {
        label: 'Right Business',
        data: filteredData.map(item => item.trb),
        backgroundColor: theme.palette.secondary.main,
      },
      {
        label: 'Matching Income',
        data: filteredData.map(item => item.matchingIncome),
        backgroundColor: theme.palette.success.main,
      }
    ]
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Business & Income Overview',
      },
    },
  };

  return (
    <Box sx={{ p: 3 }}>
      <Paper elevation={3} sx={{ p: 3, mb: 3 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
          <Typography variant="h4" component="h1" sx={{ fontWeight: 'bold' }}>
            Matching Income Report
          </Typography>
          
          <Box>
            <Tooltip title="Export to PDF">
              <IconButton onClick={exportToPDF} color="primary" sx={{ mr: 1 }}>
                <PdfIcon />
              </IconButton>
            </Tooltip>
            <Tooltip title="Export to Excel">
              <IconButton onClick={exportToWord} color="success" sx={{ mr: 1 }}>
                <WordIcon />
              </IconButton>
            </Tooltip>
            <Tooltip title="Toggle Chart View">
              <IconButton 
                onClick={() => setShowChart(!showChart)} 
                color={showChart ? 'primary' : 'default'}
              >
                <ChartIcon />
              </IconButton>
            </Tooltip>
          </Box>
        </Box>

        <Grid container spacing={2} sx={{ mb: 3 }}>
          <Grid item xs={12} md={6}>
            <Typography variant="subtitle1" sx={{ mb: 1 }}>
              <strong>BFLB</strong>: Back Forward Left Business
            </Typography>
            <Typography variant="subtitle1" sx={{ mb: 1 }}>
              <strong>BFRB</strong>: Back Forward Right Business
            </Typography>
            <Typography variant="subtitle1" sx={{ mb: 1 }}>
              <strong>NLB</strong>: New Left Business
            </Typography>
            <Typography variant="subtitle1">
              <strong>NRB</strong>: New Right Business
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="subtitle1" sx={{ mb: 1 }}>
              <strong>TLB</strong>: Total Left Business
            </Typography>
            <Typography variant="subtitle1" sx={{ mb: 1 }}>
              <strong>TRB</strong>: Total Right Business
            </Typography>
            <Typography variant="subtitle1" sx={{ mb: 1 }}>
              <strong>CLB</strong>: Calculate Left Business
            </Typography>
            <Typography variant="subtitle1">
              <strong>CRB</strong>: Calculate Right Business
            </Typography>
          </Grid>
        </Grid>

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
            onClick={() => {
              setFilterPeriod('all');
              setShowChart(false);
            }}
          >
            Reset
          </Button>
        </Box>

        {showChart ? (
          <Box sx={{ height: '400px', mb: 3 }}>
            <Bar options={chartOptions} data={chartData} />
          </Box>
        ) : (
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 1200 }}>
              <TableHead sx={{ bgcolor: theme.palette.grey[200] }}>
                <TableRow>
                  <TableCell sx={{ fontWeight: 'bold' }}>S.N.</TableCell>
                  <TableCell sx={{ fontWeight: 'bold' }}>Period</TableCell>
                  <TableCell sx={{ fontWeight: 'bold' }}>BFLB</TableCell>
                  <TableCell sx={{ fontWeight: 'bold' }}>BFRB</TableCell>
                  <TableCell sx={{ fontWeight: 'bold' }}>NLB</TableCell>
                  <TableCell sx={{ fontWeight: 'bold' }}>NRB</TableCell>
                  <TableCell sx={{ fontWeight: 'bold' }}>TLB</TableCell>
                  <TableCell sx={{ fontWeight: 'bold' }}>TRB</TableCell>
                  <TableCell sx={{ fontWeight: 'bold' }}>CLB</TableCell>
                  <TableCell sx={{ fontWeight: 'bold' }}>CRB</TableCell>
                  <TableCell sx={{ fontWeight: 'bold' }}>Matching Business</TableCell>
                  <TableCell sx={{ fontWeight: 'bold' }}>Matching Income</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {filteredData.map((row) => (
                  <TableRow key={row.sn}>
                    <TableCell>{row.sn}</TableCell>
                    <TableCell>{row.period}</TableCell>
                    <TableCell>₹{row.bflb.toLocaleString()}</TableCell>
                    <TableCell>₹{row.bfrb.toLocaleString()}</TableCell>
                    <TableCell>₹{row.nlb.toLocaleString()}</TableCell>
                    <TableCell>₹{row.nrb.toLocaleString()}</TableCell>
                    <TableCell>₹{row.tlb.toLocaleString()}</TableCell>
                    <TableCell>₹{row.trb.toLocaleString()}</TableCell>
                    <TableCell>₹{row.clb.toLocaleString()}</TableCell>
                    <TableCell>₹{row.crb.toLocaleString()}</TableCell>
                    <TableCell>₹{row.matchingBusiness.toLocaleString()}</TableCell>
                    <TableCell sx={{ fontWeight: 'bold', color: theme.palette.success.main }}>
                      ₹{row.matchingIncome.toLocaleString()}
                    </TableCell>
                  </TableRow>
                ))}
                <TableRow sx={{ bgcolor: theme.palette.grey[100] }}>
                  <TableCell colSpan={10} align="right" sx={{ fontWeight: 'bold' }}>
                    Total
                  </TableCell>
                  <TableCell sx={{ fontWeight: 'bold' }}>
                    ₹{filteredData.reduce((sum, item) => sum + item.matchingBusiness, 0).toLocaleString()}
                  </TableCell>
                  <TableCell sx={{ fontWeight: 'bold', color: theme.palette.success.main }}>
                    ₹{filteredData.reduce((sum, item) => sum + item.matchingIncome, 0).toLocaleString()}
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        )}
      </Paper>
    </Box>
  );
};

export default MatchingIncomeReport;