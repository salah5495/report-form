import React, { useEffect, useRef, useState } from 'react';
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';
import Header from '../components/Header';
import MyExcel from '../components/MyExcel';
import Last from '../components/Last';
import { Button } from '@mui/material';
import Container from '@mui/material/Container';

const Combined = () => {
  const [showPDF, setShowPDF] = useState(false);
  const reportContainer = useRef(null);

  useEffect(() => {
    reportContainer.current = document.getElementById('report-container');
  }, []);

  const handleExportPDF = async () => {
    setShowPDF(true);
    const canvas = await html2canvas(reportContainer.current, {
      width: reportContainer.current.offsetWidth,
    });

    const pdf = new jsPDF();
    const imgData = canvas.toDataURL('image/png');
    pdf.addImage(imgData, 'PNG', 10, 10);
    pdf.save('report_card.pdf');

    setShowPDF(false);
  };

  const handlePrint = async () => {
    setShowPDF(true);
    const canvas = await html2canvas(reportContainer.current);

    const imageData = canvas.toDataURL('image/png');
    const pdfWindow = window.open();
    pdfWindow.document.write(
      '<iframe width="100%" height="100%" src="' + imageData + '"></iframe>'
    );
    pdfWindow.document.close();
    pdfWindow.print();

    setShowPDF(false);
  };

  return (
    <Container maxWidth='lg' sx={{ marginTop: '3rem', width: '800px' }}>
      <div id='report-container' style={{ position: 'relative' }}>
        <Header />
        <MyExcel />
        <Last />
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          marginTop: '50px',
        }}
      >
        <Button onClick={handleExportPDF} variant='contained'>
          Generate PDF
        </Button>
        <Button onClick={handlePrint} variant='contained'>
          Print
        </Button>
      </div>
      {showPDF && (
        <iframe
          title='PDF Preview'
          src={`./report_card.pdf#toolbar=0`}
          style={{ height: 500, width: '100%', border: 'none' }}
        />
      )}
    </Container>
  );
};

export default Combined;
