export const signUp = async (email, password) => {
    try {
      const response = await fetch(`${process.env.REACT_APP_REST_API_URL}/auth`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email,
          password
        })
      });
  
      if (!response.ok) {
        throw new Error('Error creating account');
      }
  
      const data = await response.json();
      return data;
    } catch (error) {
      throw error;
    }
  };
  