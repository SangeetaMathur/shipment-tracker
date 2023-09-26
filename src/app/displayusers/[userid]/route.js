export default async function handler(req, res) {
    const { userId } = req.query;
  
    try {
      // Fetch user data based on the userId from your data source (e.g., database)
      const userData = await fetchUserDataFromDatabase(userId);
  
      if (!userData) {
        return res.status(404).json({ message: 'User not found' });
      }
  
      // Return the user data as JSON
      res.status(200).json(userData);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  }