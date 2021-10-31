import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import GitHubIcon from '@mui/icons-material/GitHub';
import Typography from '@mui/material/Typography'
import InfoTwoToneIcon from '@mui/icons-material/InfoTwoTone';
import ContactPhoneOutlinedIcon from '@mui/icons-material/ContactPhoneOutlined';
import styled from 'styled-components'

const HoverButton = styled(Button)`
    &:hover svg path {
        color: blue;
    }
`

export default function Footer() {
    return (
        <AppBar style={{backgroundColor:'blacK'}} component='footer' className='footer' position="static">
        <Container   maxWidth="md">
            <Toolbar>
            <Typography variant="body1" color="white" className='footer_text'>
        © 2021 All rights reserved to Shay Dilouya.          
            </Typography>
              <HoverButton style={{ left: "10%" }} target="_blank" href="https://github.com/shay-dilo">  
                  <GitHubIcon style={{color:'white'}}></GitHubIcon>
              </HoverButton>    
              <HoverButton style={{ left: "10%" }} target="_blank" href="/AboutUs">  
              <InfoTwoToneIcon style={{color:'white'}}></InfoTwoToneIcon>
              </HoverButton>  
              <HoverButton style={{ left: "10%" }} target="_blank" href="/ContactUs">  
              <ContactPhoneOutlinedIcon style={{color:'white'}}></ContactPhoneOutlinedIcon>
              </HoverButton>  
              
            </Toolbar>
          </Container>
        </AppBar>
    )
}