
const getSessions = async () => {
    const response = await fetch('http://localhost:3001/sessions', {
      method: 'GET'
    });
    return response.json();
  };
  
const filterSessions = async (item) => {
    const endpoint = '/sessions';
    const queryParams = new URLSearchParams({ filter: item.item });
    const url = `http://localhost:3001/sessions${endpoint}?${queryParams}`;
    const response = await fetch(url, {
      method: 'GET',
    });
    const data = await response.json();
    if (!response.ok) {
      const errorMsg = data?.message;
      throw new Error(errorMsg)
    }
    return data;
}
  
  export default {
    getSessions,
    filterSessions
  };
  