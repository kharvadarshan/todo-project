const express = require('express');
const mongoose = require('mongoose');
const app = express();

// Middleware to parse JSON request bodies
app.use(express.json());

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/todo_db', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch((err) => console.error('MongoDB connection error:', err));

// Define Mongoose Schema
const TodoSchema = new mongoose.Schema({
  itemId: Number,
  itemUUID: String,
  itemHash: String,
  itemName: String,
  itemDescription: String,
});

// Create Mongoose Model
const Todo = mongoose.model('Todo', TodoSchema);

// POST Route to handle to-do item submission
app.post('/submittodoitem', async (req, res) => {
  const { itemId, itemUUID, itemHash, itemName, itemDescription } = req.body;

  if (!itemName || !itemDescription) {
    return res.status(400).json({ error: 'Item Name and Description are required' });
  }

  try {
    const newTodo = new Todo({ itemId, itemUUID, itemHash, itemName, itemDescription });
    await newTodo.save();
    res.status(200).json({ message: 'To-Do Item saved successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to save item', details: err.message });
  }
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
