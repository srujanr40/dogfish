export const signUp = async (email, password) => {
    try {
      const response = await fetch('http://localhost:3001/auth', {
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
      throw error.message;
    }
  };
  