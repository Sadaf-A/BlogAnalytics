const express = require('express');
const statsRoutes = require('./routes/StatsRoutes');
const searchRoutes = require('./routes/SearchRoutes');
const app = express();

app.use('/api', statsRoutes);
app.use('/api', searchRoutes);

app.listen(8000, () => {console.log("server running on port 8000")});