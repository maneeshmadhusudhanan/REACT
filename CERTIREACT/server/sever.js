const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/certificateDApp', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Define Certificate Schema
const certificateSchema = new mongoose.Schema({
  SELECT_COURSE: String,
  CERTIFICATE_ID: String,
  CANDIDATE_NAME: String,
  SELECT_GRADE: String,
  ISSUE_DATE: Date,
});


const Certificate = mongoose.model('Certificate', certificateSchema);

// Routes
app.post('/api/certificates', async (req, res) => {
  try {
    const newCertificate = new Certificate(req.body);
    await newCertificate.save();
    res.status(201).json(newCertificate);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

app.get('/api/certificates/:id', async (req, res) => {
  try {
    const certificate = await Certificate.findOne({ certificateId: req.params.id });
    if (!certificate) {
      return res.status(404).json({ message: 'Certificate not found' });
    }
    res.json(certificate);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});