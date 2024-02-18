import ScoreModel from "./score-models.js";

export const getScores = async function (req, res) {
    try {
      const userData = await ScoreModel.find().sort({ Score: -1 });
      res.status(200).json({users: userData});
    } catch (error) {
      console.error('Error fetching data:', error);
      res.status(500).json({ error: error });
    }
}

export const getScore = async (req, res) => {
    const userId = req.params.id;
    console.log(userId);
  
    try {
      // Use findById to retrieve a user by _id
      const userData = await ScoreModel.findById(userId);
  
      if (!userData) {
        // If no user is found with the given _id, return a 404 status
        return res.status(404).json({ error: 'User not found' });
      }
  
      res.status(200).json({ user: userData });
    } catch (error) {
      console.error('Error fetching user data:', error);
      res.status(500).json({ error: error });
    }
}

export const changeScore = async (req, res) => {
    const userId = req.params.id;
    const newScore = req.body.Score;
    console.log(userId, newScore);
  
    try {
      // Use findByIdAndUpdate to find and update a user by _id
      const updatedUserData = await ScoreModel.findByIdAndUpdate(userId,
        { Score: newScore },
        { new: true } // To return the updated document
      );
      console.log(updatedUserData)  
      if (!updatedUserData) {
        // If no user is found with the given _id, return a 404 status
        return res.status(404).json({ error: 'User not found' });
      }
  
      console.log(updatedUserData);
      res.status(200).json({ user: updatedUserData });
    } catch (error) {
      console.error('Error updating user data:', error);
      res.status(500).json({ error: error });
    }
}

export const newScore = async (req, res) => {
    const { Name, Score } = req.body;
  
    try {
      // Check if the provided name already exists
      const existingUser = await ScoreModel.findOne({ Name: Name });
  
      if (existingUser) {
        return res.status(400).json({ error: 'User with this name already exists' });
      }
  
      // Create a new document and save it to the collection
      const newUser = new ScoreModel({ Name: Name, Score: Score });
      const savedUser = await newUser.save();
  
      res.status(201).json({ user: savedUser });
    } catch (error) {
      console.error('Error adding new user:', error);
      res.status(500).json({ error: error });
    }
}

export const delScore = async (req, res) => {
    const userId = req.params.id;
  
    try {
      // Use findByIdAndRemove to find and remove a user by _id
      const removedUserData = await ScoreModel.findByIdAndDelete(userId);
  
      if (!removedUserData) {
        // If no user is found with the given _id, return a 404 status
        return res.status(404).json({ error: 'User not found' });
      }
  
      res.status(200).json({ message: 'User removed successfully', user: removedUserData });
    } catch (error) {
      console.error('Error removing user:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
}





