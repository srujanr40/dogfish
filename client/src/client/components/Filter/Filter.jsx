import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import {useDispatch} from 'react-redux';
import { getSessionsAsync } from '../../thunks/thunks';

export default function Filter() {
  const [locationFilter, setLocationFilter] = useState('');
  const dispatch = useDispatch();

  const handleFilterChange = (value) => {
    setLocationFilter(value);
    dispatch(getSessionsAsync(value));
  };

  // useEffect(() => {
  //   dispatch(filterSessionsAsync(locationFilter));
  // }, [locationFilter]);

  return (
    <div>
        <Button
                sx={{ color: 'white', backgroundColor: 'lightsalmon', textTransform: 'none', marginRight: '10px' }}
                size="small" onClick={() => handleFilterChange('')}
              >
              All
          </Button>
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
