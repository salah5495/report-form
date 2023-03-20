import { Typography } from '@mui/material';
import React from 'react';
import styled from 'styled-components';
import Hulucho from '../assets/hulucho.jpeg';
import { useTable } from '../utils/useTable';

const HeaderContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  width: 600px;
`;

const HuluchoImg = styled.img`
  width: 200px;
  height: 160px;
  object-fit: cover;
  margin: 10px 0 0px 0;
`;

const Content = styled.div`
  text-align: center;
  margin-top: 10px;
`;

const PersonalContainer = styled.div`
  display: grid;
  grid-template-columns: 3fr 1fr 1fr;
  text-align: left;
  margin-left: 10px;
`;

const Header = () => {
  const utils = useTable();
  return (
    <HeaderContainer>
      <HuluchoImg src={Hulucho} alt='hulucho' />

      <Content>
        <Typography fontWeight={900} variant='h5' color='green'>
          PROGRESS REPORT
        </Typography>
        <Typography fontWeight={600} variant='h6'>
          HULUGHU GIRLS SEC. SCHOOL
        </Typography>
        <br />
        <Typography fontSize={18} variant='h6' fontWeight={500}>
          P.O. BOX 53-70105, MASALANI
        </Typography>
        <Typography fontSize={13} variant='h6' fontWeight={500}>
          SCHOOL MOTTO: Education is Power{' '}
        </Typography>
        <hr />
        <PersonalContainer>
          <div>
            <Typography fontSize={12} variant='h6' fontWeight={500}>
              NAMES:{' '}
              <span style={{ color: 'red', textTransform: 'uppercase' }}>
                {utils.names}
              </span>
            </Typography>
            <Typography fontSize={13} variant='h6' fontWeight={500}>
              FORM:{' '}
              <span style={{ color: 'red', textTransform: 'uppercase' }}>
                {utils.form}
              </span>
            </Typography>
            <Typography fontSize={13} variant='h6' fontWeight={500}>
              YEAR{' '}
              <span style={{ color: 'red', textTransform: 'uppercase' }}>
                {utils.year}
              </span>
            </Typography>
          </div>
          <div style={{ marginTop: '21px' }}>
            <Typography fontSize={13} variant='h6' fontWeight={500}>
              STRM:{' '}
              <span style={{ color: 'red', textTransform: 'uppercase' }}>
                {utils.stream}
              </span>
            </Typography>
            <Typography fontSize={13} variant='h6' fontWeight={500}>
              TERM :{' '}
              <span style={{ color: 'red', textTransform: 'uppercase' }}>
                {utils.term}
              </span>
            </Typography>
          </div>
          <Typography fontSize={13} variant='h6' fontWeight={500}>
            ADM: :{' '}
            <span style={{ color: 'red', textTransform: 'uppercase' }}>
                {utils.admissionNumber}
            </span>
          </Typography>
        </PersonalContainer>
      </Content>
    </HeaderContainer>
  );
};

export default Header;
