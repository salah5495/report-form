import React, { useState } from 'react';
import { TextField, Button, Grid } from '@mui/material';

function AddRowForm({ onSubmit }) {
  const [subject, setSubject] = useState('');
  const [outOf30, setOutOf30] = useState('');
  const [outOf70, setOutOf70] = useState('');
  const [percentage, setPercentage] = useState('');
  const [grade, setGrade] = useState('');
  const [points, setPoints] = useState('');
  const [remarks, setRemarks] = useState('');
  const [initials, setInitials] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({
      subject,
      'out of 30': outOf30,
      'Out of 70': outOf70,
      'percentage': percentage,
      Grade: grade,
      Points: points,
      Remarks: remarks,
      initials,
    });
    setSubject('');
    setOutOf30('');
    setOutOf70('');
    setPercentage('');
    setGrade('');
    setPoints('');
    setRemarks('');
    setInitials('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label='Subject'
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label='Out of 30'
            value={outOf30}
            onChange={(e) => setOutOf30(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label='Out of 70'
            value={outOf70}
            onChange={(e) => setOutOf70(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label='%'
            value={percentage}
            onChange={(e) => setPercentage(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            fullWidth
            label='Grade'
            value={grade}
            onChange={(e) => setGrade(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            fullWidth
            label='Points'
            value={points}
            onChange={(e) => setPoints(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            fullWidth
            label='Initials'
            value={initials}
            onChange={(e) => setInitials(e.target.value)}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label='Remarks'
            value={remarks}
            onChange={(e) => setRemarks(e.target.value)}
            multiline
            rows={2}
          />
        </Grid>
        <Grid item xs={12}>
          <Button variant='contained' type='submit'>
            Add Row
          </Button>
        </Grid>
      </Grid>
    </form>
  );
}

export default AddRowForm;
