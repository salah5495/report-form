import React from 'react';
import AppBar from '../../components/AppBar';
import { Grid } from '@mui/material';
import Crud from '../../components/Crud';
import ReportForm from '../../components/ReportForm';
import { Container } from '@mui/material';
import CrudInput from '../../components/TableInput';
import DataTable from '../../components/Test';
import Test from '../../components/Test2';
import MyExcel from '../../components/MyExcel'

const Home = () => {
  return (
    <React.Fragment>
      <AppBar />
      <Container maxWidth='lg' sx={{ marginTop: '3rem' }}>
        <MyExcel />
      </Container>
    </React.Fragment>
  );
};

export default Home;
