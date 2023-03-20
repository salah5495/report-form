import { Text, View } from '@react-pdf/renderer';
import MyExcel from './MyExcel';
import Last from './Last';
import React from 'react';
import { Page, Document } from '@react-pdf/renderer';
import Header from './Header';

const HeaderPDF = () => (
  <View>
    <Text>
      <Header />
    </Text>
  </View>
);

const MyExcelPDF = () => (
  <View>
    <Text>
      <MyExcel />
    </Text>
  </View>
);

const LastPDF = () => (
  <View>
    <Text>
      <Last />
    </Text>
  </View>
);

const ReportCardPDF = () => {
  return (
    <Document>
      <Page size='A4'>
        <View>
          <HeaderPDF />
          <MyExcelPDF />
          <LastPDF />
        </View>
      </Page>
    </Document>
  );
};

export default ReportCardPDF;
