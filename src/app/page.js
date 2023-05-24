'use client';
import React, { useState } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import PhoneIcon from '@mui/icons-material/Phone';
import HotelIcon from '@mui/icons-material/Hotel';

const cats = [
  {
    icon: <HotelIcon />,
    label: 'hotels'
  },
  {
    icon: <PhoneIcon />,
    label: 'calls'
  }
]

export default function Home() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ bgcolor: 'background.paper' }}>
    <Tabs
      value={value}
      onChange={handleChange}
      variant="scrollable"
      scrollButtons="auto"
      aria-label="scrollable auto tabs example"
    >
      {
        (cats.map((obj, i) => <Tab key={i} icon={obj.icon} label={obj.label} />))
      }
    </Tabs>
    </Box>
  )
}
