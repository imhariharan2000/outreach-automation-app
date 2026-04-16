const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(bodyParser.json());

// Database connection
mongoose.connect('mongodb://localhost:27017/outreachDB', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

// API Routes
const leadsRouter = require('./routes/leads');
const campaignsRouter = require('./routes/campaigns');
const emailsRouter = require('./routes/emails');
const auditsRouter = require('./routes/audits');
const appointmentsRouter = require('./routes/appointments');
const analyticsRouter = require('./routes/analytics');

app.use('/api/leads', leadsRouter);
app.use('/api/campaigns', campaignsRouter);
app.use('/api/emails', emailsRouter);
app.use('/api/audits', auditsRouter);
app.use('/api/appointments', appointmentsRouter);
app.use('/api/analytics', analyticsRouter);

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
