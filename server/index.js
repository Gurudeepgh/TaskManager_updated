
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const taskRoutes = require('./routes/taskRoutes');

const app = express();
app.use(express.json());
app.use(cors());

// Connect to MongoDB
mongoose.connect('mongodb+srv://gurudeep2208:3HfJpBTAQ1Igfve3@cluster0.oolzi7g.mongodb.net/', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Task routes
app.use('/api/tasks', taskRoutes);

const PORT = 3000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));