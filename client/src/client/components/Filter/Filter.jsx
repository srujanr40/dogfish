import React, { useState } from 'react';
import Button from '@mui/material/Button';

export default function Filter() {
  const [locationFilter, setLocationFilter] = useState('');

  const handleFilterChange = (e) => {
    setLocationFilter(e.target.value);
  };

  return (
    <div>
        <Button
              sx={{ color: 'white', backgroundColor: 'lightsalmon', textTransform: 'none', marginRight: '10px' }}
              size="small" onClick={() => handleFilterChange('outdoor')}
            >
            Outdoors
        </Button>
        <Button
              sx={{ color: 'white', backgroundColor: 'lightsalmon', textTransform: 'none' }}
              size="small" onClick={() => handleFilterChange('indoor')}
            >
            Indoors
        </Button>
      </div>
  );
};
