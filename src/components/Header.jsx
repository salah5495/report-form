import { Typography } from '@mui/material';
import React from 'react';
import styled from 'styled-components';
import Hulucho from '../assets/hulucho.jpeg';
import TextField from '@mui/material/TextField';

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
  grid-template-columns: 1fr 1fr 1fr;
  text-align: left;
  margin-left: 30px;
`;

const Header = () => {
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
            <Typography fontSize={13} variant='h6' fontWeight={500}>
              NAMES:{' '}
            </Typography>
            <Typography fontSize={13} variant='h6' fontWeight={500}>
              FORM
            </Typography>
            <Typography fontSize={13} variant='h6' fontWeight={500}>
              YEAR{' '}
            </Typography>
          </div>
          <div style={{ marginTop: '21px' }}>
            <Typography fontSize={13} variant='h6' fontWeight={500}>
              STRM
            </Typography>
            <Typography fontSize={13} variant='h6' fontWeight={500}>
              TERM
            </Typography>
          </div>
          <Typography fontSize={13} variant='h6' fontWeight={500}>
            ADM:{' '}
          </Typography>
        </PersonalContainer>
      </Content>
    </HeaderContainer>
  );
};

export default Header;
