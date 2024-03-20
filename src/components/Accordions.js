import React from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import SpeakerOutlinedIcon from '@mui/icons-material/SpeakerOutlined';
import './css/Accordion.css'
import EventCards from './EventCards';

function Accordions() {
  return (
    <div>
        <Accordion className='accordion'>
        <AccordionSummary
          expandIcon={<SpeakerOutlinedIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography className="accordionTitle">ALL HOUSE</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <EventCards />
          <EventCards />
          </Typography>
        </AccordionDetails>
      </Accordion>
        <Accordion className='accordion'>
        <AccordionSummary
          expandIcon={<SpeakerOutlinedIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography className="accordionTitle">ELECTRO HOUSE</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <EventCards />
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion className='accordion'>
        <AccordionSummary
          expandIcon={<SpeakerOutlinedIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography className="accordionTitle">TECH HOUSE</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <EventCards />
          </Typography>
        </AccordionDetails>
      </Accordion>
        <Accordion className='accordion'>
        <AccordionSummary
          expandIcon={<SpeakerOutlinedIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography className="accordionTitle">AFRO HOUSE</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <EventCards />
          <EventCards />
          </Typography>
        </AccordionDetails>
      </Accordion>
        <Accordion className='accordion'>
        <AccordionSummary
          expandIcon={<SpeakerOutlinedIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography className="accordionTitle">ACID HOUSE</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <EventCards />
          </Typography>
        </AccordionDetails>
      </Accordion>
        <Accordion className='accordion'>
        <AccordionSummary
          expandIcon={<SpeakerOutlinedIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography className="accordionTitle">BASS HOUSE</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <EventCards />
          </Typography>
        </AccordionDetails>
      </Accordion>
        <Accordion className='accordion'>
        <AccordionSummary
          expandIcon={<SpeakerOutlinedIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography className="accordionTitle">DEEP HOUSE</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <EventCards />
          </Typography>
        </AccordionDetails>
      </Accordion>
        <Accordion className='accordion'>
        <AccordionSummary
          expandIcon={<SpeakerOutlinedIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography className="accordionTitle">FUNKY HOUSE</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <EventCards />
          </Typography>
        </AccordionDetails>
      </Accordion>
        <Accordion className='accordion'>
        <AccordionSummary
          expandIcon={<SpeakerOutlinedIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography className="accordionTitle">PROGRESSIVE HOUSE</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <EventCards />
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion className='accordion'>
        <AccordionSummary
          expandIcon={<SpeakerOutlinedIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography className="accordionTitle">TROPICAL HOUSE</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <EventCards />
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  )
}

export default Accordions