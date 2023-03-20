import { Typography } from '@mui/material';
import React from 'react';
import { useTable } from '../utils/useTable';

const ReportCard = () => {
  const utils = useTable();
  return (
    <div>
      <Typography
        color='red'
        variant='p'
        fontWeight='600'
        sx={{ borderBottom: '1px solid black' }}
      >
        CLASS TEACHERS COMMENT'S
      </Typography>
      <br />
      <Typography
        variant='subtitle2'
        fontWeight='400'
        sx={{ margin: '10px 0' }}
      >
        {utils.classTeachersComment}
      </Typography>
      <hr />
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Typography variant='subtitle2' fontWeight='400'>
          Date:
        </Typography>
        <Typography variant='subtitle2' fontWeight='400'>
          Sign:
        </Typography>
        <div></div>
      </div>

      <hr />
      <Typography
        color='red'
        variant='p'
        fontWeight='600'
        sx={{ borderBottom: '1px solid black' }}
      >
        PRINCIPALS/D-PRINCIPALS COMMENT'S
      </Typography>
      <br />
      <Typography
        variant='subtitle2'
        fontWeight='400'
        sx={{ margin: '10px 0' }}
      >
        {utils.principalsComment}
      </Typography>
      <hr />
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Typography variant='subtitle2' fontWeight='400'>
          Closing Date:
        </Typography>
        <Typography variant='subtitle2' fontWeight='400'>
          Opening Date:
        </Typography>
        <div></div>
      </div>
    </div>
  );
};

export default ReportCard;
