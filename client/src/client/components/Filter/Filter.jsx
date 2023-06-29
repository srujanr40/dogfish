import React, { useState } from 'react';
import Button from '@mui/material/Button';
import {useDispatch} from 'react-redux';

export default function Filter() {
  const [locationFilter, setLocationFilter] = useState('');
  const dispatch = useDispatch();

  const handleFilterChange = (value) => {
    setLocationFilter(value);
    // dispatch(filterSessions(locationFilter));
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
