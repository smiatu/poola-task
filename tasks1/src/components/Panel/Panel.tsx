import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import EditLocationIcon from '@mui/icons-material/EditLocation';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

import './Panel.scss';

const Panel = () => {
  return (
    <>
      <Accordion className='accordion'>
        <AccordionSummary className='accordion__summary'>
          <Typography>Personal data</Typography>
          <Button variant="outlined" startIcon={<EditLocationIcon />}>CHANGE</Button>
        </AccordionSummary>
        <AccordionDetails className='accordion__details'>
          <TextField
            label="Name"
            variant="standard"
          />
          <TextField
            label="Email"
            variant="standard"
          />
          <FormControl variant="standard">
            <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
            <Input
              id="standard-adornment-password"
              type={'password'}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                  >
                    {<VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>
          <Button variant="text">SAVE</Button>
        </AccordionDetails>
      </Accordion>
    </>
  )
}

export default Panel
