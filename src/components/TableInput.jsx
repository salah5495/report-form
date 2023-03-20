import { TextField } from '@mui/material';
import React from 'react';
import styled from 'styled-components';
import { useTable } from '../utils/useTable';

const PersonalContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  margin: 20% 10%;
`;

const Header = () => {
  const utils = useTable();
  return (
    <PersonalContainer>
      <TextField
        value={utils.names}
        onChange={(e) => utils.setNames(e.target.value)}
        label='Names'
      />

      <TextField
        value={utils.form}
        onChange={(e) => utils.setForm(e.target.value)}
        label='Form'
      />

      <TextField
        value={utils.year}
        onChange={(e) => utils.setYear(e.target.value)}
        label='Year (2023)'
      />

      <TextField
        value={utils.stream}
        onChange={(e) => utils.setStream(e.target.value)}
        label='Stream'
      />

      <TextField
        value={utils.term}
        onChange={(e) => utils.setTerm(e.target.value)}
        label='Term'
      />

      <TextField
        value={utils.admissionNumber}
        onChange={(e) => utils.setAdmissionNumber(e.target.value)}
        label='Admission Number'
      />

      <TextField
        multiline
        rows={2}
        maxRows={4}
        label="Class Teacher's Comments"
        onChange={(e) => utils.setClassTeachersComment(e.target.value)}
      />
      <TextField
        multiline
        rows={2}
        maxRows={4}
        label="Principal's Comments"
        onChange={(e) => utils.setPrincipalsComment(e.target.value)}
      />
    </PersonalContainer>
  );
};

export default Header;
