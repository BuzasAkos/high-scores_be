import {get, getAll, getName, update, create, remove} from "./score.service.js";

export const getScores = async function (req, res) {
    try {
      const userData = await getAll();
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
      const userData = await get(userId);
  
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
      const updatedUserData = await update(userId, newScore);
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
    try {
      // Check if the provided name already exists
      const existingUser = await getName(req.body.Name);
  
      if (existingUser) {
        return res.status(400).json({ error: 'User with this name already exists' });
      }
  
      // Create a new document and save it to the collection
      const savedUser = await create(req.body);
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
      const removedUserData = await remove(id);
  
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





