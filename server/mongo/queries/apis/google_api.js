
const axios = require('axios');
const getGeocode = async (address) => {
    try {
      const apiUrl = 'https://maps.googleapis.com/maps/api/geocode/json';
  
      const response = await axios.get(apiUrl, {
        params: {
          address,
          key: "",
        },
      });
  
      if (response.data.status === 'OK') {
        const result = response.data.results[0];
        const { lat, lng } = result.geometry.location;
        return { latitude: lat, longitude: lng };
      } else {
        throw new Error('Geocoding API returned an error.');
      }
    } catch (error) {
      console.error('Error getting geocode:', error.message);
      return null;
    }
  };

module.exports = getGeocode;