const express = require('express');
const mongoose = require('mongoose');
const MenuItem = require('./models/Dish');
const app = express();
const PORT = 3001;

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/Restaurant-CS319', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Define a MongoDB model
const MenuItem = mongoose.model('MenuItem', {
  id: String,
  dishName: String,
  dishPrice: Number,
  // Add other fields as needed
});

// Define API endpoint to fetch dishes
app.get('/api/menu_items', async (req, res) => {
  try {
    const menuItems = await MenuItem.find();
    res.json(menuItems);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
