import React, { useState } from 'react';
import AppBar from '../../components/AppBar';
import { Grid, Button } from '@mui/material';
import Crud from '../../components/Crud';
import ReportForm from '../../components/ReportForm';
import { Container } from '@mui/material';
import CrudInput from '../../components/TableInput';
import DataTable from '../../components/Test';
import Test from '../../components/Test';
import MyExcel from '../../components/MyExcel';
import Header from '../../components/Header';
import Last from '../../components/Last';
import Combined from './Combined';



const Home = () => {
  
  return (
    <React.Fragment>
      <AppBar />
      <Combined />
    </React.Fragment>
  );
};

export default Home;
