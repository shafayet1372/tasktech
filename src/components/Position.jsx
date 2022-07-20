import React, { useState } from 'react'
import { Box } from '@mui/system'
import { ListItem, Typography } from '@mui/material'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import { Container } from '@mui/system';
import List from '@mui/material/List';
import Button from '@mui/material/Button';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
export default function Position() {
    const [accordion,setAccordion]=useState('')

    const chanegHandler=(value)=>{
        console.log(value)
        if(accordion==value){
            setAccordion('')
            return null
        }
        setAccordion(value)
    }
  return <Box mt={4}>
      <hr style={{width:'60px',borderWidth:'4px',border:"2px solid #5BBC2E"}}/>
      <Typography sx={{fontSize:'34px',textAlign:'center'}}>
      BROWSE OPEN POSITIONS BY CATEGORY

      </Typography>

      <Typography sx={{textAlign:'center'}}>
      We are always on the lookout for talanted people
      </Typography>
      <Container maxWidth="md">
      <Accordion  onChange={()=>chanegHandler('panel1')}  expanded={accordion=='panel1'}>
        <AccordionSummary
          expandIcon={ accordion=="panel1"?<RemoveIcon/>:<AddIcon/>}
          aria-controls="panel1a-content"
          id="panel-1"
          onChange={()=>chanegHandler('panel1')}
        >
          <Typography>Sales & Marketting</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <List>
              <ListItem sx={{backgroundColor:'#FFFFFF',marginBottom:"5px",display:'flex',justifyContent:'space-between'}}>
                  <Typography>Sales Manager</Typography>
                  <Button variant="outlined" sx={{borderRadius:'1px solid rgba(0, 0, 0, 0.1)',backgroundColor:'rgb(255, 255, 255)',border:'1px solid #80808080',color:'rgba(0, 0, 0, 0.6)',"&:hover":{backgroundColor:'#182F59',color:'white'}}}>Apply Now</Button>

              </ListItem>
              <ListItem sx={{backgroundColor:'#FFFFFF',marginBottom:"5px",display:'flex',justifyContent:'space-between'}}>
                  <Typography>Sales Executive</Typography>
                  <Button variant="outlined" sx={{borderRadius:'1px solid rgba(0, 0, 0, 0.1)',backgroundColor:'rgb(255, 255, 255)',border:'1px solid #80808080',color:'rgba(0, 0, 0, 0.6)',"&:hover":{backgroundColor:'#182F59',color:'white'}}}>Apply Now</Button>

              </ListItem>
          </List>
        </AccordionDetails>
      </Accordion>
      <Accordion    onChange={()=>chanegHandler('panel2')} expanded={accordion=='panel2'}>
        <AccordionSummary
         expandIcon={ accordion=="panel2"?<RemoveIcon/>:<AddIcon/>} 
          aria-controls="panel2a-content"
          id="panel2a-header"
        
        >
          <Typography>Human Resource</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <List>
              <ListItem sx={{backgroundColor:'#FFFFFF',marginBottom:"5px",display:'flex',justifyContent:'space-between'}}>
                  <Typography>Sales Executive</Typography>
                  <Button variant="outlined" sx={{borderRadius:'1px solid rgba(0, 0, 0, 0.1)',backgroundColor:'rgb(255, 255, 255)',border:'1px solid #80808080',color:'rgba(0, 0, 0, 0.6)',"&:hover":{backgroundColor:'#182F59',color:'white'}}}>Apply Now</Button>

              </ListItem>
              <ListItem sx={{backgroundColor:'#FFFFFF',marginBottom:"5px",display:'flex',justifyContent:'space-between'}}>
                  <Typography>Sales Executive</Typography>
                  <Button variant="outlined" sx={{borderRadius:'1px solid rgba(0, 0, 0, 0.1)',backgroundColor:'rgb(255, 255, 255)',border:'1px solid #80808080',color:'rgba(0, 0, 0, 0.6)',"&:hover":{backgroundColor:'#182F59',color:'white'}}}>Apply Now</Button>

              </ListItem>
          </List>
        </AccordionDetails>
      </Accordion>
      <Accordion    onChange={()=>chanegHandler('panel3')} expanded={accordion=='panel3'}>
        <AccordionSummary
         expandIcon={ accordion=="panel3"?<RemoveIcon/>:<AddIcon/>} 
          aria-controls="panel2a-content"
          id="panel2a-header"
        
        >
          <Typography>Administration</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <List>
              <ListItem sx={{backgroundColor:'#FFFFFF',marginBottom:"5px",display:'flex',justifyContent:'space-between'}}>
                  <Typography></Typography>
                  <Button variant="outlined" sx={{borderRadius:'1px solid rgba(0, 0, 0, 0.1)',backgroundColor:'rgb(255, 255, 255)',border:'1px solid #80808080',color:'rgba(0, 0, 0, 0.6)',"&:hover":{backgroundColor:'#182F59',color:'white'}}}>Apply Now</Button>

              </ListItem>
              <ListItem sx={{backgroundColor:'#FFFFFF',marginBottom:"5px",display:'flex',justifyContent:'space-between'}}>
                  <Typography>Sales Executive</Typography>
                  <Button variant="outlined" sx={{borderRadius:'1px solid rgba(0, 0, 0, 0.1)',backgroundColor:'rgb(255, 255, 255)',border:'1px solid #80808080',color:'rgba(0, 0, 0, 0.6)',"&:hover":{backgroundColor:'#182F59',color:'white'}}}>Apply Now</Button>

              </ListItem>
          </List>
        </AccordionDetails>
      </Accordion>



      <Accordion    onChange={()=>chanegHandler('panel4')} expanded={accordion=='panel4'}>
        <AccordionSummary
         expandIcon={ accordion=="panel4"?<RemoveIcon/>:<AddIcon/>} 
          aria-controls="panel2a-content"
          id="panel2a-header"
        
        >
          <Typography>Creative</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <List>
              <ListItem sx={{backgroundColor:'#FFFFFF',marginBottom:"5px",display:'flex',justifyContent:'space-between'}}>
                  <Typography></Typography>
                  <Button variant="outlined" sx={{borderRadius:'1px solid rgba(0, 0, 0, 0.1)',backgroundColor:'rgb(255, 255, 255)',border:'1px solid #80808080',color:'rgba(0, 0, 0, 0.6)',"&:hover":{backgroundColor:'#182F59',color:'white'}}}>Apply Now</Button>

              </ListItem>
              <ListItem sx={{backgroundColor:'#FFFFFF',marginBottom:"5px",display:'flex',justifyContent:'space-between'}}>
                  <Typography>Sales Executive</Typography>
                  <Button variant="outlined" sx={{borderRadius:'1px solid rgba(0, 0, 0, 0.1)',backgroundColor:'rgb(255, 255, 255)',border:'1px solid #80808080',color:'rgba(0, 0, 0, 0.6)',"&:hover":{backgroundColor:'#182F59',color:'white'}}}>Apply Now</Button>

              </ListItem>
          </List>
        </AccordionDetails>
      </Accordion>

      
      <Accordion    onChange={()=>chanegHandler('panel5')} expanded={accordion=='panel5'}>
        <AccordionSummary
         expandIcon={ accordion=="panel5"?<RemoveIcon/>:<AddIcon/>} 
          aria-controls="panel2a-content"
          id="panel2a-header"
        
        >
          <Typography>Digital Marketing</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <List>
              <ListItem sx={{backgroundColor:'#FFFFFF',marginBottom:"5px",display:'flex',justifyContent:'space-between'}}>
                  <Typography></Typography>
                  <Button variant="outlined" sx={{borderRadius:'1px solid rgba(0, 0, 0, 0.1)',backgroundColor:'rgb(255, 255, 255)',border:'1px solid #80808080',color:'rgba(0, 0, 0, 0.6)',"&:hover":{backgroundColor:'#182F59',color:'white'}}}>Apply Now</Button>

              </ListItem>
              <ListItem sx={{backgroundColor:'#FFFFFF',marginBottom:"5px",display:'flex',justifyContent:'space-between'}}>
                  <Typography>Sales Executive</Typography>
                  <Button variant="outlined" sx={{borderRadius:'1px solid rgba(0, 0, 0, 0.1)',backgroundColor:'rgb(255, 255, 255)',border:'1px solid #80808080',color:'rgba(0, 0, 0, 0.6)',"&:hover":{backgroundColor:'#182F59',color:'white'}}}>Apply Now</Button>

              </ListItem>
          </List>
        </AccordionDetails>
      </Accordion>
      
      <Accordion    onChange={()=>chanegHandler('panel6')} expanded={accordion=='panel6'}>
        <AccordionSummary
         expandIcon={ accordion=="panel6"?<RemoveIcon/>:<AddIcon/>} 
          aria-controls="panel2a-content"
          id="panel2a-header"
        
        >
          <Typography>Development</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <List>
              <ListItem sx={{backgroundColor:'#FFFFFF',marginBottom:"5px",display:'flex',justifyContent:'space-between'}}>
                  <Typography></Typography>
                  <Button variant="outlined" sx={{borderRadius:'1px solid rgba(0, 0, 0, 0.1)',backgroundColor:'rgb(255, 255, 255)',border:'1px solid #80808080',color:'rgba(0, 0, 0, 0.6)',"&:hover":{backgroundColor:'#182F59',color:'white'}}}>Apply Now</Button>

              </ListItem>
              <ListItem sx={{backgroundColor:'#FFFFFF',marginBottom:"5px",display:'flex',justifyContent:'space-between'}}>
                  <Typography>Sales Executive</Typography>
                  <Button variant="outlined" sx={{borderRadius:'1px solid rgba(0, 0, 0, 0.1)',backgroundColor:'rgb(255, 255, 255)',border:'1px solid #80808080',color:'rgba(0, 0, 0, 0.6)',"&:hover":{backgroundColor:'#182F59',color:'white'}}}>Apply Now</Button>

              </ListItem>
          </List>
        </AccordionDetails>
      </Accordion>
      </Container>

      
  </Box>
}
